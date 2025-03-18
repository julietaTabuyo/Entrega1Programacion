export class Auto{

marca:string;
modelo:string;
anio:number;
velocidad: number=0;


constructor(marca: string, modelo: string, anio:number) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
acelerar(ac:number):string{
    this.velocidad += ac;


return `auto acelerado y ahora va a ${this.velocidad}, km7h`
}

frenar(): string{
    this.velocidad=0;
    return `El auto ha frenado`
}
}