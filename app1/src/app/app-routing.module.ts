import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ganharpeso',
    loadChildren: () => import('./ganharpeso/ganharpeso.module').then( m => m.GanharpesoPageModule)
  },
  {
    path: 'perderpeso',
    loadChildren: () => import('./perderpeso/perderpeso.module').then( m => m.PerderpesoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
