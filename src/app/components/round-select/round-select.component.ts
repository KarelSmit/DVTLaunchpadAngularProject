import {Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {F1Service} from '../../services/f1.service';

@Component({
  selector: 'app-round-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, FormsModule, AsyncPipe],
  templateUrl: './round-select.component.html',
  styleUrl: './round-select.component.css'
})
export class RoundSelectComponent{
  @Output() roundSelected = new EventEmitter<boolean>();
  race = '';
  f1Service = inject(F1Service);
  rounds$ = this.f1Service.rounds$;

  changeRound(){
    this.f1Service.getResults(this.race);
    this.roundSelected.emit(true);
  }
}
