import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-visit-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './new-visit-page.component.html',
  styleUrl: './new-visit-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewVisitPageComponent { }
