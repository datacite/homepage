/*global d3 */

// construct query string
var api_url = 'https://api.datacite.org';
var github_url = 'https://github.com/datacite/datacite';
var query_url = encodeURI(api_url + "/milestones");

// load the data from the DataCite API
if (query_url) {
  d3.json(query_url)
    .get(function(error, json) {
      if (error) { return console.warn(error); }

      var currentDate = new Date();
      var formatYear = d3.time.format("%Y");
      var formatMonth = d3.time.format("%m");
      var year = formatYear(currentDate);
      var quarter = Math.ceil(3 / formatMonth(currentDate));

      var open = json.data.filter(function(d) {
        return !d.attributes.closed;
      });

      var roadmap = d3.nest()
        .key(function(d) { return d.attributes.year + ' Q' + d.attributes.quarter; })
        .entries(open);

      var closed = json.data.filter(function(d) {
        return d.attributes.closed;
      });

      var completed = d3.nest()
        .key(function(d) { return d.attributes.year + ' Q' + d.attributes.quarter; })
        .entries(closed);

      roadmapResult(roadmap, "#content", "Roadmap");
      roadmapResult(completed, "#completed", "Completed Milestones");
  });
}

// add open milestones to page
function roadmapResult(data, tag, title) {
  if (typeof data === "undefined" || data.length === 0) {
    d3.select(tag).append("h1")
      .attr("class", "alert alert-info")
      .text("No milestones found.");
    return;
  }

  d3.select(tag).append("h1")
    .text(title);

  for (var i=0; i<data.length; i++) {
    var quarter = data[i];

    d3.select(tag).append("h2")
      .attr("class", "roadmap")
      .text(quarter.key);

    for (var j=0; j<quarter.values.length; j++) {
      var milestone = quarter.values[j]

      if (milestone.attributes.released !== null) {
        d3.select(tag).append("h3")
          .attr("class", "milestone")
          .attr("id", "milestone-" + milestone.id)
          .append("a")
          .attr("href", function() { return encodeURI(github_url + "/milestone/" + milestone.id); })
          .html(milestone.attributes.title + ' <span class="label label-released small">Released ' + formattedDate(milestone.attributes.released.substring(0, 10)) + '</span>');

        d3.select(tag).append("div")
          .html(milestone.attributes.description);
      } else {
        d3.select(tag).append("h3")
          .attr("class", "milestone")
          .attr("id", "milestone-" + milestone.id)
          .append("a")
          .attr("href", function() { return encodeURI(github_url + "/milestone/" + milestone.id); })
          .html(milestone.attributes.title);

        d3.select(tag).append("div")
          .html(milestone.attributes.description);
      }
    }
  }
}
