import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-visitas-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './visitas-layout.component.html',
  styleUrl: './visitas-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitasLayoutComponent { }
