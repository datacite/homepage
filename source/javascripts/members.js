var xmlhttp = new XMLHttpRequest();
var url = "https://profiles.labs.datacite.org/api/members";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        formatMembers(xmlhttp.responseText);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function formatMembers(response) {
	var response = JSON.parse(response);
	var div = document.getElementById('memberslist');

	// response.meta.total;
	
	for (var i in response.data){
		if (i/2 == 0){ //new row
			div.innerHTML += '<div class=\"row text-center\">'
		}
		
		div.innerHTML += '<div class=\"col-md-6 col-sm-12 svc-item\">' 
						+ '<div class=\"thumbnail\">'
						+ '<div class=\"caption\" data-toggle=\"collapse\" data-target=\"#' 
						+ response.data[i].id 
						+ '\">'
						+ '<img src=\"' 
						+ response.data[i].attributes['logo-url']
						+ '\" /><br /></div>'
						+ '<div id=\"' 
						+  response.data[i].id 
						+ '\" class=\"collapse stakeholderdescription\">'
						//+ '<h2>' 
						//+ response.data[i].id 
						//+ '</h2>' 
						+ '<h3>' 
						+ response.data[i].attributes.title 
						+ '</h3>'
						+ '<p>' 
						+ response.data[i].attributes.description 
						+ '</p>' 
						+ '<p>Country: ' 
						+ response.data[i].attributes.country 
						+ '</p>' 
						+ '<p>Website: <a href=\"' 
						+ response.data[i].attributes.website 
						+ '\">' + response.data[i].attributes.website 
						+ '</a></p>' 
						+ '<p>E-mail: ' 
						+ response.data[i].attributes.email 
						+ '</p>' 
						+ '<p>Phone: ' 
						+ response.data[i].attributes.phone 
						+ '</p>' 
						+ '</div></div></div>'
		
		if (i/2 != 0){ //end row
			div.innerHTML += '</div>'
		}
	}
}
