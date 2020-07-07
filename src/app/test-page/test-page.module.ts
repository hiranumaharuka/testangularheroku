import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPageRoutingModule } from './test-page-routing.module';
import { TestPageComponent } from './test-page/test-page.component';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [TestPageComponent],
  imports: [CommonModule, TestPageRoutingModule, MatButtonModule],
})
export class TestPageModule {}
