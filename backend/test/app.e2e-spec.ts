import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import axios from 'axios';

jest.mock('axios');

// Type assertion to allow 'mockImplementation'
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/find (GET) - should return the best available server', async () => {
    // Mock responses from the external servers
    const mockResponses = [
      { url: 'https://does-not-work.perfume.new', status: 500 },
      { url: 'https://gitlab.com', status: 200 },
      { url: 'http://app.scnt.me', status: 200 },
      { url: 'https://offline.scentronix.com', status: 500 },
    ];

    // Mock axios.get to simulate the server responses
    mockedAxios.get.mockImplementation((url) => {
      const mockResponse = mockResponses.find((res) => res.url === url);
      if (mockResponse && mockResponse.status >= 200 && mockResponse.status < 300) {
        return Promise.resolve({ status: mockResponse.status });
      } else {
        return Promise.reject(new Error('Server offline'));
      }
    });

    // Perform the GET request to the find server endpoint
    const response = await request(app.getHttpServer())
      .get('/find')
      .expect(200);

    // Validate the response contains the best available server (with the lowest priority)
    expect(response.body.url).toBe('http://app.scnt.me'); // This server has lower priority than gitlab.com
  });

});
