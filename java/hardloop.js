var Farm = ["chickens", "pigs", "cows", "horses", "ostriches"];
for (var i = 0; i < Farm.length; i++) {
     console.log(Farm[i])
     if (Farm[i].charAt(0)=="c") {
         alert(Farm[i] +" with c")
     }
    else if (Farm[i].charAt(0)=="o") {
        alert(Farm[i] + " with o")
    }
  }