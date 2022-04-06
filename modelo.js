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
function calculaHorasExtras(qtdHorasExtras) {
    var valorHoraNormal = (funcionario.getSalario() / 200);
    var valorHorasExtras = ((valorHoraNormal * 1.5) * qtdHorasExtras);
    console.log("Valor horas extras: " + valorHorasExtras.toFixed(2));
    return valorHorasExtras;
}
function calculaInss(salario) {
    if (funcionario.getSalario() <= 1212) {
        funcionario.faixaDescontoInss = 7.5;
    }
    else if (funcionario.getSalario() > 1212 && funcionario.getSalario() <= 2427) {
        funcionario.faixaDescontoInss = 9;
    }
    else if (funcionario.getSalario() > 2427 && funcionario.getSalario() <= 3641) {
        funcionario.faixaDescontoInss = 12;
    }
    else if (funcionario.getSalario() > 3641 && funcionario.getSalario() <= 7087) {
        funcionario.faixaDescontoInss = 14;
    }
    else if (funcionario.getSalario() > 7087 && funcionario.getSalario() <= 12136) {
        funcionario.faixaDescontoInss = 14, 5;
    }
    else if (funcionario.getSalario() > 12136 && funcionario.getSalario() <= 24273) {
        funcionario.faixaDescontoInss = 16, 5;
    }
    else if (funcionario.getSalario() > 24273 && funcionario.getSalario() <= 47333) {
        funcionario.faixaDescontoInss = 19;
    }
    else {
        funcionario.faixaDescontoInss = 22;
    }
    funcionario.valorDescontoInss = (funcionario.getSalario() * (funcionario.faixaDescontoInss / 100));
    console.log("Faixa de desconto INSS: " + funcionario.faixaDescontoInss + "\nValor desconto INSS: " + funcionario.valorDescontoInss.toFixed(2));
    return funcionario.valorDescontoInss;
}
function calculaIr(salario) {
    if (funcionario.getSalario() <= 1903.98) {
        funcionario.faixaDescontoIr = 0;
    }
    else if (funcionario.getSalario() > 1903.98 && funcionario.getSalario() <= 2826.65) {
        funcionario.faixaDescontoIr = 7.5;
    }
    else if (funcionario.getSalario() > 2826.65 && funcionario.getSalario() <= 3751.05) {
        funcionario.faixaDescontoIr = 15;
    }
    else if (funcionario.getSalario() > 3751.05 && funcionario.getSalario() <= 4664.68) {
        funcionario.faixaDescontoIr = 22.5;
    }
    else {
        funcionario.faixaDescontoIr = 27.5;
    }
    funcionario.valorDescontoIr = (funcionario.getSalario() * (funcionario.faixaDescontoIr / 100));
    console.log("Faixa de desconto IR: " + funcionario.faixaDescontoIr + "\nValor desconto Ir: " + funcionario.valorDescontoIr.toFixed(2));
    return funcionario.valorDescontoIr;
}
function calculaSalarioLiquido(salario, inss, ir, horasExtras) {
    var aux = salario - inss - ir;
    funcionario.salarioLiquido = aux + horasExtras;
    console.log("Salário líquido: " + funcionario.salarioLiquido.toFixed(2));
    return funcionario.salarioLiquido;
}
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
        calculaSalarioLiquido(funcionario.getSalario(), funcionario.getValorDescontoInss(), funcionario.getValorDescontoIr(), funcionario.getValorHorasExtras());
    }
    else if (((funcionario.getNome()) && (funcionario.getSalario()))) {
        calculaInss(funcionario.getSalario());
        calculaIr(funcionario.getSalario());
        calculaSalarioLiquido(funcionario.getSalario(), funcionario.getValorDescontoInss(), funcionario.getValorDescontoIr(), funcionario.getValorHorasExtras());
    }
}
modelo(process.argv[2], process.argv[3], process.argv[4]);
