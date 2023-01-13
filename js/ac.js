var data = [
    
  {    
      "img":"assesst/images/acccc.jpg",
      "title":"AC",
      "price":"Rs 59,999/s",
  },
  {    
    "img":"assesst/images/acc.png",
    "title":"AC",
    "price":"Rs 12,999/s",
  },
  {    
    "img":"assesst/images/acxcc.jpg",
    "title":"AC",
    "price":"Rs 69,999/s",
  },
  {
    "img":"assesst/images/gree ac w.png",
    "title":"GREE AC",
    "price":"Rs 79,999/s",
    "button":"more detil!!",
  },
  {
    "img":"assesst/images/haier ac.jpg",
    "title":"HAIER AC",
    "price":"Rs 12,999/s",
    "button":"more detil!!",
  },
  {
    "img":"assesst/images/gree ac.png",
    "title":"GREE AC",
    "price":"Rs 13,999/s",
  },
  {
    "img":"assesst/images/kenwood 1.webp",
    "title":"KENWOOD  ",
    "price":"Rs 79,999/s",
  },
  {
    "img":"assesst/images/pel2.webp",
    "title":"PEL AC",
    "price":"Rs 12,999/s",
  },
  {
    "img":"assesst/images/kenwood 4.webp",
    "title":"DAWLANCE",
    "price":"Rs 59,999/s",
  }
  ,
  {
    "img":"assesst/images/image (7).png",
    "title":"PEL",
    "price":"Rs 13,999/s",
  }
  ,
  {
    "img":"assesst/images/haier 1.jpg",
    "title":"KENWOOD",
    "price":"Rs 16,999/s",
  }
  ,
  {
    "img":"assesst/images/image 1.png",
    "title":"HAIER AC",
    "price":"Rs 1399/s",
  }
    
  ]
    
for(var i=0; i<data.length;i++){
  document.getElementById("card AC").innerHTML +=`
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