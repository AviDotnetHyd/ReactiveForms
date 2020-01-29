import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenav, MatSidenavModule, MatListModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatTooltipModule, MatTableModule, MatPaginatorModule } from '@angular/material'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatBadgeModule, MatButtonModule, MatToolbarModule,
    MatIconModule, MatSidenavModule, MatListModule,
    MatGridListModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, 
    MatChipsModule, MatTooltipModule, MatTableModule, MatPaginatorModule
  ],

  exports: [
    MatBadgeModule, MatButtonModule, MatToolbarModule,
    MatIconModule, MatSidenavModule, MatListModule,
    MatGridListModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, 
    MatChipsModule, MatTooltipModule, MatTableModule, MatPaginatorModule
  ],

  providers: [
    MatDatepickerModule
  ]
})
export class MaterialModule { }
