interface Usuario{
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario{
    return{
        nome: 'Mika',
        email: 'mika@mika.com'
    }
}

function setUser(usuario: Usuario){
    // ...
}