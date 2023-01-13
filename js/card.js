var data = [

    {

        "img": "assesst/images/shoess.jpg",
        "title": "Shoes",
        "price": "Rs 599/s",
        "button": "More Detail!",

    },
    {

        "img": "assesst/images/shirt wh.JPG",
        "title": "Sport Shoes",
        "price": "Rs 1299/s",
        "button": "More Detail!",

    },
    {

        "img": "assesst/images/whi.jpg",
        "title": "Lofer",
        "price": "Rs 999/s",
        "button": "More Detail!",

    },
    {

        "img": "assesst/images/white.jpg",
        "title": "Shirt",
        "price": "Rs 799/s",
        "button": "More Detail!",

    }

]

for (var i = 0; i < data.length; i++) {
    document.getElementById("card").innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-12 ">
    <div class="card shadow mt-4">
    <img src="${data[i].img}" class="card-img-top" alt="...">
   
    <div class="card-body">
      <h5 class="card-title">${data[i].title}</h5>
   
   <div class="row">
    <div class="col-lg-8 mb-1 yellow">
    
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i>
        </div>
    
    <div class="col-lg-6"></div>
   </div>
   <div class="row">
    <div class="col-lg-10"><i><b id="price">Rs 31000/s</b></i></div>
    <div class="col-lg-2"><i class="fa-solid fa-cart-shopping cart"></i></div>
   </div>

   <a href="men.html" class="btn btn-primary mt-3">${data[i].button}</a>
    </div>
  </div>
</div>
</div>
    `
}





var data1 = [
    {
        "img": "assesst/images/gree ac w.png",
        "title": "AC",
        "price": "Rs 59,999/s",
        "button": "More Detail!",

    },
    {
        "img": "assesst/images/haier 1.jpg",
        "title": "AC",
        "price": "Rs 12,999/s",
        "button": "More Detail!",

    },
    {
        "img": "assesst/images/kenwood 5.webp",
        "title": "AC",
        "price": "Rs 69,999/s",
        "button": "More Detail!",

    },
    {
        "img": "assesst/images/haier ac.jpg",
        "title": "GREE AC",
        "price": "Rs 79,999/s",
        "button": "More Detail!",

    }

]

for (var i = 0; i < data1.length; i++) {
    document.getElementById("AC").innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-12 ">
    <div class="card shadow mt-4">
    <img src="${data1[i].img}" class="card-img-top" alt="..." style="object-fit:cover">
   
    <div class="card-body">
      <h5 class="card-title">${data1[i].title}</h5>
   
   <div class="row">
    <div class="col-lg-8 mb-1 yellow">
    
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i>
        </div>
    
    <div class="col-lg-6"></div>
   </div>
   <div class="row">
    <div class="col-lg-10"><i><b id="price">Rs 31000/s</b></i></div>
    <div class="col-lg-2"><i class="fa-solid fa-cart-shopping cart"></i></div>
   </div>

   <a href="ac.html" class="btn btn-primary mt-3">${data1[i].button}</a>
    </div>
  </div>
</div>
</div>
    `
}



var data2 = [
    {
        "img":"assesst/images/led.jpg.",
        "title":"LED",
        "price":"Rs 59,999/s",
        "button":"more detil!!",
    },
    {
      "img":"assesst/images/led1.jpg",
      "title":"LED",
      "price":"Rs 18,999/s",
      "button":"more detil!!",
    },
    {
      "img":"assesst/images/led2.jpg",
      "title":"LED",
      "price":"Rs 99,999/s",
      "button":"more detil!!",
    },
    {
      "img":"assesst/images/led13.jpg",
      "title":"LED",
      "price":"Rs 73,999/s",
      "button":"more detil!!",
    },
]

for (var i = 0; i < data2.length; i++) {
    document.getElementById("LED").innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-12 ">
    <div class="card shadow mt-4">
    <img src="${data2[i].img}" class="card-img-top" alt="..." style="object-fit:cover">
   
    <div class="card-body">
      <h5 class="card-title">${data2[i].title}</h5>
   
   <div class="row">
    <div class="col-lg-8 mb-1 yellow">
    
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i>
        </div>
    
    <div class="col-lg-6"></div>
   </div>
   <div class="row">
    <div class="col-lg-10"><i><b id="price">Rs 31000/s</b></i></div>
    <div class="col-lg-2"><i class="fa-solid fa-cart-shopping cart"></i></div>
   </div>

   <a href="led.html" class="btn btn-primary mt-3">${data2[i].button}</a>
    </div>
  </div>
</div>
</div>
    `
}


var data3 = [
    {    
        "img":"assesst/images/sport 12.jpg",
        "title":" NET",
        "price":"Rs 16,99/s",
        "button":"more detil!!",
    },
    {    
      "img":"assesst/images/sport 7.jpg",
      "title":"F.GLOVES",
      "price":"Rs 699/s",
      "button":"more detil!!",
    },
    {    
      "img":"assesst/images/sport 6.jpg",
      "title":"VOLLEY BAL",
      "price":"Rs 1,999/s",
      "button":"more detil!!",
    },
    {
      "img":"assesst/images/sport 2.jpg",
      "title":"BAT  RUN",
      "price":"Rs 7999/s",
      "button":"more detil!!",
      
    },

]

for (var i = 0; i < data3.length; i++) {
    document.getElementById("sport").innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-12 ">
    <div class="card shadow mt-4">
    <img src="${data3[i].img}" class="card-img-top" alt="..." style="object-fit:cover">
   
    <div class="card-body">
      <h5 class="card-title">${data3[i].title}</h5>
   
   <div class="row">
    <div class="col-lg-8 mb-1 yellow">
    
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i>
        </div>
    
    <div class="col-lg-6"></div>
   </div>
   <div class="row">
    <div class="col-lg-10"><i><b id="price">Rs 31000/s</b></i></div>
    <div class="col-lg-2"><i class="fa-solid fa-cart-shopping cart"></i></div>
   </div>

   <a href="sport.html" class="btn btn-primary mt-3">${data3[i].button}</a>
    </div>
  </div>
</div>
</div>
    `
}


var data5 = [
    {    
        "img":"assesst/images/bike1.jpg",
        "title":"100cc",
        "price":"Rs 161,999/s",
        "button":"more detil!!",
    },
    {    
      "img":"assesst/images/bike2.jpg",
      "title":"HONDA 125",
      "price":"Rs 21,999/s",
      "button":"more detil!!",
    },
    {    
      "img":"assesst/images/bike3.jpg",
      "title":"HONDA 70",
      "price":"Rs 1,999/s",
      "button":"more detil!!",
    },
    {
        "img":"assesst/images/bike8.jpg",
        "title":"BLACK 125",
        "price":"Rs 120,999/s",
        "button":"more detil!!",
      },

]

for (var i = 0; i < data5.length; i++) {
    document.getElementById("bike").innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-12 ">
    <div class="card shadow mt-4">
    <img src="${data5[i].img}" class="card-img-top" alt="..." style="object-fit:cover">
   
    <div class="card-body">
      <h5 class="card-title">${data5[i].title}</h5>
   
   <div class="row">
    <div class="col-lg-8 mb-1 yellow">
    
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i>
        </div>
    
    <div class="col-lg-6"></div>
   </div>
   <div class="row">
    <div class="col-lg-10"><i><b id="price">Rs 31000/s</b></i></div>
    <div class="col-lg-2"><i class="fa-solid fa-cart-shopping cart"></i></div>
   </div>

   <a href="bike.html " class="btn btn-primary mt-3">${data5[i].button}</a>
    </div>
  </div>
</div>
</div>
    `
}

