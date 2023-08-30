//Interface de Fabrica Abstrata
class AbstractFactory{
    createProdutoA(){}
    createProdutoB(){}
}

//Fabrica Concreta que cria produto do Tipo A e B
class ConcreteFactory1 extends AbstractFactory{
    createProductA(){
        return new ConcreteProductA1();
    }
    createProductB(){
        return new ConcreteProductB1();
    }
}

//Fabrica Concreta que cria produtos do Tipo A e B Diferentes
class ConcreteFactory2 extends AbstractFactory{
    createProductA(){
        return new ConcreteProductA2();
    }
    createProductB(){
        return new ConcreteProductB2();
    }
}

//Interface dos Produtos Tipo A
class AbstractProductA{
    methodA() {}
}

//Implantação concreta do Produto do Tipo A
class ConcreteProductA1 extends AbstractProductA {
    methodA(){
        return "Produto do Tipo A da Fbrica 1";
    }
}

//Implantação Concreta do Produto do Tipo B Diferente 
class ConcreteProductA2 extends AbstractProductA {
    methodA(){
        return "Produto do Tipo A da Fbrica 2";
    }
}
//Interface dos produtos tipo B
class AbstractProductB {
    methodB(){}
        
}

// Implementação concreta do produto do Tipo B- Especificação 1
class ConcreteProductB1 extends AbstractProductB{
    methodB(){
        return "Produto do Tipo B da fabrica 1";
    }
    
}

// Implementação concreta do produto do Tipo B- Especificação 2
class ConcreteProductB2 extends AbstractProductB{
    methodB(){
        return "Produto do Tipo B da fabrica 2";
    }
    
}

// Função para Demonstrar o Padrão Abstract Factory
function clienteCode(factory){
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productA.methodA());
    console.log(productB.methodB());

}
//Exemplo de Uso com Padrão Abstract Factory
const factory1 = new ConcreteFactory1();
clienteCode(factory1);

//Exemplo de Uso com Primeira Fabrica
const factory2 = new ConcreteFactory2();
clienteCode(factory2);

