import navbar from "./components/navbar.js";

let navbar_div = document.getElementById("navbar")

navbar_div.innerHTML=navbar()


async function searchRandom(){
  

    try{
      
    
       
        
     let res= await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
     
    let data= await res.json(); 
    let actual_data= data.meals
    appendRandom(actual_data);
    console.log(actual_data)
    
    // console.log(data)
    
    }catch(err){
        console.log("err:",err)
    }
    }
    searchRandom()
    
    
   const appendRandom = (actual_data) => {
    
        if(actual_data===undefined){
            return false
        }
       
        let data_div=document.getElementById("random");
             let data_div2= document.getElementById("details")
    
       data_div.innerHTML=null
       actual_data.forEach((el)=>{
            let div = document.createElement("div")
    
            let name = document.createElement("p")
            name.innerText=`Name : ${el.strMeal}`
    
    
    
    
            let p_country=document.createElement("p");
           
            p_country.innerHTML=`Origin : ${el.strArea}`;
           p_country.style.marginTop="10px"
    
            let p_category = document.createElement("p");
           
            p_category.style.marginTop="10px"
    
    
            p_category.innerHTML=`Category : ${el.strCategory}`;
    
            let img = document.createElement("img")
           
            img.src = el.strMealThumb
            
    
            div.append(img,name,p_country,p_category)
    
            data_div.append(div)


      let div2=  document.createElement("div")

           let p_instruction= document.createElement("p")
        p_instruction.innerText=`INSTRUCTIONS TO FOLLOW    :   ${el.strInstructions}`
        p_instruction.style.fontSize="20px"
        p_instruction.style.marginTop="70px"
        p_instruction.style.color="linear-gradient(to bottom, #192133, #111826);"



        div2.append(p_instruction)
        data_div2.append(div2)

        })

    }
    document.getElementById("reciepebtn").addEventListener("click",function(){
        window.location.href="reciepeofday.html"
    })

    document.getElementById("logo").addEventListener("click",function(){
        window.location.href="index.html"
    })