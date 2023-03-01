class Person {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  apresentar() {
    console.log(
      `Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura`
    );
  }
}

class PersonComProfissao extends Person {
  constructor(nome, idade, altura, profissao) {
    super(nome, idade, altura);
    this.profissao = profissao;
  }

  apresentar() {
    console.log(
      `Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}`
    );
  }
}
const pessoa1 = new Person("João", 25, 1.75);
pessoa1.apresentar();
const pessoa2 = new PersonComProfissao("Maria", 30, 1.65, "médica");
pessoa2.apresentar();