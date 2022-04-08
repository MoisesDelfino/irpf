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

//FUNÇÃO QUE CALCULA A QUANTIDADE DE HORAS EXTRAS
function calculaHorasExtras(qtdHorasExtras): number {
    let valorHoraNormal = (funcionario.getSalario() / 200);
    let valorHorasExtras = ((valorHoraNormal * 1.5) * qtdHorasExtras);
    console.log("Valor horas extras: R$" + valorHorasExtras.toFixed(2));
    return valorHorasExtras;
}

//FUNÇÃO QUE CALCULA O VALOR DO DESCONTO DO INSS BASEADO NA FAIXA DE DESCONTO
function calculaInss(salario: number): number {
    if (salario <= 1212) {
        funcionario.faixaDescontoInss = 7.5;
    } else if (salario > 1212 && salario <= 2427) {
        funcionario.faixaDescontoInss = 9;
    } else if (salario > 2427 && salario <= 3641) {
        funcionario.faixaDescontoInss = 12;
    } else if (salario > 3641 && salario <= 7087) {
        funcionario.faixaDescontoInss = 14;
    } else if (salario > 7087 && salario <= 12136) {
        funcionario.faixaDescontoInss = 14, 5;
    } else if (salario > 12136 && salario <= 24273) {
        funcionario.faixaDescontoInss = 16, 5;
    } else if (salario > 24273 && salario <= 47333) {
        funcionario.faixaDescontoInss = 19;
    } else {
        funcionario.faixaDescontoInss = 22;
    }
    funcionario.valorDescontoInss = (funcionario.getSalario() * (funcionario.faixaDescontoInss / 100));
    console.log("Faixa de desconto INSS: " + funcionario.faixaDescontoInss + "%\nValor desconto INSS: R$" + funcionario.valorDescontoInss.toFixed(2));
    return funcionario.valorDescontoInss;
}

//FUNÇÃO QUE CALCULA O IMPOSTO DE RENDA
function calculaIr(salario: number): number {
    if (salario <= 1903.98) {
        funcionario.faixaDescontoIr = 0;
    } else if (salario > 1903.98 && salario <= 2826.65) {
        funcionario.faixaDescontoIr = 7.5;
    } else if (salario > 2826.65 && salario <= 3751.05) {
        funcionario.faixaDescontoIr = 15;
    } else if (salario > 3751.05 && salario <= 4664.68) {
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

//FUNÇÃO PRINCIPAL, RESPONSÁVEL POR RECEBER OS DADOS INICIAIS E REALIZAR AS CHAMADAS DAS FUNÇÕES
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
        calculaSalarioLiquido(funcionario.getSalario(), funcionario.getValorDescontoInss(), funcionario.getValorDescontoIr(), funcionario.
        getValorHorasExtras());
        console.log()
    } else if (((funcionario.getNome()) && (funcionario.getSalario()))) {
        calculaInss(funcionario.getSalario());
        calculaIr(funcionario.getSalario());
        calculaSalarioLiquido(funcionario.getSalario(), funcionario.getValorDescontoInss(), funcionario.getValorDescontoIr(), funcionario.getValorHorasExtras());
    }

}

modelo(process.argv[2], process.argv[3], process.argv[4]);