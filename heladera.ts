class heladera{
    public frio: number;
    public marca: string;
    public encendido: boolean;

    constructor(paramFrio, paramMarca, paramEncendido){
        this.frio = paramFrio;
        this.marca = paramMarca;
        this.encendido = paramEncendido;
    }
    encender():void{
        if(this.encendido===true){
            this.encendido=false;
        }else{
            this.encendido=true;
        }
        
    }
    temperatura():number{
        return this.frio;
    }
    subirTemperatura():void{
        this.frio = this.frio++;
    }
    
}
    let heladera1 = new heladera(0, "whirpool", true);
    let heladera2 = new heladera(-12, "patrick", true);
    let heladera3 = new heladera(-2,"patrick",false);
    
console.log("la primera heladera es de " + heladera1);