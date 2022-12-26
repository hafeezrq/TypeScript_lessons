class Coder {
  // inclusion of vision/access modifier in the constructor makes
  // the separation declaration of properties redundant.

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'Typescript' // makes Optional
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  // if you don't want to initialise a property! Not recommended
  secondLang!: string;
}

const Zuhair = new Coder('Zuhair', 'Dufffff', 11, 'Typescript');
const Shaarif = new Coder('Shaarif', 'None', 17); // It's fine not to include the optional prop.

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super('Hafeez', 'Classic', 55); // Must come first/before anyother initialisation.
    this.computer = computer;
  }

  public getLang() {
    return `I write code in ${this.lang}`;
  }
}

const Sarah = new WebDev('Mac', 'Sarah', 'LiFi', 35);
console.log(Sarah.getLang());

// ================================================= //
// Interface declalration
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

// Implement the interface
class Guitarist1 implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} ${this.instrument}`;
  }
}

const Page = new Guitarist1('Page', 'guitar');
console.log(Page.play('strums'));
