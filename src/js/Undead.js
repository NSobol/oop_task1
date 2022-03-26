import Character from './src/js/Character';
export default class Undead extends Character {
	constructor(name) {
		super (name, 'Undead');
		this.attack = 25;
		this.defence = 25;
	}
}