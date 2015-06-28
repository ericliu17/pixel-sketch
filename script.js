$(document).ready(function () {

	var cellSize = 5;
	var height = Math.floor(($(window).height() - 1)/(cellSize + 1)) - 35;	//Subtract header
	var width = Math.floor(($(window).width() - 1)/(cellSize + 1));

    function makeGrid(x, y) {
        var cells = "";
    	for (var i = 0; i < x; i++) {
    		cells += "<tr>";
    		for (var j = 0; j < y; j++) {
    			cells += "<td></td>";
    		};
    		cells += "</tr>";
    	};
    	return cells;
    };

    $("table").append(makeGrid(height, width));

    $(window).resize(function() {
    	$("table").empty();
 		$("table").append(makeGrid(height, width));
	});

	$("td").hover(function() {
		$(this).css("background-color", "blue");
	});

	$("button").click(function() {
		location.reload();
	});

});