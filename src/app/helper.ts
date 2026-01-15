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

  static getCharacter(name: string) {
    return DUMMY_CHARACTERS.find((user) => user.name === name);
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
      DUMMY_CHARACTERS.splice(indx, indx);
      //   console.log('SPLICED');
      //   console.log(DUMMY_CHARACTERS);
    }
  }
}
