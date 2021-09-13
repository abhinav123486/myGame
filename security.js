class Security{
    constructor(){
        this.access1 = createInput("Code")
        this.access1.position(120, 165);
        this.access1.style('background', 'white');  
        this.button1 = createButton("check");
        this.button1.position(120, 205);
        this.button1.style('background', 'lightgrey');  

        this.access2 = createInput("code");
        this.access2.position(762, 165);
        this.access2.style('background', 'white');  
        this.button2 = createButton("check");
        this.button2.position(762, 205);
        this.button2.style('background', 'lightgrey');  

        this.access3 = createInput("code");
        this.access3.position(762, 440);
        this.access3.style('background', 'white');  
        this.button3 = createButton("check");
        this.button3.position(762, 480);
        this.button3.style('background', 'lightgrey');  
    }

    display(){
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1, this.access1.value())){
              this.access1.hide();
              this.button1.hide();
              Score ++;
            }
        });

        this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode2, this.access2.value())){
              this.access2.hide();
              this.button2.hide();
              Score ++;
            }
        });

        this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3, this.access3.value())){
              this.access3.hide();
              this.button3.hide();
              Score ++;
            }
        });
    }
}