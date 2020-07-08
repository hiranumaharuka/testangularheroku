import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPageRoutingModule } from './test-page-routing.module';
import { TestPageComponent } from './test-page/test-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [TestPageComponent],
  imports: [
    CommonModule,
    TestPageRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class TestPageModule {}
