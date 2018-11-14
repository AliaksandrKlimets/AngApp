import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ArtistComponent } from './artist/artist.component';
import { FestivalComponent } from './festival/festival.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {FestivalService} from './festival/festival.service';
import {ArtistService} from './artist/artist.service';
import {HttpClientModule} from '@angular/common/http';
import {AddUserComponent} from './user/add-user.component';
import {ShowUserComponent} from './user/show-user.component';
import {AddFestivalComponent} from './festival/add-festival.component';
import {AddArtistComponent} from './artist/add-artist.component';
import {HelloComponent} from './hello.component';
import {FestGenresComponent} from './festival/fest-genres.component';
import {UpdateFestComponent} from './festival/update-fest.component';
import {UpdateArtistComponent} from './artist/update-artist.component';
import {LoginComponent} from './sign-in/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    ArtistComponent,
    FestivalComponent,
    AddFestivalComponent,
    AddArtistComponent,
    ShowUserComponent,
    HelloComponent,
    FestGenresComponent,
    UpdateFestComponent,
    UpdateArtistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, ArtistService, FestivalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
