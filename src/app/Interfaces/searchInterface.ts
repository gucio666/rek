export interface ListItems {
  node: Item;
  __typename: string
}

interface Item {
  id: string;
  name: string;
  description?: string;
  url?: string;
  owner?: Owner;
  __typename: string
}
interface Owner {
  login: string;
  __typename: string
}
