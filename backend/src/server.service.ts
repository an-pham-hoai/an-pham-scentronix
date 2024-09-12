import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ServerService {
    private servers = [
        { url: 'https://does-not-work.perfume.new', priority: 1 },
        { url: 'https://gitlab.com', priority: 4 },
        { url: 'http://app.scnt.me', priority: 3 },
        { url: 'https://offline.scentronix.com', priority: 2 },
    ];

    async findServer() {
        const serverPromises = this.servers.map(async (server) => {
            try {
                const response = await axios.get(server.url, { timeout: 5000 });
                if (response.status >= 200 && response.status < 300) {
                    return server;
                }
            } catch (error) {
                // Ignoring offline servers
            }
            return null;
        });

        const results = await Promise.all(serverPromises);
        const onlineServers = results.filter(server => server !== null);

        if (onlineServers.length === 0) {
            throw new Error('No servers are online');
        }

        onlineServers.sort((a, b) => a.priority - b.priority);
        return onlineServers[0];  // Return server with the lowest priority
    }
}
