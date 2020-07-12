
class MayorPrimo
{
    constructor(numero){
    this.numero=numero
    this.iterador = 2
}
buscar_mayorp()
{
    while(this.numero!=1)
        {
            if(this.numero%this.iterador===0)
                {
                    this.numero=(this.numero)/(this.iterador)
                }
            else
                {
                    this.iterador+=1;
        }
    }
    return this.iterador;
    
}
}
var mayor_primo = new MayorPrimo(600851475143)
console.log(mayor_primo.buscar_mayorp());