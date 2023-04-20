import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';

const routes: Routes = [
  {
    path: ':username', //note: http://localhost:4200/home    <------
    component: HomePageComponent,
  },
  {
    path: ':Side', //note: http://localhost:4200/home    <------
    component: SideBarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
