interface DadosUsuario {
    id: number,
    nome: string;
    email: string;
    cpf: number;
    endereco: Endereco;
}

interface Endereco {
    logradouro: string;
    numero: number;
    complemento: string;
}

class Usuario {
    constructor(){

    }
    private dadosUsuario = {} as DadosUsuario;

    setNome(novoNome: string): void {
        this.dadosUsuario.nome = novoNome;
    }
    setEndereco(novoEndereco: Endereco): void {
        this.dadosUsuario.endereco = novoEndereco;
    }
    setEmail(novoEmail: string): void {
        this.dadosUsuario.email = novoEmail;
    }
    setCpf(novoCpf: number): void {
        this.dadosUsuario.cpf = novoCpf;
    }
    setId(novoId: number): void {
        this.dadosUsuario.id = novoId;
    }
    getDadosUsuario(): DadosUsuario {
        return this.dadosUsuario;
    }
}

function index(){

    const allUsers = [];

    for (let i=0; i < 10; i++){
    const id = i + 1;
    const usuario = new Usuario();
    usuario.setId(i + 1);
    usuario.setNome("Nome Completo " + id);
    usuario.setEmail("email@gmail.com " + id);
    usuario.setCpf(123456);
    const endereco1 = {
        logradouro: "Nome da rua " + id,
        numero: 10,
        complemento: "Complemento " + id
    } as Endereco;
    usuario.setEndereco(endereco1);
    allUsers.push(usuario);
    }

    for (let i=0; i < allUsers.length; i++){
        const id = i + 1;
        const usuario = allUsers[i];
        if (i % 2 == 0){
            const endereco2 = {
                logradouro: "Nome da rua alterado " + id,
                numero: 11,
                complemento: "Complemento alterado " + id
            } as Endereco;
            usuario.setEndereco(endereco2);
            allUsers[i] = usuario;
        } else {
            usuario.setNome("Nome alterado " + id);
            usuario.setCpf(121212);
            allUsers[i] = usuario;
        }
    }
    allUsers.forEach(usuario => console.log(usuario.getDadosUsuario()))
}
index();