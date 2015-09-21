// test fixture
var results = [
  {name: "Satisfied", count: 1043, color: "lightblue"},
  {name: "Neutral", count: 563, color: "lightgreen"},
  {name: "Unsatisfied", count: 510, color: "pink"},
  {name: "No comment", count: 175, color: "silver"}
];

// drawing on canvas
<canvas width="200" height="200"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");
  var total = results.reduce(function(sum, choice) {
    return sum + choice.count;
  }, 0);

  var currentAngle = -0.5 * Math.PI;  // start at the top
  results.forEach(function(res) {
    // calculate the arc of each piece in radius
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    cx.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx.lineTo(100, 100);
    cx.fillStyle = result.color;
    cx.fill();
  });
</script>
