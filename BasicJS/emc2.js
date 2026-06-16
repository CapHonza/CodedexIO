function relativityTheory(mass) {
  let speedOfLight = 299792458
  let energy = mass * speedOfLight * speedOfLight // Nebo by šlo speedOfLight ** 2

  return energy;
}

console.log(relativityTheory(18));