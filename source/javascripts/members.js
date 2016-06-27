var xmlhttp = new XMLHttpRequest();
var url = "https://api.datacite.org/members";

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
		if (response.data[i].attributes.title == null){
			title = '-';
		}
		else {
			title = response.data[i].attributes.title;
		}
		if (response.data[i].attributes.description == null){
			description = 'The description of this member is not available';
		}
		else {
			description = response.data[i].attributes.description;
		}	
		if (response.data[i].attributes.email == null){
			email = 'Email not available (please contact  <a href=\"mailto:support@datacite.org\">support@datacite.org</a>)';
		}
		else {
			email = response.data[i].attributes.email;
		}
		if (response.data[i].attributes.phone == null){
			phone = 'Phone number not available';
		}
		else {
			phone = response.data[i].attributes.phone;
		}
		
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
						+ title
						+ '</h3>'
						+ '<p>'
						+ description
						+ '</p>'
						+ '<p>Country: '
						+ response.data[i].attributes.country
						+ '</p>'
						+ '<p>Website: <a href=\"'
						+ response.data[i].attributes.website
						+ '\">' + response.data[i].attributes.website
						+ '</a></p>'
						+ '<p>E-mail: '
						+ email
						+ '</p>'
						+ '<p>Phone: '
						+ phone
						+ '</p>'
						+ '</div></div></div>'

		if (i/2 != 0){ //end row
			div.innerHTML += '</div>'
		}
	}
}
