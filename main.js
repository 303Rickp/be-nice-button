var niceArray = ["Killing It!",
                "Spot On Good Sir!",
                "AmazeBalls"];

function generate() {
  return Math.floor(Math.random() *
     niceArray.length);
}

console.log(generate());

$("button").on("click",function() {
  $("#result h1").html(niceArray[generate()]);
})
