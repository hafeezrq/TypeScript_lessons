class Coder {
  // inclusion of vision/access modifier in the constructor makes
  // the separation declaration of properties redundant.

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string
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
