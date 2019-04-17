import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
