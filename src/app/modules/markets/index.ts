import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Material
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

// App Modules
import { TgCommonModule } from "../common";
import { MarketsRouterModule } from "./routing.module";

// Services
import { MarketsSrv } from "./services/markets/markets.service";

// Components
import { TgMarketsTabsComponent } from "./components/marketsTabs/marketsTabs.component";
import { TgBinanceComponent } from "./components/binance/binance.component";

@NgModule({
  declarations: [TgMarketsTabsComponent, TgBinanceComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TgCommonModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MarketsRouterModule,
    HttpClientModule
  ],
  providers: [MarketsSrv],
  exports: [TgMarketsTabsComponent]
})
export class MarketsModule {}
