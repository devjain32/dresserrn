import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ClothingType {
  SHIRTS = "SHIRTS",
  SWEATSHIRTS = "SWEATSHIRTS",
  SWEATPANTS = "SWEATPANTS",
  TSHIRTS = "TSHIRTS",
  POLOS = "POLOS",
  SWEATERS = "SWEATERS",
  PANTS = "PANTS",
  CHINOS = "CHINOS",
  SHORTS = "SHORTS",
  JACKETS = "JACKETS",
  SUITS = "SUITS",
  SWIMWEAR = "SWIMWEAR",
  CASUAL = "CASUAL",
  DRESSES = "DRESSES",
  JUMPSUITS = "JUMPSUITS",
  SKIRTS = "SKIRTS",
  SHOES = "SHOES",
  JEWELRY = "JEWELRY",
  HAIR = "HAIR",
  BAGS = "BAGS",
  ACCESSORIES = "ACCESSORIES",
  BELTS = "BELTS",
  EYEWEAR = "EYEWEAR",
  TIES = "TIES",
  HATS = "HATS",
  BLOUSES = "BLOUSES",
  LEGGINGS = "LEGGINGS"
}



export declare class Metrics {
  readonly id: string;
  readonly AveragePrice?: number;
  readonly IdentityScore?: number;
  constructor(init: ModelInit<Metrics>);
  static copyOf(source: Metrics, mutator: (draft: MutableModel<Metrics>) => MutableModel<Metrics> | void): Metrics;
}

export declare class Item {
  readonly id: string;
  readonly Name: string;
  readonly Brand: string;
  readonly ItemCategory: ClothingType | keyof typeof ClothingType;
  readonly Size: string;
  readonly thriftstoreID: string;
  readonly Price?: number;
  readonly Images?: string[];
  readonly Tags?: (string | null)[];
  constructor(init: ModelInit<Item>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

export declare class User {
  readonly id: string;
  readonly FirstName: string;
  readonly UserMetrics?: Metrics;
  readonly LastName?: string;
  readonly PhoneNumber?: string;
  readonly Email?: string;
  readonly Address?: string;
  readonly PurchasedItems?: (string | null)[];
  readonly CartItems?: (string | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class ThriftStore {
  readonly id: string;
  readonly Name: string;
  readonly Inventory?: (Item | null)[];
  readonly Address: string;
  constructor(init: ModelInit<ThriftStore>);
  static copyOf(source: ThriftStore, mutator: (draft: MutableModel<ThriftStore>) => MutableModel<ThriftStore> | void): ThriftStore;
}