import { NgModule } from '@angular/core';

import { TaskComponent } from './components/task/task.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [TaskComponent],
  declarations: [TaskComponent],
  imports: [CommonModule],
})
export class TaksModule { }
