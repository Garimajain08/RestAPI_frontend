let flag = document.querySelector('.flag img');
let nativename = document.querySelector('.nativename');
let population=document.querySelector('.population');
let capital=document.querySelector('.capital');
let cname=document.querySelector('.cname');
let subregion=document.querySelector('.subregion');
let region=document.querySelector('.region');
let languages=document.querySelector('.languages');
let currencies=document.querySelector('.currencies');
let tld=document.querySelector('.tld');
let borders = document.querySelector('.borders')

let queryString = window.location.search;
let params = new URLSearchParams(queryString);

const country=params.get('country')
console.log(country);


const country_page=document.querySelector('.country-page')
fetch (`https://restcountries.com/v3.1/name/${country}?fullText=true`).then((res)=>{
  return  res.json()
}).then(([data])=>{
   console.log(data);
   //population
   population.innerText=data.population;
//    flag
flag.src=data.flags.svg;

// cname
cname.innerText=data.name.common

//    native name
    if(data.name.nativeName)
  {nativename.innerText=Object.values(data.name.nativeName)[0].common}
  else{
    nativename=""
  }
  if(data.currencies)
   {  currencies.innerText = Object.values(data.currencies).map(c=>c.name)}
   
   else{
    currencies="";
   }
   if(data.tld){
    tld.innerText=data.tld;
   }
   else{
    tld.innerText=""
   }
   if(data.languages)
   {  languages.innerText = Object.values(data.languages)}
   else{
    languages="";
   }
   if(data.region){
    region.innerText=data.region;
   }
   else{
    region="";
   }
   if(data.subregion){
    subregion.innerText=data.subregion;
   }
   else{
    subregion="";
   }
   if(data.capital){
    capital.innerText=data.capital;
   }
   else{
    capital=""
   }

   if(data.borders){
    
   
    data.borders.forEach((code)=>{
    console.log(code);
    fetch (`https://restcountries.com/v3.1/alpha/${code}`).then((data)=>{
        return data.json();
    }).then((res)=>{
        console.log(res[0].name.common)
        p = document.createElement('p');
        p.classList.add('bordername');
        a = document.createElement('a');
        a.href=`/country.html?country=${res[0].name.common}?fullText=true`
        a.innerText=res[0].name.common;
        p.appendChild(a)
        borders.appendChild(p)
    })
   })
   }
   else{
    borders.innerText="";
   }
})





const btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
    history.back();
})


let light=document.querySelector('.light')
let dark = document.querySelector('.dark');
dark.addEventListener('click',()=>{
  document.body.classList.toggle('darkmode');
 
  light.style.display="inline";
  dark.style.display="none";

})
light.addEventListener('click',()=>{
  document.body.classList.toggle('darkmode');

  dark.style.display="inline";
  light.style.display="none";

})
