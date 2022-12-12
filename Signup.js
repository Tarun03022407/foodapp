class User {
    constructor(n) {}

    #checkUsername(username) {
      let value = username.includes("#") ? false : true;
      return value;
    }
    #checkPassword(password) {
      let value = password.length >= 8 ? true : false;
      return value;
    }

    Signup=async (n, e, u, p, m, d)=> {
      let isValidated = this.#checkUsername(u) && this.#checkPassword(p);

      if (isValidated) {
        this.name = n;
        this.email = e;
        this.username = u;
        this.password = p;
        this.mobile = m;
        this.description = d;

        let actual_data = JSON.stringify(this);
        console.log(actual_data)

        try {
          let res = await fetch(
            `https://masai-api-mocker.herokuapp.com/auth/register`,
            {
              method: "POST",

              body: actual_data,

              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          let data = await res.json();
          console.log("data:", data);

          alert(data.message);
        } catch (error) {
          console.log("error:", error);
        }

        window.location.href = "login.html";
      }
    }
  }

  let u1 = new User();

 document.getElementById("btnsignup").addEventListener("click",function(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value;
    const description = document.getElementById("description").value;

    u1.Signup(name, email, username, password, mobile, description);
 })

 document.getElementById("logo").addEventListener("click",function(){
    window.location.href="index.html"
})
   
  
