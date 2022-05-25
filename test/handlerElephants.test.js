const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna undefined se nenhum argumento for passado', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('retorna string: Parâmetro inválido, é necessário uma string, se o argumento passado não for uma string', () => {
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('ao receber count como parametro, retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('ao receber names como parametro, retorna um array com a relação dos nomes de todos os elefantes', () => {
    const arrNames = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(arrNames);
  });
  it('ao receber averageAge como parametro, retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('ao receber location como parametro, retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('ao receber popularity como parametro, retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('ao receber availability como parametro, retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
      const arrAvailability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(arrAvailability);
  });
});
