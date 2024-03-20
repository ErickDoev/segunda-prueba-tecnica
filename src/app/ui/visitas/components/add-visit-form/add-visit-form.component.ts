import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-visit-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './add-visit-form.component.html',
  styleUrl: './add-visit-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddVisitFormComponent { }
