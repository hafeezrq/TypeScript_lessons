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
}
