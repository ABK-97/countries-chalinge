let sectionTwo = document.querySelector(".section-2");
let select = document.querySelector("#country-select-1");
let searchI = document.querySelector(".sec-1 i");
let inputCountry = document.querySelector(".country-input");
let filterByRegion = document.querySelector("#filter-by-region");

async function get(){
    const respone = await fetch("https://restcountries.com/v2/all");
    const data = await respone.json();

    toPage(data);
    countryList(data)

    let dataFilterd = data;

    filterByRegion.addEventListener("change",function(){
        dataFilterd = data.filter(function(e){
            return e.region == filterByRegion.value; 
        })
        toPage(dataFilterd);
    })

    searchI.addEventListener("click",function(){
        let dataFilterdS = dataFilterd.filter(function(e){
            return e.name == inputCountry.value ;
        })
        toPage(dataFilterdS);
    });


}

get();

function toPage(data){
    sectionTwo.innerHTML = "";
    let internationalNumberFormat = new Intl.NumberFormat('en-US');
    
    for(let i = 0 ; i < data.length ; i++){
        
        let container = document.createElement("div");
        container.classList.add("container");
        container.setAttribute("data-id",data[i].name);

        let flagImg = document.createElement("img");
        flagImg.src = data[i].flag ;
        container.appendChild(flagImg);

        let h3 =document.createElement("h3");
        h3.innerHTML = data[i].name;
        container.appendChild(h3);

        let para1 = document.createElement("p");
        para1.innerHTML = `population : <span>${ internationalNumberFormat.format(data[i].population)}</span> `;
        container.appendChild(para1);

        let para2 = document.createElement("p");
        para2.innerHTML = `Region : <span>${data[i].region}</span> `;
        container.appendChild(para2);

        let para3 = document.createElement("p");
        para3.innerHTML = `capital : <span>${data[i].capital}</span> `;
        container.appendChild(para3);

        sectionTwo.appendChild(container);

        container.addEventListener("click",function(){
            toPageTwo(this.getAttribute("data-id"),data);
            
        })

    }

}

function countryList(data){
    let countryName = "";
    for (i in data){
    countryName += `<option value="${data[i].name}">` ;
    }
    select.innerHTML = countryName ;
}

function toPageTwo(name,data){
    let countryInfo = data.filter(function(e){
        return e.name == name ;
    });
    window.localStorage.setItem("country",JSON.stringify(countryInfo));
    window.location.href = "./pages/info.html";
}