/*global d3 */

var github_url = 'https://github.com/datacite/datacite';

// construct query string
var api_url = 'https://api.test.datacite.org';
var query = getParameterByName('query');
var category = getParameterByName('category');
var stakeholder = getParameterByName('stakeholder');
var state = getParameterByName('state');
var query_url = encodeURI(api_url + "/user-stories?rows=100");
if (query !== null) { query_url += "&query=" + query; }
if (category !== null) { query_url += "&category=" + category; }
if (stakeholder !== null) { query_url += "&stakeholder=" + stakeholder; }
if (state !== null) { query_url += "&state=" + state; }

// load the data from the DataCite API
if (query_url) {
  d3.json(query_url)
    .get(function(error, json) {
      if (error) { return console.warn(error); }

      userStoryResult(json);
  });
}

// add user_storys to page
function userStoryResult(json) {
  var data = json.data;
  var meta = json.meta;

  d3.select("#query").property("value", query);

  if (typeof data === "undefined" || data.length === 0) {
    d3.select("#content").append("h4")
      .attr("class", "alert alert-info")
      .text("No user stories found.");
    return;
  }

  for (var i=0; i<data.length; i++) {
    var user_story = data[i];
    var description = user_story.attributes.description.split("\n")[0];
    var created_date = formattedDate(user_story.attributes.created.substring(0, 10)) + ".";
    var categories = user_story.attributes.categories;
    var stakeholders = user_story.attributes.stakeholders;
    var comments = '';
    if (user_story.attributes.comments > 1) {
      comments = ' ' + user_story.attributes.comments + ' comments.'
    } else if (user_story.attributes.comments == 1) {
      comments = ' 1 comment.'
    }

    d3.select("#content").append("h3")
      .attr("class", "milestone")
      .attr("id", "user_story-" + user_story.id)
      .append("a")
      .attr("href", function() { return encodeURI(github_url + "/issues/" + user_story.id); })
      .text(user_story.attributes.title);

    if (user_story.attributes.closed !== null) {
      var closed_date = formattedDate(user_story.attributes.closed.substring(0, 10)) + ".";

      d3.select("#content").append("div")
        .attr("class", "released")
        .html(description);

      d3.select("#content").append("p")
        .attr("id", "labels-" + user_story.id);

      if (user_story.attributes.milestone !== null) {
        d3.select("#labels-" + user_story.id).append("span")
          .attr("class", "label label-milestone")
          .append("a")
          .attr("href", function() { return encodeURI("/roadmap.html?milestone=" + user_story.attributes.milestone.id); })
          .text(user_story.attributes.milestone.title);
      }

      for (j = 0; j<user_story.attributes.categories.length; j++) {
        d3.select("#labels-" + user_story.id).append("span")
          .attr("class", "label label-category")
          .append("a")
          .attr("href", function() { return encodeURI("/user-stories.html?category=" + user_story.attributes.categories[j]); })
          .text(user_story.attributes.categories[j]);
      }

      for (j = 0; j<user_story.attributes.stakeholders.length; j++) {
        d3.select("#labels-" + user_story.id).append("span")
          .attr("class", "label label-stakeholder")
          .append("a")
          .attr("href", function() { return encodeURI("/user-stories.html?stakeholder=" + user_story.attributes.stakeholders[j]); })
          .text(user_story.attributes.stakeholders[j]);
      }

      d3.select("#labels-" + user_story.id).append("span")
        .attr("class", "label label-state")
        .append("a")
        .attr("href", function() { return encodeURI("/roadmap.html?state=" + user_story.attributes.state); })
        .text(user_story.attributes.state);

      d3.select("#content").append("p")
        .attr("class", "released")
        .html("Created " + created_date + " Closed " + closed_date + comments);
    } else {
      d3.select("#content").append("div")
        .html(description);

      d3.select("#content").append("p")
        .attr("id", "labels-" + user_story.id);

      if (user_story.attributes.milestone !== null) {
        d3.select("#labels-" + user_story.id).append("span")
          .attr("class", "label label-milestone")
          .append("a")
          .attr("href", function() { return encodeURI("/roadmap.html?milestone=" + user_story.attributes.milestone.id); })
          .text(user_story.attributes.milestone.title);
      }

      for (j = 0; j<user_story.attributes.categories.length; j++) {
        d3.select("#labels-" + user_story.id).append("span")
          .attr("class", "label label-category")
          .append("a")
          .attr("href", function() { return encodeURI("/user-stories.html?category=" + user_story.attributes.categories[j]); })
          .text(user_story.attributes.categories[j]);
      }

      for (j = 0; j<user_story.attributes.stakeholders.length; j++) {
        d3.select("#labels-" + user_story.id).append("span")
          .attr("class", "label label-stakeholder")
          .append("a")
          .attr("href", function() { return encodeURI("/user-stories.html?stakeholder=" + user_story.attributes.stakeholders[j]); })
          .text(user_story.attributes.stakeholders[j]);
      }

      d3.select("#labels-" + user_story.id).append("span")
        .attr("class", "label label-state")
        .append("a")
        .attr("href", function() { return encodeURI("/user-stories.html?state=" + user_story.attributes.state); })
        .text(user_story.attributes.state);

      d3.select("#content").append("p")
        .html("Created " + created_date + comments);
    }
  }

  d3.select("#categories")
    .classed("panel facets", true).insert("div")
    .attr("class", "panel-body").insert("h4")
    .text("Categories");

  d3.select("#categories .panel-body").insert("ul");

  for (var key in meta.categories) {
    if (category === key) {
      d3.select("#categories .panel-body ul").insert("li")
        .append("a")
        .attr("href", function() { return "/user-stories.html"; }).insert("i")
        .attr("class", "fa fa-check-square-o");
    } else {
      d3.select("#categories .panel-body ul").insert("li")
        .append("a")
        .attr("href", function() { return "/user-stories.html?category=" + key; }).insert("i")
        .attr("class", "fa fa-square-o");
    }
    d3.select("#categories .panel-body ul li:last-child").insert("span")
      .text(key);
    d3.select("#categories .panel-body ul li:last-child").insert("span")
      .attr("class", "number pull-right")
      .text(meta.categories[key]);
  }

  d3.select("#stakeholders")
    .classed("panel facets", true).insert("div")
    .attr("class", "panel-body").insert("h4")
    .text("Stakeholders");

  d3.select("#stakeholders .panel-body").insert("ul");

  for (var key in meta.stakeholders) {
    if (stakeholder === key) {
      d3.select("#stakeholders .panel-body ul").insert("li")
        .append("a")
        .attr("href", function() { return "/user-stories.html"; }).insert("i")
        .attr("class", "fa fa-check-square-o");
    } else {
      d3.select("#stakeholders .panel-body ul").insert("li")
        .append("a")
        .attr("href", function() { return "/user-stories.html?stakeholder=" + key; }).insert("i")
        .attr("class", "fa fa-square-o");
    }
    d3.select("#stakeholders .panel-body ul li:last-child").insert("span")
      .text(key);
    d3.select("#stakeholders .panel-body ul li:last-child").insert("span")
      .attr("class", "number pull-right")
      .text(meta.stakeholders[key]);
  }

  d3.select("#state")
    .classed("panel facets", true).insert("div")
    .attr("class", "panel-body").insert("h4")
    .text("State");

  d3.select("#state .panel-body").insert("ul");

  for (var key in meta.state) {
    if (state === key) {
      d3.select("#state .panel-body ul").insert("li")
        .append("a")
        .attr("href", function() { return "/user-stories.html"; }).insert("i")
        .attr("class", "fa fa-check-square-o");
    } else {
      d3.select("#state .panel-body ul").insert("li")
        .append("a")
        .attr("href", function() { return "/user-stories.html?stakeholder=" + key; }).insert("i")
        .attr("class", "fa fa-square-o");
    }
    d3.select("#state .panel-body ul li:last-child").insert("span")
      .text(key);
    d3.select("#state .panel-body ul li:last-child").insert("span")
      .attr("class", "number pull-right")
      .text(meta.state[key]);
  }
}
