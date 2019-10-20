var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//create base class called places and 2 child class one for restaurant and one for events
//each class has display function
var Places = /** @class */ (function () {
    function Places(place, name, city, zip, address, img, on) {
        this.place = place;
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
        this.on = on;
    }
    Places.prototype.displayPlaces = function () {
        return "<div class=\"card col-lg-3 col-md-6 col-sm-6\">\n                <img class=\"card-img-top\" height=\"250\" src=\"" + this.img + "\" alt=\"\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.name + "</h5>\n                        <ul class=\"card-text list-group list-group-flush text-success\">\n                        <li class=\"list-group-item\">" + this.zip + " " + this.city + "</li>\n                        <li class=\"list-group-item\"> " + this.address + "</li>";
    };
    //footer for all cards 
    Places.prototype.displayPlacesFooter = function () {
        return "</ul>\n                </div>\n            <div class=\"card-footer\">\n            <p class=\"w-100 text-right\">on " + this.on + "</p>\n          </div> \n      </div>";
    };
    return Places;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(place, name, city, zip, address, img, on, web, phone, type) {
        var _this = _super.call(this, place, name, city, zip, address, img, on) || this;
        _this.web = web;
        _this.phone = phone;
        _this.type = type;
        return _this;
    }
    Restaurant.prototype.displayRestaurant = function () {
        return _super.prototype.displayPlaces.call(this) + "\n               <li class=\"list-group-item\"> " + this.type + " Restaurant</li>\n               <li class=\"list-group-item\"><a class=\"text-info mytext\" href=\"" + this.web + "\">Website </a>| " + this.phone + "</li>            \n               " + _super.prototype.displayPlacesFooter.call(this);
    };
    return Restaurant;
}(Places));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(place, name, city, zip, address, img, on, date, time, price) {
        var _this = _super.call(this, place, name, city, zip, address, img, on) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    Events.prototype.displayEvents = function () {
        return _super.prototype.displayPlaces.call(this) + "\n               <li class=\"list-group-item\">Price: " + this.price + "</li>\n               <li class=\"list-group-item\"> " + this.date + " -  " + this.time + "</li>\n               " + _super.prototype.displayPlacesFooter.call(this);
    };
    return Events;
}(Places));
//my array elements or cards data
var x1 = new Places("place", "Seitan Limania Beach", "Crete", "9040 ", "Seitan Limania Beach", "img/img2.JPG", "16.09.2018 10:30");
var x2 = new Restaurant("restaurant", "Regina Margherita", "Vienna", "1010 ", "Wallnerstraße 4", "img/res1.JPG", "08.05.2017 18:25", "https://www.barbaro.at/reginamargherita", "+43 01 5330812", "Italian");
var x3 = new Events("event", "Swan Lake", "Vienna", "1010 ", "Stephansplatz 1", "img/ev1.JPG", "15.03.2021 20:45", " 15.03.2021 ", "20:45", "99 €");
var x4 = new Places("place", "Citadel of Aleppo", "Aleppo", "2100 ", "Old City", "img/img1.JPG", "16.09.2008 11:30");
var x5 = new Places("place", "Balos Lagoon", "Crete", "9010 ", "Balos Beach", "img/img3.JPG", "19.09.2018 12:32");
var x6 = new Places("place", "St. Charles Church", "Vienna", "1010 ", "Karlsplatz 1", "img/img5.JPG", "11.11.2015 22:32");
var x7 = new Restaurant("restaurant", "Jasmin Alsham", "Vienna", "1180 ", "Heiligenstäderstraße 4", "img/res3.JPG", "08.05.2015 18:25", "https://www.facebook.com/restaurant.jasmin.al.sham/", "+43 01 5330812", "Syrian");
var x8 = new Places("place", "Santa Ponsa", "Palme de Mallorca", "9234 ", "playa de Maro", "img/img4.JPG", "23.07.2019 10:32");
var x9 = new Events("event", "The Chainsmokers & Coldplay", "Vienna", "1040 ", "kettenbrückengasse 6", "img/ev2.JPG", "20.12.2019 21:15", " 20.12.2019 ", "21:15", "300 €");
var x10 = new Restaurant("restaurant", "Akakiko", "Vienna", "1060 ", "Mariahilferstraße 55", "img/res2.JPG", "08.02.2018 18:25", "https://akakiko.at/lokale/gerngross", "+43 01 5330812", "Japanes");
var x11 = new Places("place", "Cathedral of Saint Elijah", "Aleppo", "2101", "Old City", "img/img7.JPG", "16.09.2010 10:30");
var x12 = new Restaurant("restaurant", "Klein Steiermark", "Vienna", "1030 ", "Arsenal 1", "img/res4.JPG", "08.05.2016 18:25", "htps://www.kleinsteiermark.wien/", "+43 01 5330812", "Austrian");
var x13 = new Events("event", "Life Ball", "Vienna", "1010 ", "Rathaus", "img/ev5.JPG", "15.03.2018 20:45", " 15.03.2018 ", "20:45", "75 €");
var x14 = new Events("event", "Adele", "London", "1022 ", "Arsenal 13", "img/ev3.JPG", "13.07.2013 22:30", "13.07.2013", "22:30", "250 €");
var x15 = new Events("event", "Sia & Rihanna", "Vienna", "1010 ", "Belvedere 89", "img/ev4.JPG", "19.01.2019 21:45", "19.01.2019", "21:45", "2 €");
var x16 = new Places("place", "Sultan Ahmet Camii", "Istanbul", "34122 ", "Atmeydanı 7", "img/img6.JPG", "23.07.2015 22:32");
//push to an Array
var myarray = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16];
var div = document.getElementById('mydiv');
//function throuth the array element to display each card according to the place
function display() {
    myarray.forEach(function (x) {
        if (x.place == "place") {
            div.innerHTML += x.displayPlaces() + x.displayPlacesFooter();
        }
        else if (x.place == "restaurant") {
            div.innerHTML += x.displayRestaurant();
        }
        else if (x.place == "event") {
            div.innerHTML += x.displayEvents();
        }
    });
}
//function to sort asscending and desscending according to the date 
function resort(a, b) {
    var string1 = a.on.split('.');
    var string2 = b.on.split('.');
    // rewrite the date
    var datum1 = string1[1] + "." + string1[0] + "." + string1[2];
    var datum2 = string2[1] + "." + string2[0] + "." + string2[2];
    // store the string in date type again
    var ae = new Date(datum1);
    var be = new Date(datum2);
    //compare sort_ae_before_be  else if(sort_ae_after_be)
    return ae < be ? -1 : be > ae ? 1 : 0;
}
var myfile = document.URL.substring(document.URL.lastIndexOf('/') + 1);
if (myfile == "index.html") {
    display();
}
else if (myfile == "index-asc.html") {
    myarray.sort(resort);
    display();
}
else if (myfile == "index-desc.html") {
    myarray.sort(resort);
    myarray.reverse();
    display();
}
