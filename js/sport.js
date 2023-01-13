var data = [
    
    {    
        "img":"assesst/images/sport 12.jpg",
        "title":" NET",
        "price":"Rs 16,99/s",
    },
    {    
      "img":"assesst/images/sport 7.jpg",
      "title":"F.GLOVES",
      "price":"Rs 699/s",
    },
    {    
      "img":"assesst/images/sport 6.jpg",
      "title":"VOLLEY BAL",
      "price":"Rs 1,999/s",
    },
    {
      "img":"assesst/images/sport 2.jpg",
      "title":"BAT  RUN",
      "price":"Rs 7999/s",
      "button":"more detil!!",
    },
    {
      "img":"assesst/images/sport 10.jpg",
      "title":"K.INNER",
      "price":"Rs 12,999/s",
      "button":"more detil!!",
    },
    {
      "img":"assesst/images/sport 11.jpg",
      "title":"HELMET",
      "price":"Rs 13,999/s",
    },
    {
      "img":"assesst/images/sport 9.jpg",
      "title":"SHINE BALL",
      "price":"Rs 79,999/s",
    },
    {
      "img":"assesst/images/sport 4.jpg",
      "title":"BLACK H.B",
      "price":"Rs 12,999/s",
    },
    {
      "img":"assesst/images/sp.jpg",
      "title":"WICKET",
      "price":"Rs 59,999/s",
    }
    ,
    {
      "img":"assesst/images/sport.jpg",
      "title":"B..BALL",
      "price":"Rs 13,999/s",
    }
    ,
    {
      "img":"assesst/images/sport 5.jpg",
      "title":"HOCKEY B.",
      "price":"Rs 16,999/s",
    }
    ,
    {
      "img":"assesst/images/fot.jpg",
      "title":"FOOTBALL ",
      "price":"Rs 1399/s",
    }
      
    ]
      
  for(var i=0; i<data.length;i++){
    document.getElementById("sport").innerHTML +=`
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