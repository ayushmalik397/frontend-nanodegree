//array of my favourite restraunts in Chandigarh
var places =[
  {
    name : "Whistling Duck, Chandigarh" ,
    lat : 30.7286,
    lng : 76.8032,
    selected: false,
    show: true,
    id : "524997bd11d27ebae92b6a60"
  },
  {
    name : "Nandos, Elante Mall, Chandigarh" ,
    lat : 30.7056,
    lng : 76.8013,
    selected: false,
    show: true,
    id : "517b9196498ef2a2f53fdf90"
  },
  {
    name : "Girl In the Cafe, Chandigarh" ,
    lat : 30.7379,
    lng : 76.7842,
    selected: false,
    show: true,
    id : "4d822ef6baf9a35d1fc8a421"
  },
  {
    name : "The Willow Cafe, Chandigarh",
    lat : 30.7548,
    lng : 76.7876,
    selected: false,
    show : true,
    id : "4c09187a7e3fc928b451f182"
  },
  {
    name : "JW Marriott Hotel, Chandigarh" ,
    lat : 30.7267,
    lng : 76.7672,
    selected: false,
    show : true,
    id : "4dff0926d4c00c69c14b292a"
  }
];
//model function
var model = function(){
  var self = this;
  self.errorinfo = ko.observable();
  self.searchres = ko.observable();
  self.markers = [];
for(var i=0;i<places.length;i++){
    var marker = new google.maps.Marker({
    position: {lat: places[i].lat, lng: places[i].lng},
    map: map,
    title: places[i].name,
    resid: places[i].id,
    select: ko.observable(places.selected),
    show: ko.observable(places[i].show),
    animation: google.maps.Animation.DROP
    });
    self.markers.push(marker);
    self.markers[self.markers.length - 1].setVisible(self.markers[self.markers.length - 1].show());
  }
//ajax url request to get the info of the restraunts
self.addInfo = function(marker){
  $.ajax({
   type: "GET",
	 url: "https://api.foursquare.com/v2/venues/" + marker.resid + "?client_id=FPKPIRWUTRMS3INSBSOBMNJFYMTTCFJ5EAINJXXH2N4TPCBA&client_secret=LGGXVF4QOW5ITJNRH0WTQOMSDCULIQ5OHFKMOUOIBLUXX2V1&v=20161016",
   dataType: "json",
	  success: function (data) {
	  var ans = data.response.venue;
	  marker.rating = ans.hasOwnProperty('rating')?ans.rating:"";
	 },
	  error: function (e) {
	  self.errorinfo("Data unavailable. Please try again later.");
  }
});
};

//addListener event to select the marker
for(var p=0;p<self.markers.length;p++){
  (function(marker){
    self.addInfo(marker);
    marker.addListener('click', function() {
    self.selectmark(marker);
    });
  })(self.markers[p]);
}

//search function to search for a restraunt
self.search = function(){
  markerInfo.close();
  var text = self.searchres();
  if (text.length === 0){
    self.showallres(true);
  }else {
    for(var i=0 ;i<self.markers.length; i++){
      if(self.markers[i].title.toLowerCase().indexOf(text.toLowerCase()) > -1){
        self.markers[i].setVisible(true);
        self.markers[i].show(true);
      } else {
        self.markers[i].setVisible(false);
        self.markers[i].show(false);
      }
    }
  }
  markerInfo.close();
};

//function to show the searched restraunt
self.showallres = function(show){
  for(var t=0; t<self.markers.length; t++){
    self.markers[t].setVisible(show);
    self.markers[t].show(show);
  }
};

//function to unselect the selected markers
self.unselect = function(){
  for( var k=0;k<self.markers.length;k++){
    self.markers[k].select(false);
  }
};

//function to select the markers
self.selectmark = function(marker) {
	
  self.unselect();
  marker.select(true);
  self.present = marker;
  formatRating = function() {
    if(self.present.rating=="" || self.present.rating== undefined)
    {
      return "Data unavailable";
    }
    else
      {
        return "Ratings: " +self.present.rating;
      }
  }

  //to display the rating of the restraunts
  var resinfo = "Name: " +self.present.title+ "<br>" + formatRating();
  markerInfo.setContent(resinfo);
  markerInfo.open(map, marker);

  //for the bouncing effect of the marker when ckicked
  self.animatemark = function(marker){
  marker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function(){
    marker.setAnimation(null);
  },1400);
  };
  self.animatemark(marker);
};
};
