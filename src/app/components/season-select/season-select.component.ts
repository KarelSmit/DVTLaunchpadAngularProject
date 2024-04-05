import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {F1Service} from '../../services/f1.service';

@Component({
  selector: 'app-season-select',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule
  ],
  templateUrl: './season-select.component.html',
  styleUrl: './season-select.component.css'
})
export class SeasonSelectComponent {
  @Output() seasonSelected = new EventEmitter<boolean>();
  year = '';
  f1Service = inject(F1Service);
  seasons$ = this.f1Service.seasons$;


  constructor() {
    this.f1Service.getSeasons();
  }

  changeYear() {
    this.f1Service.getRounds(this.year);
    this.seasonSelected.emit(true);
  }
}
