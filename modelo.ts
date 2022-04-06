import { threadId } from "worker_threads";
//comentário de teste
interface Funcionario {
    nome: string;
    salario: number;
    horasExtras: number;
    valorHorasExtras: number;
    faixaDescontoInss: number;
    valorDescontoInss: number;
    faixaDescontoIr: number;
    valorDescontoIr: number;
    salarioLiquido: number;
}
class Funcionario {
    constructor() { }
    private dadosFuncionario = {} as Funcionario;

    setNome(novoNome: string) {
        this.dadosFuncionario.nome = novoNome;
    }
    getNome(): string {
        return this.dadosFuncionario.nome;
    }
    setSalario(novoSalario: number) {
        this.dadosFuncionario.salario = novoSalario;
    }
    getSalario(): number {
        return this.dadosFuncionario.salario;
    }
    setHorasExtras(novoHorasExtras: number) {
        this.dadosFuncionario.horasExtras = novoHorasExtras;
    }
    getHorasExtras(): number {
        return this.dadosFuncionario.horasExtras;
    }
    getFaixaDescontoInss(): number {
        return this.dadosFuncionario.faixaDescontoInss;
    }
    setFaixaDescontoInss(novaFaixaDescontoInss: number) {
        this.dadosFuncionario.faixaDescontoInss = novaFaixaDescontoInss;
    }
    getValorDescontoInss(): number {
        return this.dadosFuncionario.valorDescontoInss;
    }
    setValorDescontoInss(novoValorDescontoInss: number) {
        this.dadosFuncionario.valorDescontoInss = novoValorDescontoInss;
    }
    getFaixaDescontoIr(): number {
        return this.dadosFuncionario.faixaDescontoIr;
    }
    setFaixaDescontoIr(novaFaixaDescontoIr: number) {
        this.dadosFuncionario.faixaDescontoIr = novaFaixaDescontoIr;
    }
    getValorDescontoIr(): number {
        return this.dadosFuncionario.valorDescontoIr;
    }
    setValorDescontoIr(novoValorDescontoIr: number) {
        this.dadosFuncionario.valorDescontoIr = novoValorDescontoIr;
    }
    getSalarioLiquido(): number {
        return this.dadosFuncionario.salarioLiquido;
    }
    setSalarioLiquido(novoSalarioLiquido: number) {
        this.dadosFuncionario.salarioLiquido = novoSalarioLiquido;
    }
    getValorHorasExtras(): number {
        return this.dadosFuncionario.valorHorasExtras;
    }
    setValorHorasExtras(novoValorHorasExtras: number) {
        this.dadosFuncionario.valorHorasExtras = novoValorHorasExtras;
    }

}
const funcionario = new Funcionario();

function calculaHorasExtras(qtdHorasExtras): number {
    let valorHoraNormal = (funcionario.getSalario() / 200);
    let valorHorasExtras = ((valorHoraNormal * 1.5) * qtdHorasExtras);
    console.log("Valor horas extras: R$" + valorHorasExtras.toFixed(2));
    return valorHorasExtras;
}

function calculaInss(salario): number {
    if (funcionario.getSalario() <= 1212) {
        funcionario.faixaDescontoInss = 7.5;
    } else if (funcionario.getSalario() > 1212 && funcionario.getSalario() <= 2427) {
        funcionario.faixaDescontoInss = 9;
    } else if (funcionario.getSalario() > 2427 && funcionario.getSalario() <= 3641) {
        funcionario.faixaDescontoInss = 12;
    } else if (funcionario.getSalario() > 3641 && funcionario.getSalario() <= 7087) {
        funcionario.faixaDescontoInss = 14;
    } else if (funcionario.getSalario() > 7087 && funcionario.getSalario() <= 12136) {
        funcionario.faixaDescontoInss = 14, 5;
    } else if (funcionario.getSalario() > 12136 && funcionario.getSalario() <= 24273) {
        funcionario.faixaDescontoInss = 16, 5;
    } else if (funcionario.getSalario() > 24273 && funcionario.getSalario() <= 47333) {
        funcionario.faixaDescontoInss = 19;
    } else {
        funcionario.faixaDescontoInss = 22;
    }
    funcionario.valorDescontoInss = (funcionario.getSalario() * (funcionario.faixaDescontoInss / 100));
    console.log("Faixa de desconto INSS: " + funcionario.faixaDescontoInss + "%\nValor desconto INSS: R$" + funcionario.valorDescontoInss.toFixed(2));
    return funcionario.valorDescontoInss;
}

function calculaIr(salario): number {
    if (funcionario.getSalario() <= 1903.98) {
        funcionario.faixaDescontoIr = 0;
    } else if (funcionario.getSalario() > 1903.98 && funcionario.getSalario() <= 2826.65) {
        funcionario.faixaDescontoIr = 7.5;
    } else if (funcionario.getSalario() > 2826.65 && funcionario.getSalario() <= 3751.05) {
        funcionario.faixaDescontoIr = 15;
    } else if (funcionario.getSalario() > 3751.05 && funcionario.getSalario() <= 4664.68) {
        funcionario.faixaDescontoIr = 22.5;
    } else {
        funcionario.faixaDescontoIr = 27.5;
    }
    funcionario.valorDescontoIr = (funcionario.getSalario() * (funcionario.faixaDescontoIr / 100));
    console.log("Faixa de desconto IR: " + funcionario.faixaDescontoIr + "%\nValor desconto Ir: R$" + funcionario.valorDescontoIr.toFixed(2));
    return funcionario.valorDescontoIr;
}

function calculaSalarioLiquido(salario, inss, ir, horasExtras): number{
    const aux: number = salario + horasExtras;
    const aux2: number = aux - inss;
    funcionario.salarioLiquido = aux2 - ir;
    console.log("Salário líquido: R$" + funcionario.salarioLiquido.toFixed(2))

    return funcionario.salarioLiquido;
}

function modelo(nome, salario, horasExtras) {
    funcionario.setNome(nome);
    funcionario.setSalario(salario);
    funcionario.setHorasExtras(horasExtras);
    console.log("######## CÁLCULO IMPOSTO DE RENDA ########")
    console.log("Nome: " + funcionario.getNome());
    console.log("Salário bruto: R$" + funcionario.getSalario());
    console.log("Quantidade horas extras: " + funcionario.getHorasExtras()
    );

    if ((funcionario.getNome()) && (funcionario.getSalario()) && (funcionario.getHorasExtras())) {
        calculaHorasExtras(funcionario.getHorasExtras());
        calculaInss(funcionario.getSalario());
        calculaIr(funcionario.getSalario());
        calculaSalarioLiquido(funcionario.getSalario(), funcionario.getValorDescontoInss(), funcionario.getValorDescontoIr(), funcionario.getValorHorasExtras());
    } else if (((funcionario.getNome()) && (funcionario.getSalario()))) {
        calculaInss(funcionario.getSalario());
        calculaIr(funcionario.getSalario());
        calculaSalarioLiquido(funcionario.getSalario(), funcionario.getValorDescontoInss(), funcionario.getValorDescontoIr(), funcionario.getValorHorasExtras());
    }

}

modelo(process.argv[2], process.argv[3], process.argv[4]);