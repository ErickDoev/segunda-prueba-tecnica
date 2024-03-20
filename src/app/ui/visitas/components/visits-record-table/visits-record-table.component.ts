import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface Record {
  name: string;
  date: string;
  hour: string;
  admin: string;
  status: string;
}

const VISIT_RECORD: Record[] = [
  {
    name: 'Montserrat Carolina García Arreguin',
    date: '	20/01/2024',
    hour: '	08:00-09:00',
    admin: 'ADMINISTRADOR',
    status: 'APROBADA'
  },
  {
    name: 'Montserrat Carolina García Arreguin',
    date: '	20/01/2024',
    hour: '	08:00-09:00',
    admin: 'ADMINISTRADOR',
    status: 'APROBADA'
  },
  {
    name: 'Montserrat Carolina García Arreguin',
    date: '	20/01/2024',
    hour: '	08:00-09:00',
    admin: 'ADMINISTRADOR',
    status: 'APROBADA'
  },
  {
    name: 'Montserrat Carolina García Arreguin',
    date: '	20/01/2024',
    hour: '	08:00-09:00',
    admin: 'ADMINISTRADOR',
    status: 'APROBADA'
  },
  {
    name: 'Montserrat Carolina García Arreguin',
    date: '	20/01/2024',
    hour: '	08:00-09:00',
    admin: 'ADMINISTRADOR',
    status: 'APROBADA'
  },
  {
    name: 'Montserrat Carolina García Arreguin',
    date: '	20/01/2024',
    hour: '	08:00-09:00',
    admin: 'ADMINISTRADOR',
    status: 'APROBADA'
  },
];

@Component({
  selector: 'app-visits-record-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ],
  templateUrl: './visits-record-table.component.html',
  styleUrl: './visits-record-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitsRecordTableComponent {
  displayedColumns: string[] = ['name', 'date', 'hour', 'admin', 'status'];
  dataSource = VISIT_RECORD;
 }
