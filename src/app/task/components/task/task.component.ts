import { Component  } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    // this.tasks = this.taskService.getTask();
  }
  ngOnInit() {
    this.tasks = this.taskService.getTask();
  }
  // removeTask(id: number) {
  //   this.taskService.removeTask(id);
  //   this.tasks = this.taskService.getTask();
  // }
}
