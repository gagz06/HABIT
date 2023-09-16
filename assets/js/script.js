

function openNav(){
  // if(document.getElementById("rightMySidenav").style.width!=0){
  //   closeNavRight();
  // }
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("header").style.marginLeft = "250px";
    document.getElementById("footer").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("header").style.marginLeft = "0";
    document.getElementById("footer").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

