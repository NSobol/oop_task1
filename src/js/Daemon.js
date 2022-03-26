import Character from './src/js/Character';
export default class Daemon extends Character {
	constructor(name) {
		super (name, 'Daemon');
		this.attack = 10;
		this.defence = 40;
	}
}