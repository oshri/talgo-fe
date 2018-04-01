import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TgLoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./services/guard/auth.guard";
import { TgConfirmComponent } from "./components/confirm/confirm.component";

const TAL_GO_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: TgLoginComponent
  },
  {
    path: "confirm/:id",
    component: TgConfirmComponent
  },
  {
    path: "markets",
    loadChildren: "./modules/markets/index#MarketsModule",
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(TAL_GO_ROUTES)],
  exports: [RouterModule]
})
export class TalGoRoutingModule {}
