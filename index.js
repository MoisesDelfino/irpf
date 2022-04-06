var Usuario = /** @class */ (function () {
    function Usuario() {
        this.dadosUsuario = {};
    }
    Usuario.prototype.setNome = function (novoNome) {
        this.dadosUsuario.nome = novoNome;
    };
    Usuario.prototype.setEmail = function (novoEmail) {
        this.dadosUsuario.email = novoEmail;
    };
    Usuario.prototype.setCpf = function (novoCpf) {
        this.dadosUsuario.cpf = novoCpf;
    };
    Usuario.prototype.setId = function (novoId) {
        this.dadosUsuario.id = novoId;
    };
    Usuario.prototype.getDadosUsuario = function () {
        return this.dadosUsuario;
    };
    return Usuario;
}());
function index() {
    var allUsers = [];
    for (var i = 0; i < 10; i++) {
        var id = i + 1;
        var usuario = new Usuario();
        usuario.setId(i + 1);
        usuario.setNome("Nome Completo " + id);
        usuario.setEmail("email@gmail.com " + id);
        usuario.setCpf(123456);
        allUsers.push(usuario);
    }
    allUsers.forEach(function (usuario) { return console.log(usuario.getDadosUsuario()); });
}
index();
