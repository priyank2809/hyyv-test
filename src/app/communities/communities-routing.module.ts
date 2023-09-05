import { Routes, RouterModule } from '@angular/router';
import { CommunitiesComponent } from './communities.component';

const routes: Routes = [

  { path: '', component: CommunitiesComponent }

];
export const routing = RouterModule.forChild(routes);
