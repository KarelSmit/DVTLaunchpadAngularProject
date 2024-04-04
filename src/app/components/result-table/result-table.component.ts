import {Component, inject} from '@angular/core';
import {F1Service} from '../../services/f1.service';
import {AsyncPipe} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-result-table',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule
  ],
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.css'
})
export class ResultTableComponent {
  private countryList: { [key: string]: string } = {
    American: 'US',
    Argentine: 'AR',
    Australian: 'AU',
    Austrian: 'AT',
    Belgian: 'BE',
    Brazilian: 'BR',
    British: 'GB',
    Canadian: 'CA',
    Colombian: 'CO',
    Danish: 'DK',
    Dutch: 'NL',
    Finnish: 'FI',
    French: 'FR',
    German: 'DE',
    Indonesian: 'ID',
    Irish: 'IE',
    Italian: 'IT',
    Japanese: 'JP',
    Mexican: 'MX',
    Monegasque: 'MC',
    'New Zealander': 'NZ',
    Russian: 'RU',
    'South African': 'ZA',
    Spanish: 'ES',
    Swedish: 'SE',
    Swiss: 'CH',
    Thai: 'TH',
    Venezuelan: 'VE'
  }

  f1Service = inject(F1Service);
  results$ = this.f1Service.results$;

  getFlag(country: string) {
    return `https://flagsapi.com/${this.countryList[country]}/flat/64.png`;
  }
}
