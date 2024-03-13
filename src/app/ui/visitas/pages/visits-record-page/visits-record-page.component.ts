import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-visits-record-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './visits-record-page.component.html',
  styleUrl: './visits-record-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitsRecordPageComponent { }
