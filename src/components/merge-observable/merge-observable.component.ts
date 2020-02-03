import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, of, Subscription } from 'rxjs';
import { mergeMap, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-merge-observable',
  templateUrl: './merge-observable.component.html',
  styleUrls: ['./merge-observable.component.scss']
})
export class MergeObservableComponent implements OnInit, OnDestroy {
  clickedLocations: Array<string> = [];
  mergeSubscription: Subscription | undefined;

  @ViewChild('clickMerge1') clickMerge1: ElementRef | undefined;
  constructor() {}

  ngOnInit() {}

  mergeObservables() {
    this.mergeSubscription = of('x', 'y')
      .pipe(
        mergeMap(e =>
          of(1, 2).pipe(
            delay(500),
            map(num => e + num)
          )
        )
      )
      .subscribe(item => this.clickedLocations.push(item));
  }

  ngOnDestroy(){
    this.mergeSubscription.unsubscribe();
  }
}
