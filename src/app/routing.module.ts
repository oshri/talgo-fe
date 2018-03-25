import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TgLoginComponent } from './components/login/login.component';

const TAL_GO_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: TgLoginComponent
  },
  {
    path: 'markets',
    loadChildren: './modules/markets/index#MarketsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(TAL_GO_ROUTES)],
  exports: [RouterModule]
})
export class TalGoRoutingModule {}
