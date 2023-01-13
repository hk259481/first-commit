var data = [
    
{

    "img":"assesst/images/shoess.jpg",
    "title":"Shoes",
    "price":"Rs 599/s",
    "button":"more detil!!",
},
{

  "img":"assesst/images/shoes.jpg",
  "title":"Sport Shoes",
  "price":"Rs 1299/s",
  "button":"more detil!!",
},
{

  "img":"assesst/images/shoes.1.jpg",
  "title":"Lofer",
  "price":"Rs 999/s",
  "button":"more detil!!",
},
{

  "img":"assesst/images/tea shirt.jpg",
  "title":"Shirt",
  "price":"Rs 799/s",
  "button":"more detil!!",
},
{

  "img":"assesst/images/black shirt.jpg",
  "title":"Tea Shirt",
  "price":"Rs 1299/s",
  "button":"more detil!!",
},
{

  "img":"assesst/images/hoodie for men.jpg",
  "title":"hoodie men",
  "price":"Rs 1399/s",
  "button":"more detil!!",
},
{

  "img":"assesst/images/blue.jpg",
  "title":"sport shoes",
  "price":"Rs 799/s",
  "button":"more detil!!",
},
{

  "img":"assesst/images/white.jpg",
  "title":"sport shoes",
  "price":"Rs 1299/s",
  "button":"more detil!!",
},
{

  "img":"assesst/images/shirt wh.jpg",
  "title":"shirt ",
  "price":"Rs 1399/s",
  "button":"more detil!!",
}
,
{

  "img":"assesst/images/blue shoes.jpg",
  "title":"shoes",
  "price":"Rs 1399/s",
  "button":"more detil!!",
}
,
{

  "img":"assesst/images/whi.jpg",
  "title":"shoes",
  "price":"Rs 1399/s",
  "button":"more detil!!",
}
,
{

  "img":"assesst/images/black.jpg",
  "title":"shoes",
  "price":"Rs 1399/s",
  "button":"more detil!!",
}

]
for(var i=0; i<data.length;i++){
    document.getElementById("card").innerHTML +=`
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