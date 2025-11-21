class Heroi {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  atacar() {
    let ataque = "";
    switch (this.type) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
    }
    console.log(`o ${this.type} atacou usando ${ataque}`);
  }
}

const heroi = new Heroi("João", 25, "ninja");
heroi.atacar(); 