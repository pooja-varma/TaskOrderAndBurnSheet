// Angular




import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TemplateRoutingModule } from './template-routing.module';
import { FormsComponent } from './forms.component';
import { FormsUpdateComponent } from './formsupdate.component';
import { TablesComponent } from './tables.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule,
  ],
  declarations: [
    FormsComponent,
    FormsUpdateComponent,
    TablesComponent
  ]
})
export class TemplateModule {
}

