//var tableBody = $('#display')

//'/?q=' + queryString + '&fo=json';
//api.openweathermap.org/data/2.5/find?q=London&units=imperial
//api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key}
//function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  //var requestUrl = //'https://api.openweathermap.org/data/2.5/weather?zip=77014
    
  //var dropdown = $('#dropdown-menu');
  //var searchQuery = $('#search-query');
  //var submit = $('#submit-btn');
  //var displaySearch = $('#library-search-term');
 var submit = $('#submit')
 var submit1 = $('#submit')
var resultType=$('#zip')
var displaySearch=$('#results1')
 console.log(submit);
  console.log(resultType);
  //$('#myModal').modal('backdrop')
  //console.log(searchQuery);
 // $('#myModal') = x
  //console.log(x)
  //x.modal('toggle')
  
//$('#myModal').modal('toggle')
var loco1={
  zip: [], 
  temp:[],
  humidity:[],
  icon:[],
  windspeed:[],
  description:[],
  location:[]

   
}
var loco2={
  zip: [], 
  temp:[],
  humidity:[],
  icon:[],
  windspeed:[],
  description:[],
  location:[]

   
}

  
  var getLocSearch = function(zipD) {
    var locApiUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipD +'&units=imperial&main&appid=779b8c517308874db3a1e3d4a5a161bb'
   // 'api.openweathermap.org/data/2.5/forecast?zip='+zipD+'&units=imperial&main&appid=779b8c517308874db3a1e3d4a5a161bb'

    fetch(locApiUrl)
          .then(function(response) {
              if (response.ok) {
                  response.json().then(function(data) {
                      displayResults(data, zipD);
                  });
              } else {
                  alert('Error: ' + response.statusText);
              }
          })
          .catch(function(error) {
              alert("Can't connect to weather");
              console.log(error);
          });
  };
  var displayResults = function(data, main) {
      if (data.length === 0) {
          displaySearch.textContent = 'No Data Found...';
          return;
      } else
        console.log(main)
        console.log(data)

        loco1.zip.push(main)
        var allTypes = (data.main.temp)
        
        loco1.temp.push(allTypes)
        
        console.log(loco1)
        

        var allTypes1=(data.name)
        
        loco1.location.push(allTypes1)


        var allTypes2=(data.weather[0].description)
        
        loco1.description.push(allTypes2)

        var allTypes3=(data.weather[0].icon + ".png")

       

        

        console.log(allTypes3)

        var allTypes4=(data.weather[0].main)

        

        var allTypes5=(data.wind.speed)

        

        loco1.windspeed.push(allTypes5)

        var allTypes6=(data.main.humidity)

        loco1.humidity.push(allTypes6)
        localStorage.setItem('loc1',JSON.stringify(loco1))
        

  var futureInfo = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        console.log(allTypes2)
        console.log(allTypes)
        console.log(allTypes1)
        loco1.icon.push(futureInfo)
        $('#location').append(allTypes1)
        $('#disTemp').append( allTypes +"&#176;")
        $('#clouds2').append(allTypes2)
       
        $('#clouds').append(allTypes4)
        $('#windspeed').append(allTypes5)
        $('#humidity').append(allTypes6)
        
        $('#wicon').attr('src', futureInfo);
      } 
     submit.on('click', function(event) {
      event.preventDefault();
      var zipD = $(resultType).val();
      getLocSearch(zipD)
      
  })// i tried :/ 
  
  
  
  // var getLocSearch1 = function(zipD1) {
  //   var locApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?zip=' + zipD1 +'&units=imperial&main&appid=779b8c517308874db3a1e3d4a5a161bb'
  //  // 'api.openweathermap.org/data/2.5/forecast?zip='+zipD+'&units=imperial&main&appid=779b8c517308874db3a1e3d4a5a161bb'

  //   fetch(locApiUrl)
  //         .then(function(response) {
  //             if (response.ok) {
  //                 response.json().then(function(data) {
  //                     displayResults(data, zipD1);
  //                 });
  //             } else {
  //                 alert('Error: ' + response.statusText);
  //             }
  //         })
  //         .catch(function(error) {
  //             alert("Can't connect to weather");
  //             console.log(error);
  //         });
  // };
  // var displayResults = function(data, main) {
  //     if (data.length === 0) {
  //         displaySearch.textContent = 'No Data Found...';
  //         return;
  //     } else
  //       console.log(main)
  //       console.log(data)

  //       loco2.zip.push(main)
  //       var allTypes = (data.main.temp)
        
  //       loco2.temp.push(allTypes)
        
  //       console.log(loco1)
        

  //       var allTypes1=(data.name)
        
  //       loco2.location.push(allTypes1)


  //       var allTypes2=(data.weather[0].description)
        
  //       loco2.description.push(allTypes2)

  //       var allTypes3=(data.weather[0].icon + ".png")

       

        

  //       console.log(allTypes3)

  //       var allTypes4=(data.weather[0].main)

        

  //       var allTypes5=(data.wind.speed)

        

  //       loco1.windspeed.push(allTypes5)

  //       var allTypes6=(data.main.humidity)

  //       loco1.humidity.push(allTypes6)
  //       localStorage.setItem('loc2',JSON.stringify(loco2))
        

  // var futureInfo = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
  //       console.log(allTypes2)
  //       console.log(allTypes)
  //       console.log(allTypes1)
  //       loco1.icon.push(futureInfo)
  //       $('#location').append(allTypes1)
  //       $('#disTemp').append( allTypes +"&#176;")
  //       $('#clouds2').append(allTypes2)
       
  //       $('#clouds').append(allTypes4)
  //       $('#windspeed').append(allTypes5)
  //       $('#humidity').append(allTypes6)
        
  //       $('#wicon').attr('src', futureInfo);
  //     } 
  //    submit1.on('click', function(event) {
  //     event.preventDefault();
  //     var zipD1 = $(resultType).val();
  //     getLocSearch(zipD1)
      
  // })// i tried :/ 
 
  /*
$.ajax({
  url: 'https://api.coingecko.com/api/v3/coins' ,
  method: 'GET',
}).then(function (response) {
  console.log('ALL COINS \n-------------');
  console.log(response);
 // console.log(userChoice)
 coins.push(response)
});

console.log(coins)
*/

  function appender(allTypes){
    for (var i = 0; i < allTypes.length; i++) {
      console.log(allTypes[i].temp);
      console.log(allTypes[i].humidity);
    }
  }





    //$('#results1').append($('<p>' ,allTypes ,'</p>'))  ;
          // loop through the data and display the results;