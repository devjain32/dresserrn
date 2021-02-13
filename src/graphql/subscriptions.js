/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMetrics = /* GraphQL */ `
  subscription OnCreateMetrics {
    onCreateMetrics {
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
export const onUpdateMetrics = /* GraphQL */ `
  subscription OnUpdateMetrics {
    onUpdateMetrics {
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
export const onDeleteMetrics = /* GraphQL */ `
  subscription OnDeleteMetrics {
    onDeleteMetrics {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateThriftStore = /* GraphQL */ `
  subscription OnCreateThriftStore {
    onCreateThriftStore {
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
export const onUpdateThriftStore = /* GraphQL */ `
  subscription OnUpdateThriftStore {
    onUpdateThriftStore {
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
export const onDeleteThriftStore = /* GraphQL */ `
  subscription OnDeleteThriftStore {
    onDeleteThriftStore {
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
