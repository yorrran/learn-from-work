import { Component, OnInit, OnDestroy } from "@angular/core";
import { switchMap, filter, takeUntil } from "rxjs/operators";
import { interval, Subscription, BehaviorSubject } from "rxjs";
import { HttpClientService } from "src/services/http-client.service";

@Component({
  selector: "app-polling",
  templateUrl: "./polling.component.html",
  styleUrls: ["./polling.component.scss"],
  providers: [HttpClientService]
})
export class PollingComponent implements OnInit, OnDestroy {
  pollingSubscription: Subscription | undefined;
  completed$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {}

  handlePolling() {
    console.log("polling");
    this.pollingSubscription = interval(1000)
      .pipe(
        switchMap(() => this.httpClientService.getUpdating()),
        takeUntil(this.completed$.pipe(filter(value => value === 10)))
      )
      .subscribe(() => {
        const currCompleted = this.completed$.value;
        this.completed$.next(currCompleted + 1);
      });
  }

  ngOnDestroy() {
    this.pollingSubscription.unsubscribe();
    this.completed$.next(0);
  }
}
