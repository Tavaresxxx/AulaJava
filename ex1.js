const usuarios = [
    {
        nome: "Matheus",
        sobrenome: "Tavares",
        cidade: "Blumenau",
        cpf: "4583453923",
        banco: "Nubank",
        salario: 5000
    },
    {
        nome: "Carlos",
        sobrenome: "Santos",
        cidade: "Indaial",
        cpf: "54584354935",
        banco: "Santander",
        salario: 7000
    },
    {
        nome: "Tiago",
        sobrenome: "Silva",
        cidade: "Pomerode",
        cpf: "42384323492",
        banco: "Banco do Brasil",
        salario: 3000
    },
    {
        nome: "Lucas",
        sobrenome: "Souza",
        cidade: "Gaspar",
        cpf: "7832423893",
        banco: "Itaú",
        salario: 20000
    },
    {
        nome: "Eduardo",
        sobrenome: "Pereira",
        cidade: "Navegantes",
        cpf: "654.321.987-00",
        banco: "Caixa",
        salario: 2500
    }
];
let somaSalarios = 0;

for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    somaSalarios += usuario.salario;
    console.log(`Meu nome é ${usuario.nome} ${usuario.sobrenome}, sou de ${usuario.cidade}, meu CPF é ${usuario.cpf} e meu salário é ${usuario.salario}.`);
}

const mediaSalarios = somaSalarios / usuarios.length;

if (mediaSalarios >= 10000) {
    console.log("Você é milionário");
} else if (mediaSalarios >= 5000) {
    console.log("Você é rico");
} else if (mediaSalarios >= 3000) {
    console.log("Você é bem de vida");
} else if (mediaSalarios >= 2000) {
    console.log("Você é da classe média");
} else {
    console.log("Você é pobre")
}