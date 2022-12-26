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
