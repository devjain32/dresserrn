// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ClothingType = {
  "JACKET": "JACKET",
  "SUIT": "SUIT",
  "HOODIE": "HOODIE",
  "PANTS": "PANTS"
};

const { Metrics, Item, User, ThriftStore } = initSchema(schema);

export {
  Metrics,
  Item,
  User,
  ThriftStore,
  ClothingType
};