import { Client } from '@elastic/elasticsearch';

const client = new Client({ node: 'http://localhost:9200' });

const searchProducts = async (query: string) => {
  const result = await client.search({
    index: 'products',
    body: {
      query: {
        match: { name: query },
      },
    },
  });

  return result.body.hits.hits;
};
