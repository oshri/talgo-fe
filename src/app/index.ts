import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { environment } from "../environments/environment";

// Modules
import { TalGoRoutingModule } from "./routing.module";
import { TgCommonModule } from "./modules/common";
import { LoadingModule } from "./modules/loading";
import { AngularFireModule } from "angularfire2";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";

// Components
import { TalGoComponent } from "./components/talgo/talgo.component";
import { TgAppHeaderComponent } from "./components/appHeader/appHeader.component";
import { TgLoginComponent } from "./components/login/login.component";
import { TgUserComponent } from "./components/user/user.component";
import { UserProfileDialogComponent } from "./components/userProfileDIalog/userProfileDialog.component";

// Services
import { AuthSrv } from "./services/auth/auth.service";
import { AuthGuard } from "./services/guard/auth.guard";

@NgModule({
  declarations: [
    TalGoComponent,
    TgAppHeaderComponent,
    TgLoginComponent,
    TgAppHeaderComponent,
    TgUserComponent,
    UserProfileDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    TalGoRoutingModule,
    TgCommonModule,
    LoadingModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthSrv, AuthGuard],
  entryComponents: [UserProfileDialogComponent],
  bootstrap: [TalGoComponent]
})
export class TalGoModule {}
