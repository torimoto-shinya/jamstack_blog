import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'torimoto',
  apiKey: process.env.API_KEY,
});
