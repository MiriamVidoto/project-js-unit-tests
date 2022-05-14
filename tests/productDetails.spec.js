const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
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

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
        const product = productDetails('Alcool gel', 'Máscara');
        expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    // referencia: https://www.w3schools.com/jsref/jsref_isarray.asp
        expect(Array.isArray(product)).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
      expect(product).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof product[0]).toBe('object');
    expect(typeof product[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(product[0]).not.toBe(product[1]);
  //   Teste se os dois productIds terminam com 123.
  //   referencia: https://www.w3schools.com/jsref/jsref_endswith.asp
  const productId1 = product[0].details.productId;
  const productId2 = product[1].details.productId;
  expect(productId1.endsWith(123)).toBeTruthy();
  expect(productId2.endsWith(123)).toBeTruthy();
  });
});
