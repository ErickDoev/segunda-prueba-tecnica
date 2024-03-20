import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-visit-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  templateUrl: './add-visit-form.component.html',
  styleUrl: './add-visit-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddVisitFormComponent {
    options: string[] = ['Madre', 'Padre'];
    tolerancy: string[] = ['5 min', '10 min'];
}
