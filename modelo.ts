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
    funcionario.setValorHorasExtras(valorHorasExtras);
    console.log("# Valor horas extras: R$ " + funcionario.getValorHorasExtras().toFixed(2));
    return valorHorasExtras;
}

//FUNÇÃO QUE CALCULA O VALOR DO DESCONTO DO INSS BASEADO NA FAIXA DE DESCONTO
function calculaInss(salario: number): number {
    let faixaInss: number;
    if (salario <= 1212) {
        faixaInss = 7.5;
        funcionario.setFaixaDescontoInss(faixaInss);
    } else if (salario > 1212 && salario <= 2427) {
        faixaInss = 9;
        funcionario.setFaixaDescontoInss(faixaInss);
    } else if (salario > 2427 && salario <= 3641) {
        faixaInss = 12;
        funcionario.setFaixaDescontoInss(faixaInss);
    } else if (salario > 3641 && salario <= 7087) {
        faixaInss = 14;
        funcionario.setFaixaDescontoInss(faixaInss);
    } else if (salario > 7087 && salario <= 12136) {
        faixaInss = 14.5;
        funcionario.setFaixaDescontoInss(faixaInss);
    } else if (salario > 12136 && salario <= 24273) {
        faixaInss = 16.5;
        funcionario.setFaixaDescontoInss(faixaInss);
    } else if (salario > 24273 && salario <= 47333) {
        faixaInss = 19;
        funcionario.setFaixaDescontoInss(faixaInss);
    } else {
        faixaInss = 22;
        funcionario.setFaixaDescontoInss(faixaInss);
    }
    let valorInss: number;
    valorInss = (funcionario.getSalario() * (funcionario.getFaixaDescontoInss() / 100));
    funcionario.setValorDescontoInss(valorInss);
    console.log("# Faixa de desconto INSS: " + funcionario.getFaixaDescontoInss() + "%\n# Valor desconto INSS: R$ " + funcionario.getValorDescontoInss().toFixed(2));
    return funcionario.valorDescontoInss;
}

//FUNÇÃO QUE CALCULA O IMPOSTO DE RENDA
function calculaIr(salario: number): number {
    let faixaIr: number;
    if (salario <= 1903.98) {
        faixaIr = 0;
        funcionario.setFaixaDescontoIr(faixaIr);
    } else if (salario > 1903.98 && salario <= 2826.65) {
        faixaIr = 7.5;
        funcionario.setFaixaDescontoIr(faixaIr);
    } else if (salario > 2826.65 && salario <= 3751.05) {
        faixaIr = 15;
        funcionario.setFaixaDescontoIr(faixaIr);
    } else if (salario > 3751.05 && salario <= 4664.68) {
        faixaIr = 22.5;
        funcionario.setFaixaDescontoIr(faixaIr);
    } else {
        faixaIr = 27.5;
        funcionario.setFaixaDescontoIr(faixaIr);
    }
    let valorIr: number;
    valorIr = (funcionario.getSalario() * (funcionario.getFaixaDescontoIr() / 100));
    funcionario.setValorDescontoIr(valorIr);
    console.log("# Faixa de desconto IR: " + funcionario.getFaixaDescontoIr() + "%\n# Valor desconto IR: R$ " + funcionario.getValorDescontoIr().toFixed(2));
    return funcionario.valorDescontoIr;
}

function calculaSalarioLiquido(salario, inss, ir, horasExtras): number{
    let resultadoSalarioLiquido: number = (salario + horasExtras) - (inss + ir);
    funcionario.setSalarioLiquido(resultadoSalarioLiquido);
    console.log("# Salário líquido: R$ " + funcionario.getSalarioLiquido().toFixed(2))

    return funcionario.salarioLiquido;
}

//FUNÇÃO PRINCIPAL, RESPONSÁVEL POR RECEBER OS DADOS INICIAIS E REALIZAR AS CHAMADAS DAS FUNÇÕES
function modelo(nome: string, salario: number, horasExtras: number) {
    funcionario.setNome(nome);
    funcionario.setSalario(salario);
    funcionario.setHorasExtras(horasExtras);
    console.log("________________________________________________\n\n" +           
                    "            CÁLCULO IMPOSTO DE RENDA " + "\n" +
                "________________________________________________\n");
    console.log("# Nome: " + funcionario.getNome());
    console.log("# Salário bruto: R$ " + funcionario.getSalario().toFixed(2));
    console.log("# Quantidade horas extras: " + funcionario.getHorasExtras()
    );

    if ((funcionario.getNome()) && (funcionario.getSalario()) && (funcionario.getHorasExtras())) {
        calculaHorasExtras(funcionario.getHorasExtras());
        calculaInss(funcionario.getSalario());
        calculaIr(funcionario.getSalario());
        calculaSalarioLiquido(funcionario.getSalario(), funcionario.getValorDescontoInss(), funcionario.getValorDescontoIr(), funcionario.
        getValorHorasExtras());
    } else if (((funcionario.getNome()) && (funcionario.getSalario()))) {
        calculaInss(funcionario.getSalario());
        calculaIr(funcionario.getSalario());
        calculaSalarioLiquido(funcionario.getSalario(), funcionario.getValorDescontoInss(), funcionario.getValorDescontoIr(), funcionario.getValorHorasExtras());
    }
    console.log("________________________________________________");

}

modelo(process.argv[2], parseFloat(process.argv[3]), parseFloat(process.argv[4]));