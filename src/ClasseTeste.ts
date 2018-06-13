
export interface Pessoa {
   /**
    * Descricao
    */
   nome: string;
   idade: number;
}

export interface Veiculo {
   dono: Pessoa;
   marca: string;
   ano?: number;
   combustivel: Array<string>;
}

export default class ClasseTeste {

   static propStatic: number = 25;

   private static propStaticPrivate: number = 33;

   propPublic: number = 44;

   private propPrivate: number = 11;

   constructor() {
      // Acessar atributos privados
      console.log(this.propPrivate);

      // Acessar atributos estáticos privados
      console.log(ClasseTeste.propStaticPrivate);
   }

   metodoPublico(carro: Veiculo) {
      console.log(carro.dono.idade);
   }

}

let teste: ClasseTeste = new ClasseTeste();

// Acessar atributos publicos
console.log(teste.propPublic);

// Acessar atributos estáticos
console.log(ClasseTeste.propStatic);

// Descrição
// Exemplificar chamada
// Exemplificar uso no metodo metodoPublico
