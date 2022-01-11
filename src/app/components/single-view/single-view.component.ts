import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GithubService} from "../../services/github.service";
import {ActivatedRoute} from "@angular/router";
import {ListItems} from "../../Interfaces/searchInterface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleViewComponent implements OnInit, OnDestroy  {
  data: ListItems;
  paramsSubscription : Subscription;
  constructor(private gitHubService: GithubService,
              private route:ActivatedRoute,
              private cdr: ChangeDetectorRef
              ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.gitHubService.getOneRepo(id).subscribe((value: ListItems) => {
        this.data = value;
       this.cdr.markForCheck();
      })
    });
  }
  ngOnDestroy() {
    if(this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }

  }

}
