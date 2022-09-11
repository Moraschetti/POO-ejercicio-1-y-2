class auto{
    private marca: string;
    private modelo: number;
    private encendido: boolean;
    private aireAcondicionado: boolean;
    private kilometraje: number;
    private color: string;

    constructor(paramMarca:string,paramModelo:number,paramEncendido:boolean,paramAireAcondicionado:boolean,
        paramKilometraje:number,paramColor:string){
         this.marca = paramMarca;
         this.modelo = paramModelo;
         this.encendido = paramEncendido;
         this.aireAcondicionado = paramAireAcondicionado;
         this.kilometraje = paramKilometraje;
         this.color = paramColor;
    }
        encender():void{
            if(this.encendido===true){
                this.encendido=false;
            }else{
                this.encendido=true;
            }
    }
    aireFrio():void{
        if(this.aireAcondicionado===true){
            this.aireAcondicionado=false;
        }else(this.aireAcondicionado=true);
    }    
    aireCaliente():void{
        if(this.aireAcondicionado===true){
            this.aireAcondicionado=false;
        }else(this.aireAcondicionado=true);
    }
}
let auto1 = new auto("chevrolet",2013,false,false,91200,"azul");
let auto2 = new auto("toyota",2020,true,true,12000,"blanco");
let auto3 = new auto("ford",2022,true,false,2300,"verde");
 console.log(`caracteristicas del auto:  Aire: ${auto1.aireAcondicionado} marca:${auto1.marca} modelo:${auto1.modelo} color:${auto1.color}`);
