import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VisitsRecordTableComponent } from '../../components/visits-record-table/visits-record-table.component';

@Component({
  selector: 'app-visits-record-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatDatepickerModule,
    MatFormField,
    MatLabel,
    MatNativeDateModule,
    MatHint,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    VisitsRecordTableComponent
  ],
  templateUrl: './visits-record-page.component.html',
  styleUrl: './visits-record-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitsRecordPageComponent { }
