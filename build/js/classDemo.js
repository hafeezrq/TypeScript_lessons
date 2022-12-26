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
// ================================================ //
// Use of static or class members.
class Peep {
    static getCount() {
        return Peep.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peep.count;
    }
}
Peep.count = 0;
const John = new Peep('John');
const Steve = new Peep('Steve');
const Amy = new Peep('Amy');
console.log(Peep.count); // Displays 3, as three instances created.
// ========================================== //
// Getters and Setters
class Bands {
    constructor() {
        this.bandsData = [];
    }
    get data() {
        return this.bandsData;
    }
    set data(values) {
        if (Array.isArray(values) && values.every(el => typeof el === 'string')) {
            this.bandsData = values;
        }
        else {
            throw new Error('Params is not array of strings');
        }
    }
}
const myBands = new Bands();
myBands.data = ['Neil Young', 'Led Zep']; // Use of setter methods in TS
console.log(myBands.data); // Use of getter
