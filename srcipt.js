$(function () {
  const kepAdat = [
    {
      cim: "1. kép címe",
      eleresiUt: "kepek/kép1.jpg",
      leiras: "1 kép részletes leirása",
    },
    {
      cim: "2. kép címe",
      eleresiUt: "kepek/kép2.jpg",
      leiras: "2 kép részletes leirása",
    },
    {
      cim: "3. kép címe",
      eleresiUt: "kepek/kép3.jpg",
      leiras: "3 kép részletes leirása",
    },
  ];
  let aktIndex = 0;

  $("#bal").on("click", function () {
    aktIndex--;
    if (aktIndex < 0) {
      aktIndex = 2;
    }
    ujkartya.setAdatok(kepAdat[aktIndex]);
  });


  $("#jobb").on("click", function () {
    aktIndex++;
    if (aktIndex > 2) {
      aktIndex = 0;
    }
    ujkartya.setAdatok(kepAdat[aktIndex]);
  });





  const nagyKep = $("#fokep");
  const szuloElem = $("#galeria");
  const sablonElem = $(".kartya");
  for (let i = 0; i < kepAdat.length; i++) {
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    const ujkartya = new Kartya(ujElem, kepAdat[i], i);
  }
  sablonElem.remove();
  const ujElem = sablonElem.clone().appendTo(nagyKep);
  const ujkartya = new Kartya(ujElem, kepAdat[aktIndex], aktIndex);

  $(window).on("kepcsere", (esemeny) => {
    console.log(esemeny.detail);
    ujkartya.setAdatok(esemeny.detail);

    //const ujElem = esemeny.detail.appendTo(nagyKep);
    aktIndex = esemeny.detail.index;
    console.log("haszontalan vagyok?");
    console.log(aktIndex);
  });
});
