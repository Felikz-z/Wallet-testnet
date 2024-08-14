const bitcoin = require('bitcoinjs-lib')

// Definir rede
const network = bitcoin.networks.testnet

// Endereço a ser verificado
const address = "mqB8YdUykwtYLHJQwoNCmxH5GwqNQwNL9B"

try {
    bitcoin.address.toOutputScript(address, network)
    console.log("Endereço válido")
} catch (e) {
    console.log("Endereço inválido")
}