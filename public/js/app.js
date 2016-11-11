
var template = '<option value="{{nombre}}" >{{especies}}</option>';

$(document).ready(function(){
  
var nombreEspecie = function(response){
    var especie = "";
    var string = "";
    $.each(response.results , function(i,especies){
        for( var i=0 , l=especies.people.length; i<l ; i++){
            string+= especies.people[i].substr(-3);
        }
        especie += template
            .replace("{{nombre}}",string)
            .replace("{{especies}}",especies.name);
        });
        $("#selector").append(especie);
    }
    $.getJSON("http://swapi.co/api/species/",nombreEspecie);
});


/* Clase
$(document).ready(function(){
    var formatResponse = function(response){
         $("#total").text(response.results.length);
        var personajes ="";
        $.each(response.results , function(i,personaje){
            personajes+= template
            .replace("{{name}}",personaje.name)
            .replace("{{url}}",personaje.url);


        });
        $("#people").html(personajes);
        $("#next").attr("data-url",response.next);
        $("#previous").attr("data-url",response.previous);
        if(!response.next){
            $("#next").fadeOut();
        }else if(response.previous ){
            $("#previous").fadeIn();
        }else{
            $("#previous").fadeOut();
        }
    };

    $.getJSON("http://swapi.co/api/people/", formatResponse)
    ;

    $("#next").click(function(event){
        event.preventDefault();
        var url =$(this).attr("data-url");
        $.getJSON(url, formatResponse);
    });

    $("#previous").click(function(event){
        event.preventDefault();
        var url =$(this).attr("data-url");
        $.getJSON(url, formatResponse);
    });

    $("#people").on("click","about",function(event){
    // $("document").on("click","about",function(event){
        event.preventDefault();
        alert("hola");
    });
});
*/

