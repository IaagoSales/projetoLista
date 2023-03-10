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
    path: 'page',
    loadChildren: () => import('./page/page.module').then( m => m.PagePageModule)
  },
  
  {
    path: 'contato',
    loadChildren: () => import('./page/contato/contato.module').then( m => m.ContatoPageModule)
  },

  {
    path: 'form',
    loadChildren: () => import('./page/form/form.module').then( m => m.FormPageModule)
  },

  {
    path: 'footer',
    loadChildren: () => import('./page/footer/footer.module').then( m => m.FooterPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
