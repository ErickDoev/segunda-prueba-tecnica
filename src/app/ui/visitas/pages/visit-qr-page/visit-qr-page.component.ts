import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-visit-qr-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './visit-qr-page.component.html',
  styleUrl: './visit-qr-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitQrPageComponent { }
