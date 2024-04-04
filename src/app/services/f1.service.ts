import { Injectable } from '@angular/core';
import {BehaviorSubject, retry, take} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SeasonsResponse} from '../models/f1-seasons';
import {Race, RoundsResponse} from '../models/f1-rounds';
import {Driver, Result, ResultsResponse} from '../models/f1-results';

@Injectable({
  providedIn: 'root'
})
export class F1Service {
  year = '';
  race = '';
  raceName = ''
  seasons$ = new BehaviorSubject<string[]>([]);
  rounds$ = new BehaviorSubject<Race[]>([]);
  results$ = new BehaviorSubject<Result[]>([]);
  winner: Driver = {} as Driver;

  constructor(private http: HttpClient) { }

  getSeasons(){
    this.http.get<SeasonsResponse>('https://ergast.com/api/f1/seasons.json?limit=100')
      .pipe(
        retry(2),
        take(1))
      .subscribe((response)=>{
        const results = response.MRData.SeasonTable.Seasons.map(seasonObj=> seasonObj.season);
        this.seasons$.next(results);
      });
  }

  getRounds(season:string){
    this.year = season;
    this.http.get<RoundsResponse>(`https://ergast.com/api/f1/${season}.json`)
      .pipe(
        retry(2),
        take(1))
      .subscribe((response) => {
        const results = response.MRData.RaceTable.Races;
        this.rounds$.next(results);
      })
  }

  getResults(round:string) {
    this.race = round;
    this.http.get<ResultsResponse>(`https://ergast.com/api/f1/${this.year}/${this.race}/results.json`)
      .pipe(
        retry(2),
        take(1))
      .subscribe((response) => {
        const results = response.MRData.RaceTable.Races[0].Results;
        this.winner = response.MRData.RaceTable.Races[0].Results[0].Driver;
        this.raceName = this.race+'-'+response.MRData.RaceTable.Races[0].raceName;
        this.results$.next(results);
      })
  }
}
