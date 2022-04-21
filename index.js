function fact(){
    document.getElementById("fun-facts").innerHTML = "-76% of Americans think the ears of a chocolate bunny should be the first to be eaten.<br><br>-Eggs have been seen as ancient symbol of fertility, while springtime is considered to bring new life and rebirth.<br><br>-Egg dyes were once made out of natural items such as onion peels, tree bark, flower petals, and juices.<br><br>-The first story of a rabbit (later named the “Easter Bunny”) hiding eggs in a garden was published in 1680."


    /*-------CSS--------*/
    document.getElementById("fun-facts").style.fontSize = "24px"    
    document.getElementById("fun-facts").style.color = "blue"    
    document.getElementById("fun-facts").style.textAlign = "start"    
    document.getElementById("fun-facts").style.borderRadius = "20px"    
    document.getElementById("fun-facts").style.border = "solid"
    document.getElementById("fun-facts").style.padding = "5px"
    document.getElementById("fun-facts").style.backgroundColor = "rgba(255, 255, 255, 0.800)"
    document.getElementById("fun-facts").style.width = "500px"
    document.getElementById("fun-facts").style.marginLeft = "685px"
}
// function dressInfo(){
//     document.getElementById("dress").innerHTML = "Christians in medieval times began to wear new, clean clothes on Easter Sunday to symbolize the resurrection of Jesus Christ and the new life for believers."
var coll = document.querySelectorAll('.dresscollapsible, .bunnycollapsible, .dyedcollapsible')
//var i;

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

function bunnyInfo(){
    document.getElementById("bunny").innerHTML = "The Easter Bunny is a folkloric figure and symbol of Easter, depicted as a rabbit—sometimes dressed with clothes—bringing Easter eggs."
}