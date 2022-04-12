const average = (arrayNumeros) => {
  if (arrayNumeros.length === 0) {
    return undefined;
  }

  let contador = 0;

  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (typeof (arrayNumeros[i]) !== 'number') {
      return undefined;
    }

    contador += arrayNumeros[i];
  }

  return (Math.round(contador / arrayNumeros.length));
};

module.exports = average;