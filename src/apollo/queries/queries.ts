import { gql} from '@apollo/client';

export const GET_ALL_IT_EQUIPMENT = gql`

query GetItEquipment($categoryId: Int!) {
  getItEquipment(categoryID: $categoryId) {
    id
    model
    description
    image
  }
}
`;


export const GET_IT_ITEM = gql`
query GetItItem($Id: Int!) {
  getItItem(Id: $Id) {
    category
    datasheet
    description
    id
    image
    model
    table {
      row
      value
    }
    vendor
  }
}
`


export const GET_CONSUMER_ITEM = gql`
query GetConsumerItem($Id: Int!) {
  getConsumerItem(Id: $Id) {
    category
    datasheet
    description
    id
    image
    model
    table {
      row
      value
    }
    vendor
  }
}
`

