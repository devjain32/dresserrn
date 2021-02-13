/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listMetricss = /* GraphQL */ `
  query ListMetricss(
    $filter: ModelMetricsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMetricss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        AveragePrice
        IdentityScore
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMetrics = /* GraphQL */ `
  query GetMetrics($id: ID!) {
    getMetrics(id: $id) {
      id
      AveragePrice
      IdentityScore
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const syncMetrics = /* GraphQL */ `
  query SyncMetrics(
    $filter: ModelMetricsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMetrics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        AveragePrice
        IdentityScore
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      Name
      Brand
      ItemCategory
      Size
      thriftstoreID
      Price
      Images
      Tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Brand
        ItemCategory
        Size
        thriftstoreID
        Price
        Images
        Tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncItems = /* GraphQL */ `
  query SyncItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Name
        Brand
        ItemCategory
        Size
        thriftstoreID
        Price
        Images
        Tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      FirstName
      LastName
      PhoneNumber
      Email
      Address
      PurchasedItems
      CartItems
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserMetrics {
        id
        AveragePrice
        IdentityScore
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FirstName
        LastName
        PhoneNumber
        Email
        Address
        PurchasedItems
        CartItems
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        FirstName
        LastName
        PhoneNumber
        Email
        Address
        PurchasedItems
        CartItems
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getThriftStore = /* GraphQL */ `
  query GetThriftStore($id: ID!) {
    getThriftStore(id: $id) {
      id
      Name
      Address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Inventory {
        nextToken
        startedAt
      }
    }
  }
`;
export const listThriftStores = /* GraphQL */ `
  query ListThriftStores(
    $filter: ModelThriftStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThriftStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncThriftStores = /* GraphQL */ `
  query SyncThriftStores(
    $filter: ModelThriftStoreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncThriftStores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Name
        Address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
