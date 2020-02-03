import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { mergeMap, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-merge-observable',
  templateUrl: './merge-observable.component.html',
  styleUrls: ['./merge-observable.component.scss']
})
export class MergeObservableComponent implements OnInit {
  clickedLocations: Array<string>=[];
  @ViewChild('clickMerge1') clickMerge1: ElementRef | undefined;
  constructor() {}

  ngOnInit() {
    const clickEvent = of('x','y').pipe(mergeMap(e=>of(1,2).pipe(delay(500),map(num=>e+num)))).subscribe(item=>this.clickedLocations.push(item));

  }
}
