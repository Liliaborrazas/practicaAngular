import { NgModule } from '@angular/core';

import { TaskComponent } from './components/task/task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [TaskComponent],
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TaksModule { }
