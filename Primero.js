class Multiplo {
    constructor(primerNum,SegundoNum,limite){
    this.primerNum=primerNum;
    this.SegundoNum=SegundoNum;
    this.limite=limite;
    this.suma=0
    }
    sumar(){
        for(let i=1;i<this.limite;i++){
            if(i%this.primerNum===0 || i%this.SegundoNum===0){
                this.suma+=i
            }
        }
        return this.suma;
    }
}

let multiplos= new Multiplo(3,5,1000);
console.log(multiplos.sumar());

