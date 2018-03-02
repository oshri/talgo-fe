import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";

// Modules
import { TalGoRoutingModule } from "./routing.module";
import { LoadingModule } from "./modules/loading";

// Components
import { TalGoComponent } from "./components/talgo/talgo.component";
import { TgHeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [TalGoComponent, TgHeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    TalGoRoutingModule,
    LoadingModule
  ],
  providers: [],
  bootstrap: [TalGoComponent]
})
export class TalGoModule {}
