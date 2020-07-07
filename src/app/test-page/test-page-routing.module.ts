import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPageModule } from './test-page.module';
import { TestPageComponent } from './test-page/test-page.component';


const routes: Routes = [{
  path: '',
  component: TestPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestPageRoutingModule { }
