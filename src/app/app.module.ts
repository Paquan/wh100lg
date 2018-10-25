import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { ScreenComponent } from './screen/screen.component';
import { HomeComponent } from './home/home.component';
import { QuestionsService } from "./shared/questions.service";


@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    ScreenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
