import { Component, Input, OnInit } from '@angular/core';
import { AnimeInterface } from '../Model/anime-interface';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent implements OnInit {
  @Input()
  anime: AnimeInterface;

  @Input()
  animeId: number;
  constructor() {
    console.log(this.anime)
   }

  ngOnInit() {
  }

}