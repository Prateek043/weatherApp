const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp_real_val=document.getElementById('temp_real_val');
const datahide=document.querySelector('.middle_layer');
const day=document.getElementById('day');
const today_date=document.getElementById('today_date');
const month=document.getElementById('month');
let date=new Date();
const dayname=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const monthname = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let today_day=date.getDay();
day.innerText=dayname[today_day];
today_date.innerText=date.getDate();
let presentMonth=date.getMonth();
month.innerText=monthname[presentMonth];
const getInfo=async(event) =>{
    event.preventDefault();
    let cityval=cityName.value;
    if(cityval===""){
        city_name.innerHTML=`Plz Write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=0ee4fc2fe63cf6c16dbeac00906cb251`;
        const response=await fetch(url);
        const data= await response.json();
        // console.log(data);
        const arrData=[data];
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_val.innerText=arrData[0].main.temp;
        const tempMood=arrData[0].weather[0].main;
        if(tempMood==="Clear"){
            temp_status.innerHTML=
            "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }else if(tempMood==="Cloud"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }else if(tempMood==="Rain"){
            temp_status.innerHTML=
            "<i class='fas fa-rain' style='color:#a4b0be;'></i>";
        }else{
            temp_status.innerHTML=
            "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }
        datahide.classList.remove('data_hide');
    }catch{
        city_name.innerHTML=`Plz enter the city name properly`;
        datahide.classList.add('data_hide');
    }
}
}
submitBtn.addEventListener('click',getInfo);