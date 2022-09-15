import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimeService } from '../anime.service';
import { AnimeInterface } from '../Model/anime-interface';
import {Location} from '@angular/common';

@Component({
  selector: 'app-anime-profile',
  templateUrl: './anime-profile.component.html',
  styleUrls: ['./anime-profile.component.css']
})
export class AnimeProfileComponent implements OnInit {
  anime: AnimeInterface;
  animeSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private _location: Location,
              private animeService: AnimeService) { }

  ngOnInit(): void {
    this.getAnime();
  }

// store the comments        
  addComment(comment: string): void {
    if (comment) {
      this.anime.comments.push(comment);
    }
  }
  
// fetch the anime profile using a service
  getAnime(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.animeSubscription = this.animeService.getAnime(id)
      .subscribe(anime => {console.log(anime);this.anime = anime});
  }

  goBack(): void {
    this._location.back();
  }

}