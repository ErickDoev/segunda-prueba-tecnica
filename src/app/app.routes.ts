import { Routes } from '@angular/router';
import { VisitsRecordPageComponent } from './ui/visitas/pages/visits-record-page/visits-record-page.component';
import { NewVisitPageComponent } from './ui/visitas/pages/new-visit-page/new-visit-page.component';
import { VisitQrPageComponent } from './ui/visitas/pages/visit-qr-page/visit-qr-page.component';



export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./ui/visitas/layout/visitas-layout/visitas-layout.component').then(c => c.VisitasLayoutComponent),
        children: [
          {
            path: 'record-of-visits',
            component: VisitsRecordPageComponent
          },
          {
            path: 'add-visit',
            component: NewVisitPageComponent
          },
          {
            path: 'visit-qr',
            component: VisitQrPageComponent
          },
          {
            path: '**',
            redirectTo: 'record-of-visits'
          }
        ]
    },
    {
      path: '**',
      redirectTo: 'record-of-visits'
    }
];
