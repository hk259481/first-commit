var data = [
    
    {    
        "img":"assesst/images/bike1.jpg",
        "title":"100cc",
        "price":"Rs 161,999/s",
    },
    {    
      "img":"assesst/images/bike2.jpg",
      "title":"HONDA 125",
      "price":"Rs 21,999/s",
    },
    {    
      "img":"assesst/images/bike3.jpg",
      "title":"HONDA 70",
      "price":"Rs 1,999/s",
    },
    {
      "img":"assesst/images/bike4.png",
      "title":"SUPER P.",
      "price":"Rs 79,999/s",
      "button":"more detil!!",
    },
    {
      "img":"assesst/images/bike5.jpg",
      "title":"UNITED",
      "price":"Rs 12,999/s",
      "button":"more detil!!",
    },
    {
      "img":"assesst/images/bike6.jpg",
      "title":"HONDA 125",
      "price":"Rs 13,9999/s",
    },
    {
      "img":"assesst/images/bike7.jpg",
      "title":"UNITED 125",
      "price":"Rs 79,999/s",
    },
    {
      "img":"assesst/images/bike8.jpg",
      "title":"BLACK 125",
      "price":"Rs 120,999/s",
    },
    {
      "img":"assesst/images/bike9.jpg",
      "title":"SUPER STAR",
      "price":"Rs 96,999/s",
    }
    ,
    {
      "img":"assesst/images/bike10.jpg",
      "title":"UNI 125",
      "price":"Rs 86,999/s",
    }
    ,
    {
      "img":"assesst/images/nkbike.jpg",
      "title":"NK 150CC",
      "price":"Rs 75,999/s",
    }
    ,
    {
      "img":"assesst/images/bike12.png",
      "title":"UNIQUE ",
      "price":"Rs 86,999/s",
    }
      
    ]
      
  for(var i=0; i<data.length;i++){
    document.getElementById("bike").innerHTML +=`
    <div class="col-lg-3 col-md-4 col-sm-12 m-auto cid ">
    <div class="card shadow mt-4">
    <img src="${data[i].img}" class="card-img-top"  alt="...">
       <div class="card-body">
         <div class="col-lg-6"></div>
      </div>
   <div class="row">
    <h2 class="card-title">${data[i].title}</h2>
    <div class="col-lg-10"><i><b id="price">${data[i].price}</b></i></div>
    <div class="col-lg-2"><i class="fa-solid fa-cart-shopping cart"></i></div>
   </div>
   <a href="cardnext.html" class="btn btn-primary mt-3">MORE DETAILS!!</a>
    </div>
  </div>
  </div>
  </div>     
    `}