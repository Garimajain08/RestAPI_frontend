let allcountriesdata=[];
async function countrydata(){
const url= "https://restcountries.com/v3.1/all";
try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    allcountriesdata=data;
    return data;
    console.log(data[0].name.common,data[0].capital,data[0].flags.svg,data[0].population,data[0].region);
  } catch (error) {
    console.error('Error:', error);
  }
}
const countries_container =document.querySelector('.countries-container')
countrydata().then((data)=>{

data.forEach(country => {
       console.log(country.borders,country.name.common);
    const newcountry = document.createElement('a');  
     newcountry.classList.add('country');
     const url =`/name/${country.name.common}`
     newcountry.href=`/country.html?country=${country.name.common}`
     
const card=
`<img src="${country.flags.svg}" alt="">
       <div class="desc">
        <h3>${country.name.common}</h3>
        <p>Population:<span>${country.population}</span> </p>
        <p>Region:<span>${country.region}</span>  </p>
        <p>Capital:<span>${country.capital}</span>  </p>
    </div>`
newcountry.innerHTML=card;
countries_container.appendChild(newcountry);
   
    });
});


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


// filter
let filter = document.querySelector('.filter')
filter.addEventListener('change',(e)=>{
  countries_container.innerHTML="";
  console.log(e.target.value,"k")
  region =e.target.value;
  fetch (`https://restcountries.com/v3.1/region/${region}`).then((res)=>{
    return res.json();
  }).then((country_by_region)=>{
    country_by_region.forEach((country)=>{
      console.log(country);
      console.log(country.borders,country.name.common);
    const newcountry = document.createElement('a');  
     newcountry.classList.add('country');
     const url =`/name/${country.name.common}`
     newcountry.href=`/country.html?country=${country.name.common}`
     
const card=
`<img src="${country.flags.svg}" alt="">
       <div class="desc">
        <h3>${country.name.common}</h3>
        <p>Population:<span>${country.population}</span> </p>
        <p>Region:<span>${country.region}</span>  </p>
        <p>Capital:<span>${country.capital}</span>  </p>
    </div>`
newcountry.innerHTML=card;
countries_container.appendChild(newcountry);
    });
  })
});



let search = document.querySelector('.search-box input')
search.addEventListener('input',(e)=>{
  country =e.target.value.toLowerCase();
  search_country=allcountriesdata.filter(c=>c.name.common.toLowerCase().includes(country));
  countries_container.innerHTML = " ";
 search_country.forEach((country)=>{

  const newcountry = document.createElement('a');  
   newcountry.classList.add('country');
   const url =`/name/${country.name.common}`
   newcountry.href=`/country.html?country=${country.name.common}`
   
const card=
`<img src="${country.flags.svg}" alt="">
     <div class="desc">
      <h3>${country.name.common}</h3>
      <p>Population:<span>${country.population}</span> </p>
      <p>Region:<span>${country.region}</span>  </p>
      <p>Capital:<span>${country.capital}</span>  </p>
  </div>`
newcountry.innerHTML=card;
countries_container.appendChild(newcountry);
 

 })
})