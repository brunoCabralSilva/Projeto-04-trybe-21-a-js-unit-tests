const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toEqual('function');
    // Teste se o retorno da função é um array.
    expect(productDetails()) instanceof Array;
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toEqual(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const produto = productDetails('a', 'b');
    expect(typeof produto[0]).toEqual('object');
    expect(typeof produto[1]).toEqual('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    
    // Teste se os dois productIds terminam com 123.
    const produto0 = produto[0].substring(0, 2);
    const produto1 = produto[1].substring(0, 2);
    expect(produto0).toEqual('123');
    expect(produto1).toEqual('123');
  });
});
