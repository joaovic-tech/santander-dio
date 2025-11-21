class Heroi {
  constructor(vitorias, derrotas) {
    this.vitorias = vitorias;
    this.derrotas = derrotas;
  }

  saldoRankeadas() {
    return this.vitorias - this.derrotas;
  }

  nivelRankeadas() {
    const saldo = this.saldoRankeadas();
    const nivelRankeadas = [
      { min: 0, max: 10, nivel: 'Ferro' },
      { min: 11, max: 20, nivel: 'Bronze' },
      { min: 21, max: 50, nivel: 'Prata' },
      { min: 51, max: 80, nivel: 'Ouro' },
      { min: 81, max: 90, nivel: 'Diamante' },
      { min: 91, max: 100, nivel: 'Lendário' },
      { min: 101, max: Infinity, nivel: 'Imortal' },
    ]
    const nivel = nivelRankeadas.find((nivel) => {
      return saldo >= nivel.min && saldo <= nivel.max;
    })
    return nivel;
  }

  exibirNivel() {
    const saldoVitorias = this.saldoRankeadas();
    const nivel = this.nivelRankeadas();
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel.nivel}`);
  }
}

const heroiFerro = new Heroi(5, 0);
const heroiBronze = new Heroi(15, 0);
const heroiPrata = new Heroi(30, 0);
const heroiOuro = new Heroi(60, 0);
const heroiDiamante = new Heroi(85, 0);
const heroiLendario = new Heroi(95, 0);
const heroiImortal = new Heroi(110, 0);

heroiFerro.exibirNivel(); // Ferro
heroiBronze.exibirNivel(); // Bronze
heroiPrata.exibirNivel(); // Prata
heroiOuro.exibirNivel(); // Ouro
heroiDiamante.exibirNivel(); // Diamante
heroiLendario.exibirNivel(); // Lendário
heroiImortal.exibirNivel();


