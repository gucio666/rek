import { ListItems } from './searchInterface';

export interface Result {
  data: SearchList;
  loading: boolean,
  networkStatus: number,
}

interface SearchList {
  search: ListElements;
}
interface ListElements {
  edges: ListItems;
  repositoryCount: number
  __typename: string
}
