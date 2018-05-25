
function sideNav(that){
    if(that.classList.contains("toggle--off")){
        that.classList.remove("toggle--off");
        that.classList.add("toggle--on");
    }
    else if(that.classList.contains("toggle--on")){
        that.classList.remove("toggle--on");
        that.classList.add("toggle--off");
    }
}
