import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-observable',
  templateUrl: './debounce-observable.component.html',
  styleUrls: ['./debounce-observable.component.scss']
})
export class DebounceObservableComponent implements OnInit {
  name1: string = '';
  name2: string = '';

  @ViewChild('input1') input1: ElementRef | undefined;
  @ViewChild('input2') input2: ElementRef | undefined;

  inputSubscription: Subscription | undefined;

  constructor() {}

  ngOnInit() {
    const input1 = fromEvent<any>(this.input1.nativeElement, 'keyup').pipe(
      debounceTime(200)
    );

    const input2 = fromEvent<any>(this.input2.nativeElement, 'keyup').pipe(
      debounceTime(200)
    );

    this.inputSubscription = input1
      .pipe(
        switchMap(event1 => {
          this.name1 = event1.target.value;
          return input2;
        })
      )
      .subscribe(event2 => {
        this.name2 = event2.target.value;
      });
  }

  ngOnDestroy() {
    this.inputSubscription && this.inputSubscription.unsubscribe();
  }
}
