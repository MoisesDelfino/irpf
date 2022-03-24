import { threadId } from "worker_threads";

interface Funcionario {
    nome: string;
    salario: number;
    horasExtras: number;
}
interface Resultado {
    salarioBruto: number;
    valorHorasExtras: number;
    faixaDescontoInss: number;
    valorDescontoInss: number;
    faixaDecontoIr: number;
    valorDescontoIr: number;
    salarioLiquido: number;
}
class Funcionario{
    constructor(){}
        private dadosFuncionario = {} as Funcionario;

        setNome(novoNome: string){
            this.dadosFuncionario.nome = novoNome;
        }
        getNome(): string {
            return this.dadosFuncionario.nome;
        }
        setSalario(novoSalario: number){
            this.dadosFuncionario.salario = novoSalario;
        }
        getSalario(): number {
            return this.dadosFuncionario.salario;
        }
        setHorasExtras(novoHorasExtras: number){
            this.dadosFuncionario.horasExtras = novoHorasExtras;
        }
        getHorasExtras(): number {
            return this.dadosFuncionario.horasExtras;
        }
    }
const funcionario = new Funcionario();

function calculaHorasExtras(qtdHorasExtras): number {
    let valorHoraNormal = (funcionario.getSalario()/200);
    let valorHorasExtras = ((valorHoraNormal/2) * qtdHorasExtras);
    return this.valorHorasExtras;
}

function calculaInss(salario): number {
    if (funcionario.getSalario() <= 1212){
        this.faixaDescontoInss = 7.5;
    } else if (funcionario.getSalario() > 1212 && funcionario.getSalario() <= 2427){
        this.faixaDescontoInss = 9;
    } else if (funcionario.getSalario() > 2427 && funcionario.getSalario() <= 3641){
        this.faixaDescontoInss = 9;
    } else if (funcionario.getSalario() > 3641 && funcionario.getSalario() <= 7087){
        this.faixaDescontoInss = 14;
    } else if (funcionario.getSalario() > 7087 && funcionario.getSalario() <= 12136){
        this.faixaDescontoInss = 14,5;
    } else if (funcionario.getSalario() > 12136 && funcionario.getSalario() <= 24273){
        this.faixaDescontoInss = 16,5;
    } else if (funcionario.getSalario() > 24273 && funcionario.getSalario() <= 47333){
        this.faixaDescontoInss = 19;
    } else {
        this.faixaDescontoInss = 22;
    }
    this.valorDescontoInss = (funcionario.getSalario()*(this.faixaDescontoInss/100));
    return this.valorDescontoInss;
}
function modelo(nome, salario, horasExtras){
    funcionario.setNome(nome);
    funcionario.setSalario(salario);
    funcionario.setHorasExtras(horasExtras);
    console.log(funcionario.getNome());
    console.log(funcionario.getSalario());
    console.log(funcionario.getHorasExtras());
}

modelo(process.argv[2], process.argv[3],process.argv[4]);