import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { GameComponent } from './game/game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponent,
    GameComponent,
    JoinGameComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
