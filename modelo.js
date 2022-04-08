"use strict";
exports.__esModule = true;
var Funcionario = /** @class */ (function () {
    function Funcionario() {
        this.dadosFuncionario = {};
    }
    Funcionario.prototype.setNome = function (novoNome) {
        this.dadosFuncionario.nome = novoNome;
    };
    Funcionario.prototype.getNome = function () {
        return this.dadosFuncionario.nome;
    };
    Funcionario.prototype.setSalario = function (novoSalario) {
        this.dadosFuncionario.salario = novoSalario;
    };
    Funcionario.prototype.getSalario = function () {
        return this.dadosFuncionario.salario;
    };
    Funcionario.prototype.setHorasExtras = function (novoHorasExtras) {
        this.dadosFuncionario.horasExtras = novoHorasExtras;
    };
    Funcionario.prototype.getHorasExtras = function () {
        return this.dadosFuncionario.horasExtras;
    };
    Funcionario.prototype.getFaixaDescontoInss = function () {
        return this.dadosFuncionario.faixaDescontoInss;
    };
    Funcionario.prototype.setFaixaDescontoInss = function (novaFaixaDescontoInss) {
        this.dadosFuncionario.faixaDescontoInss = novaFaixaDescontoInss;
    };
    Funcionario.prototype.getValorDescontoInss = function () {
        return this.dadosFuncionario.valorDescontoInss;
    };
    Funcionario.prototype.setValorDescontoInss = function (novoValorDescontoInss) {
        this.dadosFuncionario.valorDescontoInss = novoValorDescontoInss;
    };
    Funcionario.prototype.getFaixaDescontoIr = function () {
        return this.dadosFuncionario.faixaDescontoIr;
    };
    Funcionario.prototype.setFaixaDescontoIr = function (novaFaixaDescontoIr) {
        this.dadosFuncionario.faixaDescontoIr = novaFaixaDescontoIr;
    };
    Funcionario.prototype.getValorDescontoIr = function () {
        return this.dadosFuncionario.valorDescontoIr;
    };
    Funcionario.prototype.setValorDescontoIr = function (novoValorDescontoIr) {
        this.dadosFuncionario.valorDescontoIr = novoValorDescontoIr;
    };
    Funcionario.prototype.getSalarioLiquido = function () {
        return this.dadosFuncionario.salarioLiquido;
    };
    Funcionario.prototype.setSalarioLiquido = function (novoSalarioLiquido) {
        this.dadosFuncionario.salarioLiquido = novoSalarioLiquido;
    };
    Funcionario.prototype.getValorHorasExtras = function () {
        return this.dadosFuncionario.valorHorasExtras;
    };
    Funcionario.prototype.setValorHorasExtras = function (novoValorHorasExtras) {
        this.dadosFuncionario.valorHorasExtras = novoValorHorasExtras;
    };
    return Funcionario;
}());
var funcionario = new Funcionario();
//FUNÇÃO QUE CALCULA A QUANTIDADE DE HORAS EXTRAS
function calculaHorasExtras(qtdHorasExtras) {
    var valorHoraNormal = (funcionario.getSalario() / 200);
    funcionario.valorHorasExtras = ((valorHoraNormal * 1.5) * qtdHorasExtras);
    console.log("Valor horas extras: " + funcionario.valorHorasExtras.toFixed(2));
    return funcionario.valorHorasExtras;
}
//FUNÇÃO QUE CALCULA O VALOR DO DESCONTO DO INSS BASEADO NA FAIXA DE DESCONTO
function calculaInss(salario) {
    if (salario <= 1212) {
        funcionario.faixaDescontoInss = 7.5;
    }
    else if (salario > 1212 && salario <= 2427) {
        funcionario.faixaDescontoInss = 9;
    }
    else if (salario > 2427 && salario <= 3641) {
        funcionario.faixaDescontoInss = 12;
    }
    else if (salario > 3641 && salario <= 7087) {
        funcionario.faixaDescontoInss = 14;
    }
    else if (salario > 7087 && salario <= 12136) {
        funcionario.faixaDescontoInss = 14, 5;
    }
    else if (salario > 12136 && salario <= 24273) {
        funcionario.faixaDescontoInss = 16, 5;
    }
    else if (salario > 24273 && salario <= 47333) {
        funcionario.faixaDescontoInss = 19;
    }
    else {
        funcionario.faixaDescontoInss = 22;
    }
    funcionario.valorDescontoInss = (salario * (funcionario.faixaDescontoInss / 100));
    console.log("Faixa de desconto INSS: " + funcionario.faixaDescontoInss + "\nValor desconto INSS: " + funcionario.valorDescontoInss.toFixed(2));
    return funcionario.valorDescontoInss;
}
//FUNÇÃO QUE CALCULA O IMPOSTO DE RENDA
function calculaIr(salario) {
    if (salario <= 1903.98) {
        funcionario.faixaDescontoIr = 0;
    }
    else if (salario > 1903.98 && salario <= 2826.65) {
        funcionario.faixaDescontoIr = 7.5;
    }
    else if (salario > 2826.65 && salario <= 3751.05) {
        funcionario.faixaDescontoIr = 15;
    }
    else if (salario > 3751.05 && salario <= 4664.68) {
        funcionario.faixaDescontoIr = 22.5;
    }
    else {
        funcionario.faixaDescontoIr = 27.5;
    }
    funcionario.valorDescontoIr = (salario * (funcionario.faixaDescontoIr / 100));
    console.log("Faixa de desconto IR: " + funcionario.faixaDescontoIr + "\nValor desconto Ir: " + funcionario.valorDescontoIr.toFixed(2));
    return funcionario.valorDescontoIr;
}
//FUNÇÃO QUE CALCULA O SALARIO LÍQUIDO
function calculaSalarioLiquido(salario, inss, ir, horasExtras) {
    funcionario.salarioLiquido = (salario - inss - ir) + horasExtras;
    console.log("Salário líquido: " + funcionario.salarioLiquido.toFixed(2));
    return funcionario.salarioLiquido;
}
//FUNÇÃO PRINCIPAL, RESPONSÁVEL POR RECEBER OS DADOS INICIAIS E REALIZAR AS CHAMADAS DAS FUNÇÕES
function modelo(nome, salario, horasExtras) {
    funcionario.setNome(nome);
    funcionario.setSalario(salario);
    funcionario.setHorasExtras(horasExtras);
    console.log("######## CÁLCULO IMPOSTO DE RENDA ########");
    console.log("Nome: " + funcionario.getNome());
    console.log("Salário bruto: " + funcionario.getSalario());
    console.log("Quantidade horas extras: " + funcionario.getHorasExtras());
    if ((funcionario.getNome()) && (funcionario.getSalario()) && (funcionario.getHorasExtras())) {
        calculaHorasExtras(funcionario.getHorasExtras());
        calculaInss(funcionario.getSalario());
        calculaIr(funcionario.getSalario());
        calculaSalarioLiquido(funcionario.getSalario(), funcionario.getValorDescontoInss(), funcionario.getValorDescontoIr(), funcionario.
            getValorHorasExtras());
        console.log();
    }
    else if (((funcionario.getNome()) && (funcionario.getSalario()))) {
        calculaInss(funcionario.getSalario());
        calculaIr(funcionario.getSalario());
        calculaSalarioLiquido(funcionario.getSalario(), funcionario.getValorDescontoInss(), funcionario.getValorDescontoIr(), funcionario.getValorHorasExtras());
    }
}
modelo(process.argv[2], process.argv[3], process.argv[4]);
