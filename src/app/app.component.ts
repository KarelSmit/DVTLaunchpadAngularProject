import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RoundSelectComponent} from './components/round-select/round-select.component';
import {SeasonSelectComponent} from './components/season-select/season-select.component';
import {ResultTableComponent} from './components/result-table/result-table.component';
import {WinnerComponent} from './components/winner/winner.component';
import {PodiumComponent} from './components/podium/podium.component';
import {F1} from '@angular/cdk/keycodes';
import {F1Service} from './services/f1.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoundSelectComponent, SeasonSelectComponent, ResultTableComponent, WinnerComponent, PodiumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  seasonSelected = false;
  roundSelected = false;
  f1Service = inject(F1Service);
  protected readonly setTimeout = setTimeout;
}
