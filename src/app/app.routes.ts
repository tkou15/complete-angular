import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home.component';
import { StyleGuidesComponent } from './pages/style-guides/style-guides.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'style-guides', component: StyleGuidesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
