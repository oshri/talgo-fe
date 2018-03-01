import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Modules
import { MarketsModule } from "../markets";
// Components
import { TalGoComponent } from "./components/talgo/talgo.component";

@NgModule({
  declarations: [TalGoComponent],
  imports: [BrowserModule, MarketsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [TalGoComponent]
})
export class TalGoModule {}
