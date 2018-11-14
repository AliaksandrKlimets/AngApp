import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './user/user.component';
import {ArtistComponent} from './artist/artist.component';
import {AddUserComponent} from './user/add-user.component';
import {ShowUserComponent} from './user/show-user.component';
import {FestivalComponent} from './festival/festival.component';
import {AddFestivalComponent} from './festival/add-festival.component';
import {AddArtistComponent} from './artist/add-artist.component';
import {HelloComponent} from './hello.component';
import {FestGenresComponent} from './festival/fest-genres.component';
import {UpdateFestComponent} from './festival/update-fest.component';
import {UpdateArtistComponent} from './artist/update-artist.component';
import {LoginComponent} from './sign-in/login.component';

const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'users/add', component: AddUserComponent},
  {path: 'artists', component: ArtistComponent},
  {path: 'festivals', component: FestivalComponent},
  {path: 'festivals/genres/:genre', component: FestGenresComponent},
  {path: 'festivals/update/:id', component: UpdateFestComponent},
  {path: 'festivals/add', component: AddFestivalComponent},
  {path: 'artists/add', component: AddArtistComponent},
  {path: 'artists/update/:id', component: UpdateArtistComponent},
  {path: 'users/:id', component: ShowUserComponent},
  {path: '', component: HelloComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
