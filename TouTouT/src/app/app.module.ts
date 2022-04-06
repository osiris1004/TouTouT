import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserInputMoveOutInfoComponentComponent } from './home/user-input-move-out-info-component/user-input-move-out-info-component.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { Layer1Component } from './home/user-input-move-out-info-component/layer1/layer1.component';
import { Layer2Component } from './home/user-input-move-out-info-component/layer2/layer2.component';
import { Layer3Component } from './home/user-input-move-out-info-component/layer3/layer3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserInputMoveOutInfoComponentComponent,
    NavBarComponent,
    Layer1Component,
    Layer2Component,
    Layer3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
