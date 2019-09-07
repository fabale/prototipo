import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'logo', loadChildren: './logo/logo.module#LogoPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'fabale', loadChildren: './fabale/fabale.module#FabalePageModule' },
  //{ path: 'touristic-sites', loadChildren: './touristic-sites/touristic-sites.module#TouristicSitesPageModule' },
  { path: '', loadChildren: './turismo/turismo.module#TurismoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
