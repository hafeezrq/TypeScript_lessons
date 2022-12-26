"use strict";
class Coder {
    // inclusion of vision/access modifier in the constructor makes
    // the separation declaration of properties redundant.
    constructor(name, music, age, lang = 'Typescript' // makes Optional
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
const Zuhair = new Coder('Zuhair', 'Dufffff', 11, 'Typescript');
const Shaarif = new Coder('Shaarif', 'None', 17); // It's fine not to include the optional prop.
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super('Hafeez', 'Classic', 55); // Must come first/before anyother initialisation.
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write code in ${this.lang}`;
    }
}
const Sarah = new WebDev('Mac', 'Sarah', 'LiFi', 35);
console.log(Sarah.getLang());
// Implement the interface
class Guitarist1 {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Page = new Guitarist1('Page', 'guitar');
console.log(Page.play('strums'));
