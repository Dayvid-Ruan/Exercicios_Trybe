  const  acorda = () => 'Acordando!';
  const  cafe = () => 'Bora tomar café!';
  const  dormir = () => 'Partiu dormir!';

  const rotina = (str) => str(acorda, cafe, dormir)

 console.log(rotina(acorda));
 console.log(rotina(cafe));
 console.log(rotina(dormir));