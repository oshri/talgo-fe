import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";

// Modules
import { TalGoRoutingModule } from "./routing.module";
import { TgCommonModule } from "./modules/common";
import { LoadingModule } from "./modules/loading";
import { AngularFireModule } from "angularfire2";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";

// Components
import { TalGoComponent } from "./components/talgo/talgo.component";
import { TgAppHeaderComponent } from "./components/appHeader/appHeader.component";
import { TgLoginComponent } from "./components/login/login.component";
import { TgUserComponent } from "./components/user/user.component";
import { UserProfileDialogComponent } from "./components/userProfileDIalog/userProfileDialog.component";
import { TgConfirmComponent } from "./components/confirm/confirm.component";

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
    UserProfileDialogComponent,
    TgConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    TalGoRoutingModule,
    TgCommonModule,
    LoadingModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthSrv, AuthGuard],
  entryComponents: [UserProfileDialogComponent],
  bootstrap: [TalGoComponent]
})
export class TalGoModule {}
