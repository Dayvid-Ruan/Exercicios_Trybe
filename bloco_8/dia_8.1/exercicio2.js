const verifica = (escolhido, aleatorio) => escolhido === aleatorio;
const resultado = (escolhido, callback) => {
  const aleatorio = Math.floor((Math.random() * 10) +1);
  console.log(aleatorio)

  if (callback(escolhido, aleatorio)) {
      return 'Parabéns você ganhou';
  } else {
      return 'Tente novamente'
  }
}

console.log(resultado(2, verifica))