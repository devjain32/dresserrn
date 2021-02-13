/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMetrics = /* GraphQL */ `
  mutation CreateMetrics(
    $input: CreateMetricsInput!
    $condition: ModelMetricsConditionInput
  ) {
    createMetrics(input: $input, condition: $condition) {
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
export const updateMetrics = /* GraphQL */ `
  mutation UpdateMetrics(
    $input: UpdateMetricsInput!
    $condition: ModelMetricsConditionInput
  ) {
    updateMetrics(input: $input, condition: $condition) {
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
export const deleteMetrics = /* GraphQL */ `
  mutation DeleteMetrics(
    $input: DeleteMetricsInput!
    $condition: ModelMetricsConditionInput
  ) {
    deleteMetrics(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createThriftStore = /* GraphQL */ `
  mutation CreateThriftStore(
    $input: CreateThriftStoreInput!
    $condition: ModelThriftStoreConditionInput
  ) {
    createThriftStore(input: $input, condition: $condition) {
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
export const updateThriftStore = /* GraphQL */ `
  mutation UpdateThriftStore(
    $input: UpdateThriftStoreInput!
    $condition: ModelThriftStoreConditionInput
  ) {
    updateThriftStore(input: $input, condition: $condition) {
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
export const deleteThriftStore = /* GraphQL */ `
  mutation DeleteThriftStore(
    $input: DeleteThriftStoreInput!
    $condition: ModelThriftStoreConditionInput
  ) {
    deleteThriftStore(input: $input, condition: $condition) {
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
