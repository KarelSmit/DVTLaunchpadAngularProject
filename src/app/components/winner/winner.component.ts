import {Component, inject} from '@angular/core';
import {F1Service} from '../../services/f1.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-winner',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './winner.component.html',
  styleUrl: './winner.component.css'
})
export class WinnerComponent {
  f1Service = inject(F1Service);
  results$ = this.f1Service.results$;
  wiki$ = this.f1Service.wiki$;
}
