import { DUMMY_USERS } from './dummy-users';
import { DUMMY_CHARACTERS } from './dummy-characters';
import { Character } from './character/character.model';
export class Helper {
  static getUserById(id: string) {
    return DUMMY_USERS.find((user) => user.id === id);
  }
  static getUserByName(name: string) {
    return DUMMY_USERS.find((user) => user.name === name);
  }

  static getCharacter(name: string): Character | undefined {
    return DUMMY_CHARACTERS.find((char) => char.name === name);
  }
  static getCharactersByPlayer(id: string): Character[] | undefined {
    return DUMMY_CHARACTERS.filter((char) => char.playerId === id);
  }

  static addCharacter(character: Character) {
    if (!DUMMY_CHARACTERS.find((char) => char.name === character.name)) {
      DUMMY_CHARACTERS.push(character);
    } else {
      alert('Character with this name already exist!');
    }
  }
  static deleteCharacter(name: string) {
    const indx = DUMMY_CHARACTERS.findIndex((char) => char.name === name);
    if (indx >= 0) {
      DUMMY_CHARACTERS.splice(indx, 1);
      // console.log('DELETE 4 ' + name);
      console.log(DUMMY_CHARACTERS);
    }
  }
}
