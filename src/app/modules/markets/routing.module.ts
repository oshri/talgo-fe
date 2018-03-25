import { Routes, RouterModule } from '@angular/router';
import { TgMarketsTabsComponent } from './components/marketsTabs/marketsTabs.component';
import { TgBinanceComponent } from './components/binance/binance.component';

const MARKETS_ROUTES: Routes = [
  {
    path: '',
    component: TgMarketsTabsComponent,
    children: [
      {
        path: '',
        redirectTo: 'binance'
      },
      {
        path: 'binance',
        component: TgBinanceComponent
      }
    ]
  }
];

export let MarketsRouterModule = RouterModule.forChild(MARKETS_ROUTES);
