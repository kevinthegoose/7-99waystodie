$(document).ready(function() {
  
  var csvUrl = "https://raw.githubusercontent.com/kevinthegoose/7-99waystodie/main/spelunkycsv.csv"

  $.get(csvUrl, function(csvString) {
    var rows = Papa.parse(csvString).data; // Using PapaParse library to parse CSV data
    var headers = rows[0]; // Extract the headers from the first row
    var randomIndex = Math.floor(Math.random() * (rows.length - 1)) + 1; // Pick a random row, excluding the first (header) row
    var randomRow = rows[randomIndex];
    var date = randomRow[headers.indexOf("Date")];
    var runNumber = randomRow[headers.indexOf("Run #")];
    var floorNumber = randomRow[headers.indexOf("Floor")];
    var deathCause = randomRow[headers.indexOf("Cause of Run End")];
    var skin = randomRow[headers.indexOf("Skin")];
    var runLength = randomRow[headers.indexOf("Run Length")];
    
    // Create the text to display
    var text = "Dan died on <span class='highlight'>" + date + "</span> on Run # <span class='highlight'>" + runNumber + "</span> on Floor # <span class='highlight'>" + floorNumber + "</span> because of the Piece of Piece <span class='highlight'>" + deathCause + "</span>. Dan was using the <span class='highlight'>" + skin + "</span> Skin and the run took <span class='highlight'>" + runLength + "</span> before Dan met his final demise";
    
    // Append the text to the 'attempt' div
    $("#attempt").append("<p>" + text + "</p>") .hide().delay(1000).fadeIn();;

    // Extract image URLs
    var skinImage = randomRow[headers.indexOf("Skin Image")];
    var deathImage = randomRow[headers.indexOf("Cause of Run End Image")];
    
    // Append images to the 'images' div with fade in effect and 2 seconds delay
    $("#images").append("<img src='" + skinImage + "' alt='Skin Image'>").hide().delay(1500).fadeIn();
    $("#images").append("<img src='" + deathImage + "' alt='Death Image'>").hide().delay(2000).fadeIn();
    
  });
  
});
