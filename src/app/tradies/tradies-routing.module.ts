import { Routes, RouterModule } from '@angular/router';
import { TradiesComponent } from './tradies.component';

const routes: Routes = [

  { path: '', component: TradiesComponent }

];
export const routing = RouterModule.forChild(routes);
