import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';

import { TablesComponent } from './tables.component';
import { FormsUpdateComponent } from './formsupdate.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Template'
    },
    children: [
      {
        path: 'upload',
        component: FormsComponent,
        data: {
          title: 'Upload Template'
        }
      },
      
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Search Template'
        }
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule {}
