var topics = ["car","boat","train","plane","rocket"];
var i = 0


function displayGIFs (){
    $("#showGIFs").empty();
	var tags = this.id
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=c191475126bb43beb53cff20704babd2&q="+tags+"&limit=10";

	// for (var i = 0; i < 10; i++) {
		 $.ajax({
	      url: queryURL,
	      method: "GET"
	    }).done(function(response) {
	    	console.log (response.data);

	    	for (var i = 0; i < 10; i++){
		        $("#showGIFs").append("<img class='resultGIFs' src='"+response.data[i].images.fixed_height_still.url+"' data-still='"+response.data[i].images.fixed_height_still.url+"' data-animate='"+response.data[i].images.fixed_height.url+"' data-state='still'>");
		        $("#showGIFs").append("Rating:"+response.data[i].rating);
		    };
		    $(".resultGIFs").on("click", function(){
		    	var state = $(this).attr("data-state");
		    	console.log(state);
				if(state === "still"){
		          $(this).attr("src", $(this).attr("data-animate"));
		          $(this).attr("data-state", "animate");
	        	}
	        	else{
		          $(this).attr("src", $(this).attr("data-still"));
		          $(this).attr("data-state", "still");
        		};
		    });
	    });
	// };
};

function renderButtons() {

	$("#topics-view").empty();

	for (var i = 0; i < topics.length; i++){
    	$("#topics-view").append("<button class='topicButton' id='"+topics[i]+"'>"+topics[i]+"</button>");
    }
    $(".topicButton").click(displayGIFs);
};

$("#add-topics").on("click", function(event) {
	event.preventDefault();

	if ($("#topics-input").val() != 0){
		var j = topics.length;
		topics[j] = $("#topics-input").val();

		renderButtons();
		$("#topics-input").val("");
	};

});

renderButtons ();

