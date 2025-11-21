const name = "Jones";
const xp = 8000;
const msg = (name, nivel) => `O Herói de nome ${name} está no nível de ${nivel}`;

function getNivel(xp) {
  if (xp < 1001) return "Ferro";
  else if (xp <= 2000) return "Bronze";
  else if (xp <= 5000) return "Prata";
  else if (xp <= 7000) return "Ouro";
  else if (xp <= 8000) return "Platina";
  else if (xp <= 9000) return "Ascendente";
  else if (xp <= 10000) return "Imortal";
  else return "Radiante";
}

let nivel = getNivel(xp);
console.log(msg(name, nivel));
