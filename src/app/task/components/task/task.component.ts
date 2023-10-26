import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: Task[] = [];
  @Input() hijo!:string

  constructor(private taskService: TaskService) {

  }
  ngOnInit() {
    console.log(this.hijo)
    this.tasks = this.taskService.getTask();
  }

  addTask(task:Task):void {
    this.taskService.addTask(task);
    this.tasks = this.taskService.getTask();
    this.task = { name:'', completado: false};
  }

  removeTask(id: string) {
    this.taskService.removeTask(id);
    this.tasks = this.taskService.getTask();
  }


  public task : Task={
    name:'',
    completado: false
  };
}
