import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tasks: Task[] = [{
    id: uuid(),
    name: 'Ver los videos de Typescript',
    completado: false
  },{
    id:uuid(),
    name: 'Ver la sección 4 del curso Angular',
    completado: true
  },{
    id: uuid(),
    name: 'Ver la sección 5 del curso "Expandir bases de Angular"',
    completado: true
  },{
    id: uuid(),
    name: 'Hacer los ejecicios de las tareas',
    completado: true
  },
  {
    id: uuid(),
    name: 'Hacer las practicas',
    completado: false
  }
];

getTask(): Task[] {
  return this.tasks
}

addTask(task: Task): void {
  const newTask : Task =  {  id: uuid(),...task}
  this.tasks.push(newTask);

}
removeTask(id:string){
  this.tasks = this.tasks.filter(item => item.id !== id)
}
}
