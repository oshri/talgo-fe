import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const TAL_GO_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "markets",
    pathMatch: "full"
  },
  {
    path: "markets",
    loadChildren: "./modules/markets/index#MarketsModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(TAL_GO_ROUTES)],
  exports: [RouterModule]
})
export class TalGoRoutingModule {}
