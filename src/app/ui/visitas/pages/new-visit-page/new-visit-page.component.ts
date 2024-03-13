import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopbarComponent } from '../../components/topbar/topbar.component';

@Component({
  selector: 'app-new-visit-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TopbarComponent
  ],
  templateUrl: './new-visit-page.component.html',
  styleUrl: './new-visit-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewVisitPageComponent { }
