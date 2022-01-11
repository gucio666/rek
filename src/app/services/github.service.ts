import { Injectable } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private apollo: Apollo) { }

  getAllCourses(search: string) {
     return  this.apollo
      .watchQuery({
        query: gql`
  query($search_term: String!) {
        search(query: $search_term, type: REPOSITORY, first: 50) {
            repositoryCount,
            edges {
                node {
                    ... on Repository {
                        id,
                        name,
                    }
                }
            }
        }
    } `,
        variables: {
          search_term: search + ' in:name is:public'
        }
      })
      .valueChanges
      .pipe(map((res: any ) => {
        return res.data.search.edges;
      }));
  }

  getOneRepo(id: string) {
    return this.apollo.watchQuery({
      query: gql`
         query($id: ID!) {
        node(id: $id) {

                    ... on Repository {
                        id,
                        name,
                        homepageUrl ,
                        nameWithOwner,
                          url,
                        owner {
                          login
                        },
                        description,

            }
        }
    }
      `,
      variables: { id }
    })
      .valueChanges
      .pipe(map((res: any) => res.data));
  }
}
