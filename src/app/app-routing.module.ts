import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenComponent } from "./screen/screen.component";
import { ControllerComponent } from "./controller/controller.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'controller',
    component: ControllerComponent
  },
  {
    path: 'screen',
    component: ScreenComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
