import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';

import { TablesComponent } from './tables.component';
import { FormsUpdateComponent } from './formsupdate.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Resource'
    },
    children: [
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Add Resource'
        }
      },
      {
        path: 'formsupdate',
        component: FormsUpdateComponent,
        data: {
          title: 'Resource Update'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Resource Details'
        }
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule {}
