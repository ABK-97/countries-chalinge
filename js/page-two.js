let sectionTwo = document.querySelector(".section-2");
let back = document.querySelector(".section-1 .sec-1");
let secOne = document.querySelector(".section-2 .sec-1");
let secTwo = document.querySelector(".section-2 .sec-2");


let country = "";
let lan = "";
let cur = "";

if (localStorage.getItem("country")){
    country = JSON.parse(localStorage.getItem("country")); 
}
for(i in country[0].currencies){
    cur += ` ${country[0].currencies[i].name},`
}
for(i in country[0].languages){
    lan += ` ${country[0].languages[i].name},`;
}




window.onload = function(){
    let internationalNumberFormat = new Intl.NumberFormat('en-US')

    secOne.innerHTML = `<img src="${country[0].flag}" alt="flag">`;

    secTwo.innerHTML = 
    `

            <h3>${country[0].name}</h3>
            <div class="info-1">
                <p>Native name : <span>${country[0].name}</span></p>
                <p>population : <span>${internationalNumberFormat.format(country[0].population)} </span></p>
                <p>Sub Region : <span>${country[0].region}</span></p>
                <p>Capital : <span>${country[0].capital}</span></p>
            </div>
            <div class="info-2">
                <p>top level domin : <span>${country[0].topLevelDomain}</span></p>
                <p>currencies: <span>${cur}</span></p>
                <p>languages: <span>${lan}</span></p>
            </div>
       
    `
    let info3 =document.createElement("div");
    info3.classList.add("info-3");
    info3.innerHTML = `<p>border countries :</p>`

    let divone = document.createElement("div");
    for(i in country[0].borders){
       let p =  document.createElement("p");
        p.innerHTML = country[0].borders[i] ;
        divone.appendChild(p);
    }
    info3.appendChild(divone);

    secTwo.appendChild(info3)

}
back.addEventListener("click",function(){
    window.location.href = "../index.html";
})