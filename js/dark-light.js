let header = document.querySelector(".header");
let sectionOne = document.querySelector(".section-1");
sectionTwo = document.querySelector(".section-2");



let toogle = document.querySelector(".dark-light");
if(window.localStorage.getItem("indecator-light-dark")){
    if(window.localStorage.getItem("indecator-light-dark") == "enabled"){
        removeAllActive();
    }else {
        addAllActive();
    }
}else{
    window.localStorage.setItem("indecator-light-dark","enabled");
}

toogle.onclick = checkOnclick;

function checkOnclick(){
    if(window.localStorage.getItem("indecator-light-dark") == "enabled"){
        addAllActive();
        window,localStorage.setItem("indecator-light-dark","disabled");

    }else if (window.localStorage.getItem("indecator-light-dark") == "disabled"){
        removeAllActive();
        window,localStorage.setItem("indecator-light-dark","enabled");
    }
}

function addAllActive(){
    header.classList.add("active");
    sectionOne.classList.add("active");
    sectionTwo.classList.add("active");
    document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 98%)";
}
function removeAllActive(){
    header.classList.remove("active");
    sectionOne.classList.remove("active");
    sectionTwo.classList.remove("active");
    document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(207, 26%, 17%)";
    
}