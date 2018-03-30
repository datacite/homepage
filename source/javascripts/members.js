var xmlhttp = new XMLHttpRequest();
var url = "https://app.datacite.org/members";

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

	for (var i in response.data) {
    // don't show DataCite providers
    if (response.data[i].attributes['logo-url'] == null || ["DATACITE", "DEMO", "SML"].includes(response.data[i].id.toUpperCase())) {
      continue;
    }

		if (response.data[i].attributes.title == null){
			title = '-';
		}
		else {
			title = response.data[i].attributes.title;
		}
		if (response.data[i].attributes.description == null){
			description = 'Description not available';
		}
		else {
			description = response.data[i].attributes.description;
		}
    if (response.data[i].attributes.website == null){
			website = 'website not available';
		}
		else {
			website = '<a href="' + response.data[i].attributes.website + '">' + response.data[i].attributes.website + '</a>';
		}
		if (response.data[i].attributes.email == null){
			email = 'email not available (please contact  <a href=\"mailto:support@datacite.org\">support@datacite.org</a>)';
		}
		else {
			email = response.data[i].attributes.email;
		}
		if (response.data[i].attributes.phone == null){
			phone = 'phone number not available';
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
						+ '<p>Website: '
            + website
						+ '</p>'
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
