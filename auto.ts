class auto{
    public marca: string;
    public modelo: number;
    public encendido: boolean;
    public aireAcondicionado: boolean;
    public kilometraje: number;
    public color: string;

    constructor(paramMarca,paramModelo,paramEncendido,paramAireAcondicionado,paramKilometraje,paramColor){
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
 console.log("caracteristicas del auto: " + auto1);
 console.log("caracteristicas del auto: " + auto2);
 console.log("caracteristicas del auto: " + auto3);