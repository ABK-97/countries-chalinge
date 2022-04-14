let sectionTwo = document.querySelector(".section-2");
let back = document.querySelector(".section-1 .sec-1");
let secOne = document.querySelector(".section-2 .sec-1");
let secTwo = document.querySelector(".section-2 .sec-2");

const urlParams = new URLSearchParams(window.location.search);
const countryParam = urlParams.get('country');


back.addEventListener("click",function(){
    window.location.href = "../index.html";
})



get(countryParam);

async function get(countryParam){
    const respone = await fetch("https://restcountries.com/v2/all");
    const data = await respone.json();
    let countryInfo = data.filter(function(e){
        return e.name == countryParam ;
    })

    toPage(countryInfo,data);
}


function toPage(countryInfo,data){
    let lan = "";
    let cur = "";
    if (countryInfo[0].currencies.length > 1){
        for(i in countryInfo[0].currencies){
            cur += ` ${countryInfo[0].currencies[i].name},`
        }
    }else{
        cur += ` ${countryInfo[0].currencies[0].name}`
    }
    if (countryInfo[0].languages.length > 1){
        for(i in countryInfo[0].languages){
            lan += ` ${countryInfo[0].languages[i].name},`;
        }
    }else{
        lan += ` ${countryInfo[0].languages[0].name}`;
    }




    let internationalNumberFormat = new Intl.NumberFormat('en-US')

    secOne.innerHTML = `<img src="${countryInfo[0].flag}" alt="flag">`;

    secTwo.innerHTML = 
    `
            <h2>${countryInfo[0].name}</h2>
            <ul class="info-1">
                <li>Native name : <span>${countryInfo[0].nativeName}</span></li>
                <li>population : <span>${internationalNumberFormat.format(countryInfo[0].population)} </span></li>
                <li>Sub Region : <span>${countryInfo[0].region}</span></li>
                <li>Capital : <span>${countryInfo[0].capital}</span></li>
            </ul>
            <ul class="info-2">
                <li>top level domin : <span>${countryInfo[0].topLevelDomain}</span></li>
                <li>currencies: <span>${cur}</span></li>
                <li>languages: <span>${lan}</span></li>
            </ul>
       
    `
    let info3 =document.createElement("div");
    info3.classList.add("info-3");
    info3.innerHTML = `<h3>border countries :</h3>`

    let divone = document.createElement("ul");
    for(i in countryInfo[0].borders){
       let p =  document.createElement("li");
       let borderC = data.filter(function(e){
           return e.alpha3Code == countryInfo[0].borders[i];
       })
        p.innerHTML = borderC[0].name ;
        divone.appendChild(p);
        p.addEventListener("click",function(){
            borderF(this.innerHTML,data);
        })
    }
    info3.appendChild(divone);

    secTwo.appendChild(info3);
}

function borderF (a,data){
    let countryInfo = data.filter(function(e){
        return e.name == a ;
    })
    console.log(countryInfo)
    toPage(countryInfo,data);
}