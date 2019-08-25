import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';

import { TablesComponent } from './tables.component';
import { FormsUpdateComponent } from './formsupdate.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Project'
    },
    children: [
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Add Project'
        }
      },
      {
        path: 'formsupdate',
        component: FormsUpdateComponent,
        data: {
          title: 'Project Update'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Project Details'
        }
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
