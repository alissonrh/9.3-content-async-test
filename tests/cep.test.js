/* const { describe, test, expect } = require('@jest/global') */
const  findAddressFromCEP  = require('../src/cep')


describe('CEP', () => {
  test('Verifica se o CEP 88811780 existe', async () => {
    const resolves = await findAddressFromCEP('88811780');
    expect(resolves).toBe(
      'Rua São Pedro, Próspera, Criciúma - SC'
    )
    /* .resolves.toBe(
      'Rua São Pedro, Próspera, Criciúma - SC'
    ) */
    /* console.log(resolves); */
  })

  test('devo receber um erro', async () => {
    const reject = await findAddressFromCEP('')
    expect(reject).toThrow(`CEP não encontrado`);
  })
})
