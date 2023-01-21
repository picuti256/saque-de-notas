
//Criamos um array que irá armazenar os valores de notas que serão entregues ao cliente na hora do saque.
const notasSaque = []

// Aqui será armazenado o valor que foi digitado de saque pelo o usuário.
let saque = 50


//Para mostrar ao usuário as notas que serão entregues, criei a função que irá verificar as notas 
const calculaQuantNotas = (saque) => {

    //Fazemos a divisão do valor do saque pelo valor da nota, assim recebemos um valor inteiro, e esse valor inteiro é o número de notas que serão entregues daquele valor. Utilizei o Math.trunc, que foi introduzido no ECMAScript 6, que retorna um valor inteiro da divisão.
    notasCem = Math.trunc(saque / 100)

    //Colocamos essa informação dentro do array que foi criado e assim no final do programa ele entregar. Caso o resultado seja 0(não tenha nenhuma nota desse valor para entregar, então não adicionamos ele a tela final do usuário.)
    if (notasCem !== 0) {
        notasSaque.push(`Notas de 100: ${notasCem}`)
    }

    //Aqui realizamos uma verificação para saber se existe ainda algum valor restande e assim seguir para a proxima operação e ver se tem notas naquele valor para retornar.
    saque = saque - (notasCem * 100)

    notasCinquenta = Math.trunc(saque / 50)
    if (notasCinquenta !== 0) {
        notasSaque.push(`Notas de 50: ${notasCinquenta}`)
    }
    saque = saque - (notasCinquenta * 50)

    notasVinte = Math.trunc(saque / 20)
    if (notasVinte !== 0) {
        notasSaque.push(`Notas de 20: ${notasVinte}`)
    }
    saque = saque - (notasVinte * 20)

    notasDez = Math.trunc(saque / 10)
    if (notasVinte !== 0) {
        notasSaque.push(`Notas de 10: ${notasDez}`)
    }
    saque = saque - (notasDez * 10)

    notasCinco = Math.trunc(saque / 5)
    if (notasCinco !== 0) {
        notasSaque.push(`Notas de 5: ${notasCinco}`)
    }
    saque = saque - (notasCinco * 5)

    notasDois = Math.trunc(saque / 2)
    if (notasDois !== 0) {
        notasSaque.push(`Notas de 2: ${notasDois}`)
    }
    resto = saque - (notasDois * 2)

    if (resto === 0) {
        //Caso não haja "resto"(notas invalidas para saque), então irá retornar o array com o número de notas que serão sacadas.
        return notasSaque;
    } else {
        //Aqui é feito apenas uma validação ao usuário, informando que o mesmo colocou um valor onde exista uma sobra do valor de saque, onde não exista notas para retornar todo o valor solicitado, então enviamos uma mensagem ao usuário.
        return ("O valor de saque é incompativel com os valores de notas disponiveis. Por favor, digitar um valor de saque valido.")
    }
}

console.log(calculaQuantNotas(saque))



