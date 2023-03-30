$(document).ready(function(){


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
    var text = "Dan died on " + date + " on Run #" + runNumber + " on Floor #" + floorNumber + " because of the Piece of Piece " + deathCause + ". Dan was using the " + skin + " Skin and the run took" + runLength + "before Dan met his Demise";
    
    // Append the text to the 'attempt' div
    $("#attempt").append("<p>" + text + "</p>");

    // Extract image URLs
    var skinImage = randomRow[headers.indexOf("Skin Image")];
    var deathImage = randomRow[headers.indexOf("Cause of Run End Image")];
    
    // Append images to the 'images' div
    $("#images").append("<img src='" + skinImage + "' alt='Skin Image'>");
    $("#images").append("<img src='" + deathImage + "' alt='Death Image'>");
 });
});