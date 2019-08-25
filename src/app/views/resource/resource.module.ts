// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Forms Component
import { FormsComponent } from './forms.component';

import { TablesComponent } from './tables.component';


// Components Routing
import { ResourceRoutingModule } from './resource-routing.module';
import {FormsUpdateComponent } from './formsupdate.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ResourceRoutingModule,
   
  ],
  declarations: [
    FormsComponent,
    FormsUpdateComponent,
    TablesComponent
  ]
})
export class ResourceModule { }
