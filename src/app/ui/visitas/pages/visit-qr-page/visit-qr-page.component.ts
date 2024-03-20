import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-visit-qr-page',
  standalone: true,
  imports: [
    CommonModule,
    TopbarComponent,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './visit-qr-page.component.html',
  styleUrl: './visit-qr-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitQrPageComponent { }
