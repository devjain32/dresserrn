// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ClothingType = {
  "SHIRTS": "SHIRTS",
  "SWEATSHIRTS": "SWEATSHIRTS",
  "SWEATPANTS": "SWEATPANTS",
  "TSHIRTS": "TSHIRTS",
  "POLOS": "POLOS",
  "SWEATERS": "SWEATERS",
  "PANTS": "PANTS",
  "CHINOS": "CHINOS",
  "SHORTS": "SHORTS",
  "JACKETS": "JACKETS",
  "SUITS": "SUITS",
  "SWIMWEAR": "SWIMWEAR",
  "CASUAL": "CASUAL",
  "DRESSES": "DRESSES",
  "JUMPSUITS": "JUMPSUITS",
  "SKIRTS": "SKIRTS",
  "SHOES": "SHOES",
  "JEWELRY": "JEWELRY",
  "HAIR": "HAIR",
  "BAGS": "BAGS",
  "ACCESSORIES": "ACCESSORIES",
  "BELTS": "BELTS",
  "EYEWEAR": "EYEWEAR",
  "TIES": "TIES",
  "HATS": "HATS",
  "BLOUSES": "BLOUSES",
  "LEGGINGS": "LEGGINGS"
};

const { Metrics, Item, User, ThriftStore } = initSchema(schema);

export {
  Metrics,
  Item,
  User,
  ThriftStore,
  ClothingType
};