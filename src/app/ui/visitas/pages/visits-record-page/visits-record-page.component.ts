import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-visits-record-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './visits-record-page.component.html',
  styleUrl: './visits-record-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitsRecordPageComponent { }
