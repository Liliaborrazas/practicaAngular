import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tasks: Task[] = [{
    id: 1,
    name: 'Ver los videos de Typescript',
    completado: false
  },{
    id: 2,
    name: 'Ver la sección 4 del curso Angular',
    completado: true
  },{
    id: 3,
    name: 'Ver la sección 5 del curso "Expandir bases de Angular"',
    completado: true
  },{
    id: 4,
    name: 'Hacer los ejecicios de las tareas',
    completado: true
  },
  {
    id: 5,
    name: 'Hacer las practicas',
    completado: false
  }
];

getTask(): Task[] {
  return this.tasks
}

removeTask(id:number){
  this.tasks = this.tasks.filter(item => item.id !== id)
}
}
