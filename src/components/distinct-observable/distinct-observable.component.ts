import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-observable',
  templateUrl: './distinct-observable.component.html',
  styleUrls: ['./distinct-observable.component.scss']
})
export class DistinctObservableComponent implements OnInit, OnDestroy {
  scrollSubscription: Subscription | undefined;
  scrollPos: Array<number>=[];
  constructor() {}

  ngOnInit() {
    this.scrollSubscription = fromEvent<any>(window, 'scroll')
      .pipe(throttleTime(100))
      .subscribe(item => {
        const scrollNum = (document as any).documentElement.scrollTop;
        this.scrollPos.push(scrollNum);
      });
  }

  cleanScroll(){
    this.scrollPos = [];
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }
}
