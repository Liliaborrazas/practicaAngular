import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  //onDeleted(index value : number)
  @Output()
  public onDeleted : EventEmitter<string> = new EventEmitter();


  onDeletedCharacter(id:string):void {
    this.onDeleted.emit(id)
    // Emitir el id del personaje
    console.log(id)
  }

}
