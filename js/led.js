var data = [
    
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
    {
      "img":"assesst/images/led4.jpg",
      "title":"LED",
      "price":"Rs 12,999/s",
      "button":"more detil!!",
    },
    {
      "img":"assesst/images/led5.jpg",
      "title":"LED",
      "price":"Rs 13,999/s",
      "button":"more detil!!",
    },
    {
      "img":"assesst/images/led6.jpg",
      "title":"LED",
      "price":"Rs 79,999/s",
      "button":"more detil!!",
    },
    {
      "img":"assesst/images/led7.jpg",
      "title":"LED",
      "price":"Rs 12,999/s",
      "button":"more detil!!",
    },
    {
      "img":"assesst/images/led8.jpg",
      "title":"LED",
      "price":"Rs 16,999/s",
      "button":"more detil!!",
    }
    ,
    {
      "img":"assesst/images/led9.jpg",
      "title":"LED",
      "price":"Rs 17,999/s",
      "button":"more detil!!",
    }
    ,
    {
      "img":"assesst/images/led10.jpg",
      "title":"LED",
      "price":"Rs 19,999/s",
      "button":"more detil!!",
    }
    ,
    {
      "img":"assesst/images/led11.jpg",
      "title":"LED",
      "price":"Rs 199,99/s",
      "button":"more detil!!",
    }
    ]
    for(var i=0; i<data.length;i++){
        document.getElementById("LED").innerHTML +=`
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