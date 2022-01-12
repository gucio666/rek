import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Apollo} from 'apollo-angular';
import { ListItems } from '../../Interfaces/searchInterface';
import {GithubService} from "../../services/github.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent implements OnInit, OnDestroy  {
  posts: Array<ListItems>;
  myQuerySubscription: Subscription;
  @ViewChild('search') search: ElementRef;

  constructor(private apollo: Apollo, private gitHubService: GithubService) {
  }

  ngOnInit() {}

  executeSearch(): void {
    this.myQuerySubscription = this.gitHubService
      .getAllRepo(this.search.nativeElement.value)
      .subscribe
    ( (res: Array<ListItems>) => {
     this.posts = res;
   })
  }

  ngOnDestroy(): void {
    if(this.myQuerySubscription) {
      this.myQuerySubscription.unsubscribe();
    }
  }

}
