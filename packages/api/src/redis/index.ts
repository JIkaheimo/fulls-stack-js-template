import { createClient, RedisClientType } from 'redis';

let clientInstance: RedisClientType<any> | null = null;

export const client = async () => {
  if (!clientInstance) {
    console.log('Connecting to Redis');
    clientInstance = createClient();

    clientInstance
      .on('error', console.error)
      .on('connect', () => {
        console.log('Successfully connected to Redis!');
      })
      .on('end', () => {
        console.log('Disconnected from Redis...');
      });

    try {
      await clientInstance.connect();
    } catch (error) {
      console.error(`Error connecting to Redis: ${error}`);
    }
  }

  return clientInstance;
};
