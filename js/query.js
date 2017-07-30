
//autocomplete
$(function () {
    var availableTags = [
        "Bulawayo24",
        "Chronicle",
        "Newsday",
        "H-Metro",
        "iHarare", 
        "Newsday",
        "New Zimbabwe",
        "Radio Dialogue",
        "Southern Eye",
        "Sunday Mail",
        "Sunday News",
        "The Financial Gazette",
        "The Herald",
        "The Manica Post",
        "The Patriot",
        "The Standard",
        "The Zimbabwean",
        "The Zimbabwe Mail",
        "Umthunywa",
        "ZBC",
        "Zimbo Jam",
        "Zim Eye"
    ];
    $("#search_input").autocomplete({
        source: availableTags
    });
});

/*****

SORT LIST ALPHABETICALLY
******/

var items = $('.lightbox a').get();
items.sort(function(a,b){
  var keyA = $(a).text();
  var keyB = $(b).text();

  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});
var ul = $('.lightbox');
$.each(items, function(i, li){
  ul.append(li);
});




