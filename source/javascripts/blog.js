var xmlhttp = new XMLHttpRequest();
var url = "http://api.labs.datacite.org/pages?tag=featured";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        formatBlog(xmlhttp.responseText);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function formatBlog(response) {
	var response = JSON.parse(response);
	var div = document.getElementById('bloglist');
	
	for (var i in response.data){
		if (i == 0) {
			div.innerHTML += '<div class=\"row text-center\">'
		}
		div.innerHTML += '<div class=\"col-md-4 col-sm-4 svc-item\">' 
						+ '<div class=\"thumbnail\">'
						+ '<img src=\"' 
						+ response.data[i].attributes['image-url']
						+ '\" /><br /></div>'
						+ '<h4>' 
						+ response.data[i].attributes.title 
						+ '</h4>'
						+ '<p>' 
						+ response.data[i].attributes.description 
						+ '</p>' 
						+ '<p class=\"read-more\">'
						+ '<a href=\"' 
			 			+ response.data[i].id 
						+ '\">Read more</a></p>'
						+ '</div></div>'
		if (i == 2) {
			div.innerHTML += '</div>'
			break;
		}
	}
}