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

// ================================================ //

// Use of static or class members.

class Peep {
  static count: number = 0;

  static getCount(): number {
    return Peep.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peep.count;
  }
}

const John = new Peep('John');
const Steve = new Peep('Steve');
const Amy = new Peep('Amy');

console.log(Peep.count); // Displays 3, as three instances created.

// ========================================== //
// Getters and Setters
class Bands {
  private bandsData: string[];

  constructor() {
    this.bandsData = [];
  }

  public get data(): string[] {
    return this.bandsData;
  }

  public set data(values: string[]) {
    if (Array.isArray(values) && values.every(el => typeof el === 'string')) {
      this.bandsData = values;
    } else {
      throw new Error('Params is not array of strings');
    }
  }
}

const myBands = new Bands();
myBands.data = ['Neil Young', 'Led Zep']; // Use of setter methods in TS
console.log(myBands.data); // Use of getter
