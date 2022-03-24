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
    return Funcionario;
}());
function modelo(nome, salario, horasExtras) {
    var funcionario = new Funcionario();
    funcionario.setNome(nome);
    funcionario.setSalario(salario);
    funcionario.setHorasExtras(horasExtras);
    console.log(funcionario.getNome());
    console.log(funcionario.getSalario());
    console.log(funcionario.getHorasExtras());
}
modelo(process.argv[2], process.argv[3], process.argv[4]);
