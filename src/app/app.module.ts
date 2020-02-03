import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PollingComponent } from "../components/polling/polling.component";
import { HttpClientModule } from "@angular/common/http";
import { DebounceObservableComponent } from "src/components/debounce-observable/debounce-observable.component";
import { FormsModule } from "@angular/forms";
import { MergeObservableComponent } from '../components/merge-observable/merge-observable.component';
import { DistinctObservableComponent } from '../components/distinct-observable/distinct-observable.component';

@NgModule({
  declarations: [AppComponent, PollingComponent, DebounceObservableComponent, MergeObservableComponent, DistinctObservableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
