const fetch = require('node-fetch')

let logs = []

const buildURL = cep => {
  return `http://cep.la/${cep}`
}

const findAddressFromCEP = async cep => {
  const requestInitializer = {
    headers: { Accept: 'application/json' }
  }

  const response = await fetch(buildURL(cep), requestInitializer)
  /* console.log(response); */
  const cepInf = await response.json()
  /* console.log(cepInf); */

  if (cepInf.logradouro === undefined) {
    logs.push(`Error! CEP não encontrado`)
    throw new Error(`CEP não encontrado`)
  }

/*   const { name, id, height, weight }
 */
  logs.push(`Sucesso! Objeto de endereço recebido: ${JSON.stringify(cepInf)}`)
  return `${cepInf.logradouro}, ${cepInf.bairro}, ${cepInf.cidade} - ${cepInf.uf}`
}

findAddressFromCEP().then((cepInf) => console.log(cepInf))

module.exports = findAddressFromCEP
