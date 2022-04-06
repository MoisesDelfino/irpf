interface DadosFuncionario {
    id: number,
    nome: string;
    salario: number;
    hrExtra: number;
}


class Usuario {
    constructor(){

    }
    private dadosUsuario = {} as DadosUsuario;

    setNome(novoNome: string): void {
        this.dadosUsuario.nome = novoNome;
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
    
    allUsers.push(usuario);
    }
    allUsers.forEach(usuario => console.log(usuario.getDadosUsuario()))
}
index();