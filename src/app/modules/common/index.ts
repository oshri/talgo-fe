import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule, Routes } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSelectModule } from "@angular/material/select";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

// Components
import { TgMarketAuthComponent } from "./components/marketAuth/marketAuth.component";
import { TgBalanceComponent } from "./components/balance/balance.component";
import { TgSpreadComponent } from "./components/spread/spread.component";
import { TgSpreadResponseComponent } from "./components/spreadResponse/spreadResponse.component";

const COMPONENTS = [
  TgMarketAuthComponent,
  TgBalanceComponent,
  TgSpreadComponent,
  TgSpreadResponseComponent
];

// Services
import { MarketsAuth } from "./services/marketAuth/marketAuth.service";

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [MarketsAuth],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TgCommonModule {}
