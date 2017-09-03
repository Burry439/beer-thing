function BeerReviewApp(){

var beers = []
var postBeer = $(".post-beer")
var sort = $("#sort")
var isA = false;


function addBeer(name, category, rate) {
    var beer = {
        'name': name,
        'type': category,
        'rate': rate
    }

    beers.push(beer)
}


function updateBeers() {
    $(".beers-list").empty();
    for (i = 0; i < beers.length; i++) {
        $(".beers-list").append('<li>'+ '<button type="button" class="edit">Edit</button>' +  '<input class="change">' + "Name: " + beers[i].name + " Category: " + beers[i].type + ", stars: " + beers[i].rate +   '</input>' + " </li>")
    }
$(".edit").click(edit)
}


function edit(){
var edit = $(".change").val()
var list_new = $(".beers-list").html();
$(".beers-list").empty().append('<li>'+ '<button type="button" class="edit">Edit</button>' +  '<input class="change">' + "Name: " + edit + " Category: , stars: " + '</input>' + " </li>"); 
}
   
function sortBeer() {
    
        
        isA = !isA;
        beers.sort(function compare(a, b) {
    
            if (a.rate < b.rate) {
                return isA ? -1 : 1
            } else if (a.rate > b.rate) {
                return isA ? 1 : -1;
            } else {
                return 0;
            }
        })
        updateBeers()
    }

  return{
    addBeer : addBeer,
    updateBeers : updateBeers,
    edit : edit,
    sortBeer : sortBeer
  }
    

}
//click handelers

var app = BeerReviewApp();


$('#sort').click( app.sortBeer)



   $(".post-beer").click(function () {
    var beerN = $("#name").val()
    var beerT = $("#cat").val()
    var rate = $("#rate").val()
    if(beerN == "" || (beerT == "") || rate == "Rate"){
        alert("Pleas fill out")
    } else {
    app.addBeer(beerN, beerT, rate)
    app.updateBeers()
    $("#name").val("") 
    $("#cat").val("")
    }
})