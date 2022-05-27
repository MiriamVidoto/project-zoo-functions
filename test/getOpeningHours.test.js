const getOpeningHours = require('../src/getOpeningHours');

const open = 'The zoo is open';
const closed = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('Retorna o objeto com todos os dias  se nenhum argumento for passado', () => {
    const result = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(result);
  });
  it('Retorna uma string correspodente se passado dia e hora e se é case sensitive', () => {
    expect(getOpeningHours('Tuesday', '10:30-am')).toEqual(open);
    expect(getOpeningHours('tuesday', '10:30-AM')).toEqual(open);
    expect(getOpeningHours('Monday', '12:00-am')).toEqual(closed);
    expect(getOpeningHours('MONDAY', '12:00-Am')).toEqual(closed);
  });
  it('Retorna um erro correspodente se passado a abreviação da hora errada', () => {
    expect(() => getOpeningHours('Tuesday', '10:30-a2')).toTrow(Error);
  });
  it('Retorna um erro correspodente se passado a hora errada', () => {
    expect(() => getOpeningHours('Tuesday', '10:s0-am')).toTrow(Error);
  });
  it('Retorna um erro correspodente se passado o dia errado', () => {
    expect(() => getOpeningHours('segunda-feira', '10:30-am')).toTrow(Error);
  });
});
