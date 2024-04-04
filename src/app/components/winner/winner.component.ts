import {Component, inject} from '@angular/core';
import {F1Service} from '../../services/f1.service';

@Component({
  selector: 'app-winner',
  standalone: true,
  imports: [],
  templateUrl: './winner.component.html',
  styleUrl: './winner.component.css'
})
export class WinnerComponent{
  f1Service = inject(F1Service);
  winner = this.f1Service.winner;

}
