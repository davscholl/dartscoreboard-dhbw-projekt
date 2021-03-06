import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './modules/app.material.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { GameComponent } from './game/game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { StatsComponent } from './stats/stats.component';


const meineRouten: Routes = [
  { path: '', component: LoginComponent },
  { path: 'game', component: GameComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'join', component: JoinGameComponent },
  { path: 'create', component: CreateGameComponent },
  { path: 'stats', component: StatsComponent }
];

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponent,
    GameComponent,
    JoinGameComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    StatsComponent
  ],
  imports: [
    RouterModule.forRoot(meineRouten),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    AppMaterialModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
