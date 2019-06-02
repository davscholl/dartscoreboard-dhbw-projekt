import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { GameComponent } from './game/game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';


const meineRouten: Routes = [
  { path: '', component: MainComponent },
  { path: 'game', component: GameComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateGameComponent,
    GameComponent,
    JoinGameComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(meineRouten),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
