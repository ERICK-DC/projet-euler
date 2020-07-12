class Multiplos 
    {
        constructor(primerNum,segundoNum,limite){
        this.primerNum=primerNum;
        this.segundoNum=segundoNum;
        this.limite = limite;
        this.suma = 0
    }
​
    sumar()
​
    {
        for(let i=0;i<this.limite;i++)
            {
                if(i%this.primerNum===0||i%this.segundoNum===0)
                {
                    this.suma+=i;
                }
      }
      return this.suma;
  }
}
​
var multiplo = new Multiplos(3,5,1000);
console.log(multiplo.sumar());