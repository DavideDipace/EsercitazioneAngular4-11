import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage';
import { CatalogoComponent } from './catalogo/catalogo';
import { DettagliLibroComponent } from './dettagli-libro/dettagli-libro';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'dettagli/:id', component: DettagliLibroComponent },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
