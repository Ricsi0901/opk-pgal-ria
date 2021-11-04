class Kartya {
  constructor(elem, adat,index) {
    this.elem = elem;
    
    this.cim = this.elem.children("h3");
    this.kep = this.elem.children("img");
    this.leiras = this.elem.children("p");
    this.adat = adat;   
    this.adat.index=index;
    this.setAdatok(adat);
    this.elem.on("click",() =>{
    this.kepcsere();
    })
  }

  setAdatok(ertekek){
    this.cim.html(ertekek.cim);
    this.kep.attr("src", ertekek.eleresiUt);
    this.leiras.html(ertekek.leiras);

  }
  kepcsere() {
    let esemeny = new CustomEvent("kepcsere", { detail: this.adat });
    window.dispatchEvent(esemeny);
    console.log("bent vagyokk azéterben ");
  }
}
