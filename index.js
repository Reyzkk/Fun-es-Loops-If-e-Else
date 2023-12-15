/*Implemente uma função que recebe 2 números inteiros como parâmetro e retorna a multiplicação desses números. */

alert('Funções :)')

let number1 = Number(prompt('Primeiro Numero'))
let number2 = Number(prompt('Segundo Numero'))

function mutiplicação(number1, number2) {

    return number1 * number2

}

let x = mutiplicação(number1, number2);
alert(x)

/*Implemente uma função que calcula e retorna a potência de um número. A função deve receber como parâmetro o número (base) e o expoente.*/


function potencia(base, expoente) {
    let somaTotal = 1;
    for (let indice = 0; indice < expoente; indice++) {
        somaTotal *= base;
    }
    return somaTotal
}
let somaTotal = potencia(Number(prompt('Base')), Number(prompt("Expoente")))
alert(somaTotal)

/*Implemente novamente todas as atividades das duas últimas aulas (Aula 07 e Aula 08), mas, dessa vez, utilizando funções. Basta copiar o código que você já tem e adaptar para que funcionem como funções*/;


/*Atividade 09 - JavaScript
Samuel Viana
•
21 de nov.

FAÇA UM CÓDIGO EM JAVASCRIPT PARA CADA UM DOS ENUNCIADOS ABAIXO         
Crie um programa que simule um sistema bancário. Você deverá ler o saldo inicial do usuário e, em seguida, ler o valor da compra que este deseja realizar. Se o valor da compra for menor ou igual ao saldo inicial da conta, o programa deve informar que a compra ocorreu corretamente e retornar o valor do saldo atual. Se o valor da compra for maior do que o saldo inicial, você deverá retornar a mensagem “saldo insuficiente”.
*/
alert('Funções If e Else :)')

function SystemBank(valorCompra, Saldo) {

    if (valorCompra <= Saldo) {
        Saldo = Saldo - valorCompra;
        alert('A Compra foi realizada com Sucesso' + "O Saldo retornado é : " + Saldo)
    } else if (Saldo < valorCompra) {
        alert('Saldo Infusuficiente')
    }
    return Saldo
}
let result = SystemBank(Number(prompt('Digite o valor da Compra')), (Number(prompt('Digite o Saldo'))))

/*Faça uma calculadora. Escreva um programa que receba dois números inteiros. Em seguida, deve ser recebido um caracter (“+”, “-”, “*” ou “/”) que indicará a operação a ser efetuada com esses dois números. Por último, deve ser mostrado na tela o resultado da operação entre esses dois números.*/

function calculadora(num1, num2, caracter) {

    if (caracter == '*' || "x") {
        return num1 * num2
    } if (caracter == "/") {
        return num1 / num2
    } if (caracter == "+") {
        return num1 + num2
    } if (caracter == "-") {
        return num1 - num2
    } else {
        alert('Caracter invalido! Caracteres Validos(x, *, /, +, -)')
    }

}
let valorCalculadora = calculadora(Number(prompt('Numero 1')), Number(prompt('Numero 2')), prompt('Caracter'))
alert(valorCalculadora)

/*As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.*/

function Tabajara(salario, novoSalario, aumento, percentual) {

    if (salario > 0 && salario < 280) {
        percentual = 0.20;
        aumento = salario * percentual;
        novoSalario = salario + percentual;

        alert("O Percentual é 20% " + "O Aumento é de R$" + aumento + " Novo Salario R$" + novoSalario)
    } if (salario >= 280 && salario <= 700) {
        percentual = 0.15;
        aumento = salario * percentual;
        novoSalario = salario + percentual;

        alert("O Percentual é 15% " + "O Aumento é de R$" + aumento + " Novo Salario R$" + novoSalario)
    } if (salario >= 700 && salario <= 1500) {
        percentual = 0.10;
        aumento = salario * percentual;
        novoSalario = salario + percentual;

        alert("O Percentual é  10% " + "O Aumento é de R$" + aumento + " Novo Salario R$" + novoSalario)
    } else if (salario > 1500) {
        percentual = 0.05;
        aumento = salario * percentual;
        novoSalario = salario + percentual;

        alert("O Percentual é  5% " + "O Aumento é de R$" + aumento + " Novo Salario R$" + novoSalario)
    } else {

        alert("O Percentual é  0% " + "O Aumento é de R$" + 0 + " Novo Salario R$" + 0)
    }
}

let OpTabajara = Tabajara(Number(prompt('Salario:')))
/*Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

Dicas:
Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
Triângulo Equilátero: três lados iguais;
Triângulo Isósceles: quaisquer dois lados iguais;
Triângulo Escaleno: três lados diferentes;*/


function LadosDoTriangulo(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
        alert('Não é Um Triangulo')
    } else if (a == b && a == c) {
        alert('Equilatero')
    } else if (a == b || a == c || b == c) {
        alert('Isosceles')
    } else {
        alert("Escaleno")
    }

}
let triangulo = LadosDoTriangulo(
    Number(prompt('Lado A')),
    Number(prompt('Lado B')),
    Number(prompt('Lado C')))




alert('Funções If Else, Loops While e for');

/*Faça um programa que leia 4 números digitados pelo usuário e exiba a soma e a média desses valores. Mostre ao usuário o resultado.
Altere o programa anterior, de tal maneira que o usuário informe a quantidade de números que serão digitados (ou seja, o valor “4” não deve ser fixo no programa).*/






function programa(numero, quantidade, index) {

    while (index < quantidade) {
        numero += Number(prompt('Digite o Numero'))
        soma = numero;

        index++
    }
    media = soma / quantidade;
    return soma, media
}

let valorP = programa(0, 4, 0)
alert("A soma é " + soma + ", A media é : " + media)



/*Faça um programa que leia 4 números digitados pelo usuário e exiba a soma e a média desses valores. Mostre ao usuário o resultado.
Altere o programa anterior, de tal maneira que o usuário informe a quantidade de números que serão digitados (ou seja, o valor “4” não deve ser fixo no programa).*/



function programa(numero, quantidade, index) {

    while (index < quantidade) {

        numero += Number(prompt('Digite o Numero'))
        soma = numero;

        index++
    }
    media = soma / quantidade;
    return soma, media
}

let valorPr = programa(0, Number(prompt('Digite a Quantidade')), 0)



alert("A soma é " + soma + ", A media é : " + media)







function Interval(num1, num2) {

    let total = 0;

    if (num1 % 2 != 0 && num2 % 2 != 0 && num1 != num2) {

        for (let indice = num1; indice <= num2; indice++) {

            if (indice % 2 != 0)
                total += indice;
        }
        alert("O resultado da soma dos valores impares e igual a : " + total)
    } else {
        alert('Digite o primeiro numero menor , e o segundo maior ex(1, 3) obs: o numero tem que ser impar')
    }
}
let intervalo = Interval(
    Number(prompt("Digite um numero menor(impar)")),
    Number(prompt("Digite um numero maior(impar)"))
)




