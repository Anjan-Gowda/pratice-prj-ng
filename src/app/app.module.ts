import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeProfileComponent } from './anime-profile/anime-profile.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { RouterModule } from '@angular/router';
import { AnimeService } from './anime.service';


@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    AnimeCardComponent,
    AnimeProfileComponent
  ],

  imports: [
            
  // Routes for in-app navigation
    RouterModule.forRoot([
      {path: '', component: AnimeListComponent},
      {path: 'anime/:id', component: AnimeProfileComponent},
    ]),
      
    FormsModule, BrowserModule
  ],
  exports: [RouterModule],
  providers: [AnimeService,Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
