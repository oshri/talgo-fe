import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Material
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { TgMarketsTabsComponent } from "./components/marketsTabs/marketsTabs.component";
import { TgMarketAuthComponent } from "./components/marketAuth/marketAuth.component";

import { Auth } from "./services/auth/auth.service";

@NgModule({
  declarations: [TgMarketsTabsComponent, TgMarketAuthComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [Auth],
  exports: [TgMarketsTabsComponent]
})
export class MarketsModule {}
