function fact(){
    document.getElementById("fun-facts").innerHTML = "-76% of Americans think the ears of a chocolate bunny should be the first to be eaten.<br><br>-Eggs have been seen as ancient symbol of fertility, while springtime is considered to bring new life and rebirth.<br><br>-Egg dyes were once made out of natural items such as onion peels, tree bark, flower petals, and juices.<br><br>-The first story of a rabbit (later named the “Easter Bunny”) hiding eggs in a garden was published in 1680."
}


// ----------Collapsible----------//
var coll = document.querySelectorAll('.dresscollapsible, .bunnycollapsible, .dyedcollapsible')

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
