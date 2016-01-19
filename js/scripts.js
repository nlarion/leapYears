var leapYear = function(year){
  //debugger;
  //return ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0));
  //console.log(parseInt(year).length);
  if(year.length ===0 || isNaN(year)){
    return false;
  } else {
    year = parseInt(year); 
    return ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0));
  }

};

$(document).ready(function() {
  $("form").submit(function(event) {
    var year = $("input#year").val();
    var result = leapYear(year);

    $(".year").text(year);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});
