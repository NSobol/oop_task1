import Character from './src/js/Character';
export default class Zombie extends Character {
	constructor(name) {
		super (name, 'Zombie');
		this.attack = 40;
		this.defence = 10;
	}
}