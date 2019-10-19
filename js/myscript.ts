//create base class called places and 2 child class one for restaurant and one for events
//each class has display function
class Places { 
    place:string;
    name:string;
    city:string; 
    zip:string;   
    address:string;  
    img:string;
    on:string;
    constructor(place, name, city, zip, address, img, on) { 
        this.place = place;
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
        this.on = on;
   }

   displayPlaces() { 
       return `<div class="card col-lg-3 col-md-6 col-sm-6">
                <img class="card-img-top" height="250" src="${this.img}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                        <ul class="card-text list-group list-group-flush text-success">
                        <li class="list-group-item">${this.zip} ${this.city}</li>
                        <li class="list-group-item"> ${this.address}</li>`;         
   }
   /* Closure tags in order to make possible to nest other properties between those functions*/

   displayPlacesFooter(){    
       return `</ul>
                </div>
            <div class="card-footer">
            <p class="w-100 text-right">on ${this.on}</p>
          </div> 
      </div>`;
   }
}
class Restaurant extends Places { 
    phone:string; 
    type:string;
    web:string;

   constructor(place, name, city, zip, address, img, on, web, phone, type) {
       super(place, name, city, zip, address, img, on); 
       this.web = web;
       this.phone = phone;
       this.type = type;
   }

   displayRestaurant() { 
       return `${super.displayPlaces()}
               <li class="list-group-item"> ${this.type} Restaurant</li>
               <li class="list-group-item"><a class="text-info mytext" href="${this.web}">Website </a>| ${this.phone}</li>            
               ${super.displayPlacesFooter()}`; 
    }
}

class Events extends Places { 
    date:string; 
    time:string;
    price:string;

   constructor(place, name, city, zip, address, img, on, date, time, price) {
       super(place, name, city, zip, address, img, on); 
       this.date = date;
       this.time = time;
       this.price = price;
   }

   displayEvents() { 
       return `${super.displayPlaces()}
               <li class="list-group-item">Price: ${this.price}</li>
               <li class="list-group-item"> ${this.date} -  ${this.time}</li>
               ${super.displayPlacesFooter()}`; 
   }
}
//my array elements or cards data
var x1 = new Places("place", "Seitan Limania Beach", "Crete", "9040 ", "Seitan Limania Beach", "img/img2.JPG", `16.09.2018 10:30` );
var x2 = new Restaurant("restaurant", "Regina Margherita", "Vienna", "1010 ", "Wallnerstraße 4", "img/res1.JPG", `08.05.2017 18:25`,"https://www.barbaro.at/reginamargherita", "+43 01 5330812", "Italian");
var x3 = new Events("event", "Swan Lake", "Vienna", "1010 ", "Stephansplatz 1", "img/ev1.JPG", `15.03.2021 20:45`, " 15.03.2021 ", "20:45", "99 €");
var x4 = new Places("place", "Citadel of Aleppo", "Aleppo", "2100 ", "Old City", "img/img1.JPG", `16.09.2008 11:30` );
var x5 = new Places("place", "Balos Lagoon", "Crete", "9010 ", "Balos Beach", "img/img3.JPG", `19.09.2018 12:32`);
var x6 = new Places("place", "St. Charles Church", "Vienna", "1010 ", "Karlsplatz 1", "img/img5.JPG", `11.11.2015 22:32`);
var x7 = new Restaurant("restaurant", "Jasmin Alsham", "Vienna", "1180 ", "Heiligenstäderstraße 4", "img/res3.JPG", `08.05.2015 18:25`,"https://www.facebook.com/restaurant.jasmin.al.sham/", "+43 01 5330812", "Syrian");
var x8 = new Places("place", "Santa Ponsa", "Palme de Mallorca", "9234 ", "playa de Maro", "img/img4.JPG", `23.07.2019 10:32`);
var x9 = new Events("event", "The Chainsmokers & Coldplay", "Vienna", "1040 ", "kettenbrückengasse 6", "img/ev2.JPG", `20.12.2019 21:15`, " 20.12.2019 ", "21:15", "300 €" );
var x10 = new Restaurant("restaurant", "Akakiko", "Vienna", "1060 ", "Mariahilferstraße 55", "img/res2.JPG", `08.02.2018 18:25`,"https://akakiko.at/lokale/gerngross", "+43 01 5330812", "Japanes");
var x11 = new Places("place", "Cathedral of Saint Elijah", "Aleppo", "2101", "Old City", "img/img7.JPG", `16.09.2010 10:30` );
var x12 = new Restaurant("restaurant", "Klein Steiermark", "Vienna", "1030 ", "Arsenal 1", "img/res4.JPG", `08.05.2016 18:25`,"htps://www.kleinsteiermark.wien/", "+43 01 5330812", "Austrian");
var x13 = new Events("event", "Life Ball", "Vienna", "1010 ", "Rathaus", "img/ev5.JPG", `15.03.2018 20:45`, " 15.03.2018 ", "20:45", "75 €");
var x14= new Events("event", "Adele", "London", "1022 ", "Arsenal 13", "img/ev3.JPG", `13.07.2013 22:30`,"13.07.2013", "22:30", "250 €");
var x15 = new Events("event", "Sia & Rihanna", "Vienna", "1010 ", "Belvedere 89", "img/ev4.JPG", `19.01.2019 21:45`,"19.01.2019", "21:45", "2 €");
var x16 = new Places("place", "Sultan Ahmet Camii", "Istanbul", "34122 ", "Atmeydanı 7", "img/img6.JPG", `23.07.2015 22:32`);

//push to an Array
var myarray =[x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16];

var div = document.getElementById('mydiv');

//function throuth the array element to display each card according to the place
function display(){

      myarray.forEach( function(x) {

              if(x.place == "place"){

                  div.innerHTML += x.displayPlaces()+x.displayPlacesFooter();

              }else if(x.place  == "restaurant"){

                  div.innerHTML += x.displayRestaurant();
              }else if(x.place  == "event"){

                  div.innerHTML += x.displayEvents();            }
      });
  }
  //function to sort asscending and desscending according to the date 
function resort(a, b) {

      let string1 = a.on.split('.');
      let string2 = b.on.split('.');
        // rewrite the date
      let datum1 =string1[1]+"."+string1[0]+"."+string1[2];
      let datum2 =string2[1]+"."+string2[0]+"."+string2[2];
       
       // store the string in date type again
      let ae = new Date(datum1);
      let be = new Date(datum2);

      //compare sort_ae_before_be  else if(sort_ae_after_be)
      return ae < be ? -1 : be > ae ? 1 : 0;
}


var myfile = document.URL.substring(document.URL.lastIndexOf('/')+1);


          if(myfile == "index.html"){

             display();

          }else if(myfile == "index-asc.html"){

             myarray.sort(resort);
             display();

          }else if(myfile == "index-desc.html"){

             myarray.sort(resort);
             myarray.reverse();
             display();

          }



