import navbar from "./components/navbar.js";

let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML = navbar();

let sem = document.getElementById("search");

sem.addEventListener("input",  ()=> {
  debounce(searchReciepes, 1000);
});

async function searchReciepes() {
  try {
    let query = document.getElementById("search").value;

    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    let data = await res.json();
    let actual_data = data.meals;
    appendReciepes(actual_data);
    console.log(actual_data);

    // console.log(data)
  } catch (err) {
    console.log("err:", err);
  }
}

 const appendReciepes = (actual_data) => {
  if (actual_data === undefined) {
    return false;
  }

  let data_div = document.getElementById("reciepes");

  data_div.innerHTML = null;
  actual_data.forEach(function (el) {
    let div = document.createElement("div");

    let name = document.createElement("p");
    name.innerText = `Name : ${el.strMeal}`;

    let p_country = document.createElement("p");

    p_country.innerHTML = `Origin : ${el.strArea}`;
    p_country.style.marginTop = "10px";

    let p_category = document.createElement("p");

    p_category.style.marginTop = "10px";

    p_category.innerHTML = `Category : ${el.strCategory}`;

    let img = document.createElement("img");

    img.src = el.strMealThumb;

    div.append(img, name, p_country, p_category);

    data_div.append(div);
  });
}

let id;
const debounce=(func, delay) => {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout( () => {
    func();
  }, delay);
}

document.getElementById("reciepebtn").addEventListener("click", function () {
  window.location.href = "reciepeofday.html";
});
document.getElementById("Signup").addEventListener("click", function () {
  window.location.href = "Signup.html";
});


document.getElementById("logo").addEventListener("click",function(){
    window.location.href="index.html"
})
