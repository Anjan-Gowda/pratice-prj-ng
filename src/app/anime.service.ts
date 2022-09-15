import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { ANIME } from '../db-data';
import { AnimeInterface } from './Model/anime-interface';

@Injectable()
export class AnimeService {
  constructor() {}
  getAnime(id: number): Observable<AnimeInterface> {
    return of(ANIME.find((anime) => anime.id === id + 1));
  }
}
