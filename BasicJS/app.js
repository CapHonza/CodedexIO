for (let i = 1; i <= 17; i++) {
    if (i <= 5) {
        console.log("Tier " + i + ": Bílá mapa - pohodička, jdeme farmit.");
    } else if (i <= 10) {
        console.log("Tier " + i + ": Žlutá mapa - začíná to přituhovat.");
    } else if (i <= 16) {
        console.log("Tier " + i + ": Červená mapa - tady jde o život!");
    } else {
        console.log("Tier " + i + ": T17 Endgame mapa, jsi v koncích!");
    }
}