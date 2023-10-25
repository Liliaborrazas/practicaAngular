import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[]  = [{
    id: uuid(),
    name: 'Killin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power:9500
  },{
    id: uuid(),
    name:'Vegeta',
    power: 7500
  }];

  onNewCharacterPuedeSerCualquierNombre(character: Character): void {
    const newCharacter : Character =  {  id: uuid(),...character}
    this.characters.push(newCharacter);

  }
  deleteCharacterById(id:string){
    this.characters = this.characters.filter(item => item.id !== id)
  }
  // onDeletedCharacter(index:number): void{
  //   this.characters.splice(index,1)
  // }

}
