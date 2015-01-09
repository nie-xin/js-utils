// generate a random number according to a defined probability
function montecarlo() {
  while (true) {
    var r1 = Math.random(),
        probability = r1,     // could vary the probability
        r2 = Math.random()

    if (r2 < probability) {
      console.log(r1);
      return r1;
    }
  }
}