var Usuario = /** @class */ (function () {
    function Usuario() {
        this.dadosUsuario = {};
    }
    Usuario.prototype.setNome = function (novoNome) {
        this.dadosUsuario.nome = novoNome;
    };
    Usuario.prototype.setEndereco = function (novoEndereco) {
        this.dadosUsuario.endereco = novoEndereco;
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
        var endereco1 = {
            logradouro: "Nome da rua " + id,
            numero: 10,
            complemento: "Complemento " + id
        };
        usuario.setEndereco(endereco1);
        allUsers.push(usuario);
    }
    for (var i = 0; i < allUsers.length; i++) {
        var id = i + 1;
        var usuario = allUsers[i];
        if (i % 2 == 0) {
            var endereco2 = {
                logradouro: "Nome da rua alterado " + id,
                numero: 11,
                complemento: "Complemento alterado " + id
            };
            usuario.setEndereco(endereco2);
            allUsers[i] = usuario;
        }
        else {
            usuario.setNome("Nome alterado " + id);
            usuario.setCpf(121212);
            allUsers[i] = usuario;
        }
    }
    allUsers.forEach(function (usuario) { return console.log(usuario.getDadosUsuario()); });
}
index();
