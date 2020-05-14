/* function navForMobile() {
    var getNavItems = document.getElementsByClassName("navbar-toggler");
    if (getNavItems.style.display === "block") {
      getNavItems.style.display = "none";
    } else {
      getNavItems.style.display = "block";
    }
  }  */

  // A supprimer : C'est pour cacher le slider pendant que je travail sur la map
function fermeToi(){
  var cache = document.getElementById("slider")
  if (cache.style.display === "block") {
      cache.style.display = "none"; 
  } else {
    cache.style.display ="block";
  }
}