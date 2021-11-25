import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule, MatCardModule, MatDividerModule, MatProgressSpinnerModule, MatInputModule, MatListModule, MatFormFieldModule, MatIconModule, MatRadioModule, MatTableModule
  ], exports:[
    LoadingComponent,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule, MatCardModule, MatDividerModule, MatProgressSpinnerModule, MatInputModule, MatListModule, MatFormFieldModule, MatIconModule, MatRadioModule, MatTableModule
  ]
})
export class SharedModule { }
