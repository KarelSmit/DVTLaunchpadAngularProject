import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Result} from '../../models/f1-results';
import {Subscription} from 'rxjs';
import {F1Service} from '../../services/f1.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css'
})
export class PodiumComponent{
  f1Service = inject(F1Service);
  results$ = this.f1Service.results$;
}
