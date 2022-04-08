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
    var valorHorasExtras = ((valorHoraNormal * 1.5) * qtdHorasExtras);
    funcionario.setValorHorasExtras(valorHorasExtras);
    console.log("Valor horas extras: R$ " + funcionario.getValorHorasExtras().toFixed(2));
    return valorHorasExtras;
}
//FUNÇÃO QUE CALCULA O VALOR DO DESCONTO DO INSS BASEADO NA FAIXA DE DESCONTO
function calculaInss(salario) {
    var faixaInss;
    if (salario <= 1212) {
        faixaInss = 7.5;
        funcionario.setFaixaDescontoInss(faixaInss);
    }
    else if (salario > 1212 && salario <= 2427) {
        faixaInss = 9;
        funcionario.setFaixaDescontoInss(faixaInss);
    }
    else if (salario > 2427 && salario <= 3641) {
        faixaInss = 12;
        funcionario.setFaixaDescontoInss(faixaInss);
    }
    else if (salario > 3641 && salario <= 7087) {
        faixaInss = 14;
        funcionario.setFaixaDescontoInss(faixaInss);
    }
    else if (salario > 7087 && salario <= 12136) {
        faixaInss = 14.5;
        funcionario.setFaixaDescontoInss(faixaInss);
    }
    else if (salario > 12136 && salario <= 24273) {
        faixaInss = 16.5;
        funcionario.setFaixaDescontoInss(faixaInss);
    }
    else if (salario > 24273 && salario <= 47333) {
        faixaInss = 19;
        funcionario.setFaixaDescontoInss(faixaInss);
    }
    else {
        faixaInss = 22;
        funcionario.setFaixaDescontoInss(faixaInss);
    }
    var valorInss;
    valorInss = (funcionario.getSalario() * (funcionario.getFaixaDescontoInss() / 100));
    funcionario.setValorDescontoInss(valorInss);
    console.log("Faixa de desconto INSS: " + funcionario.getFaixaDescontoInss() + "%\nValor desconto INSS: R$ " + funcionario.getValorDescontoInss().toFixed(2));
    return funcionario.valorDescontoInss;
}
//FUNÇÃO QUE CALCULA O IMPOSTO DE RENDA
function calculaIr(salario) {
    var faixaIr;
    if (salario <= 1903.98) {
        faixaIr = 0;
        funcionario.setFaixaDescontoIr(faixaIr);
    }
    else if (salario > 1903.98 && salario <= 2826.65) {
        faixaIr = 7.5;
        funcionario.setFaixaDescontoIr(faixaIr);
    }
    else if (salario > 2826.65 && salario <= 3751.05) {
        faixaIr = 15;
        funcionario.setFaixaDescontoIr(faixaIr);
    }
    else if (salario > 3751.05 && salario <= 4664.68) {
        faixaIr = 22.5;
        funcionario.setFaixaDescontoIr(faixaIr);
    }
    else {
        faixaIr = 27.5;
        funcionario.setFaixaDescontoIr(faixaIr);
    }
    var valorIr;
    valorIr = (funcionario.getSalario() * (funcionario.getFaixaDescontoIr() / 100));
    funcionario.setValorDescontoIr(valorIr);
    console.log("Faixa de desconto IR: " + funcionario.getFaixaDescontoIr() + "%\nValor desconto IR: R$ " + funcionario.getValorDescontoIr().toFixed(2));
    return funcionario.valorDescontoIr;
}
function calculaSalarioLiquido(salario, inss, ir, horasExtras) {
    var resultadoSalarioLiquido = (salario + horasExtras) - (inss + ir);
    funcionario.setSalarioLiquido(resultadoSalarioLiquido);
    console.log("Salário líquido: R$ " + funcionario.getSalarioLiquido().toFixed(2));
    return funcionario.salarioLiquido;
}
//FUNÇÃO PRINCIPAL, RESPONSÁVEL POR RECEBER OS DADOS INICIAIS E REALIZAR AS CHAMADAS DAS FUNÇÕES
function modelo(nome, salario, horasExtras) {
    funcionario.setNome(nome);
    funcionario.setSalario(salario);
    funcionario.setHorasExtras(horasExtras);
    console.log("######## CÁLCULO IMPOSTO DE RENDA ########");
    console.log("Nome: " + funcionario.getNome());
    console.log("Salário bruto: R$ " + funcionario.getSalario().toFixed(2));
    console.log("Quantidade horas extras: " + funcionario.getHorasExtras());
    if ((funcionario.getNome()) && (funcionario.getSalario()) && (funcionario.getHorasExtras())) {
        calculaHorasExtras(funcionario.getHorasExtras());
        calculaInss(funcionario.getSalario());
        calculaIr(funcionario.getSalario());
        calculaSalarioLiquido(funcionario.getSalario(), funcionario.getValorDescontoInss(), funcionario.getValorDescontoIr(), funcionario.
            getValorHorasExtras());
    }
    else if (((funcionario.getNome()) && (funcionario.getSalario()))) {
        calculaInss(funcionario.getSalario());
        calculaIr(funcionario.getSalario());
        calculaSalarioLiquido(funcionario.getSalario(), funcionario.getValorDescontoInss(), funcionario.getValorDescontoIr(), funcionario.getValorHorasExtras());
    }
}
modelo(process.argv[2], parseFloat(process.argv[3]), parseFloat(process.argv[4]));
