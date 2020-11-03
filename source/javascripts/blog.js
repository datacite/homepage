'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import * as React from 'react';
import ReactDOM from 'react-dom';
import startCase from 'lodash/startCase'

const e = React.createElement;

function FeaturedPostItem() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  const url = 'https://api.datacite.org/dois?client_id=datacite.blog&query=subjects.subject:featured&page[size]=3&sort=-created';

  function ApiError(props) {
    this.status = props.status;
    this.message = props.statusText
    if (!this.message) {
      if (this.status == 404) this.message = "Not found";
    }
	}

	const FeaturedPostItem = ({item}) => {
		const title = item.attributes.titles[0].title;
		const description = item.attributes.descriptions[0].description

    return (
      <div key={item.id} className="class=col-md-4 col-sm-4 svc-item">
				<h4>{title}</h4>
				<p>{description}</p>
				<p className="read-more"><a href={'https://doi.org/' + item.id}>Read more</a></p>
			</div>
    );
  }
	
	React.useEffect(() => {
		fetch(url)
			.then((response) => {
				if (!response.ok) throw new ApiError(response);
				else return response.json();
			})
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result.data);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, [])

	if (error) {
		return (
			<p>Error: {error.message}</p>
		)
	}

	if (isLoaded && items.length == 0) {
		return (
			<p>No blog posts found.</p>
		)
	}
	
	return (
		<div className="memberslist">
			{items.map(item => (
				<React.Fragment key={item.id}>
					<FeaturedPostItem item={item} />
				</React.Fragment>
			))}
		</div>
	)
}

const domContainer = document.querySelector('#bloglist');
ReactDOM.render(e(FeaturedPostItem), domContainer);