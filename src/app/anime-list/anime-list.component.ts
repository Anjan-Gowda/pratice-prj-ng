import { Component, OnInit } from '@angular/core';
import { ANIME } from '../../db-data';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  animes = ANIME;
  constructor() { }

  ngOnInit() {
  }

}