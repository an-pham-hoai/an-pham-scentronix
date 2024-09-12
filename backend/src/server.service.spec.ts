import { Test, TestingModule } from '@nestjs/testing';
import { ServerService } from './server.service';
import axios from 'axios';

jest.mock('axios');

// Type assertion to allow 'mockImplementation'
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ServerService', () => {
  let service: ServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerService],
    }).compile();

    service = module.get<ServerService>(ServerService);
  });

  it('should return the online server with the lowest priority', async () => {
    const mockResponses = [
      { url: 'https://does-not-work.perfume.new', status: 500 },
      { url: 'https://gitlab.com', status: 200 },
      { url: 'http://app.scnt.me', status: 200 },
      { url: 'https://offline.scentronix.com', status: 500 },
    ];

    mockedAxios.get.mockImplementation((url) => {
      const mockResponse = mockResponses.find(res => res.url === url);
      if (mockResponse && mockResponse.status >= 200 && mockResponse.status < 300) {
        return Promise.resolve({ status: mockResponse.status });
      } else {
        return Promise.reject(new Error('Server offline'));
      }
    });

    const server = await service.findServer();
    expect(server.url).toBe('http://app.scnt.me'); // This server has lower priority than gitlab.com
  });

  it('should throw an error if no servers are online', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Server offline'));

    await expect(service.findServer()).rejects.toThrow('No servers are online');
  });
});
