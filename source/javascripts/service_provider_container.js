'use strict';

const e = React.createElement;

function ServiceProvider() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  function ApiError(props) {
    this.status = props.status;
    this.message = props.statusText
    if (!this.message) {
      if (this.status == 404) this.message = "Not found";
    }
  }

  function ServiceProviderItem(props) {
    return e('div', { key: props.id, className: 'row thumbnail svc-item' }, [
      e('div', { className: 'col-md-4' },
        props.logo ? e('img', { className: 'member-logo', src: 'https://strapi.stage.datacite.org' + props.logo }) : null ),
      e('div', { className: 'col-md-8 stakeholderdescription' }, [
        e('h3', null, props.name),
        e('a', { href: props.website }, props.website),
        e('div', { className: 'description' }, props.description)
      ])
    ])
  }

  React.useEffect(() => {
    fetch("https://strapi.stage.datacite.org/service-providers")
      .then((response) => {
        if (!response.ok) throw new ApiError(response);
        else return response.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return e(
      'div', null, 'Error: ' + error.message
    )
  }

  // loading should be fast, so no need to render before isLoaded

  return e(
    'div', null,
    items.map(item =>
      e(ServiceProviderItem, {
        id: item.id,
        name: item.Name,
        logo: item.Logo ? item.Logo.url : null,
        website: item.Website,
        description: item.Description
      })
    )
  )
}

const domContainer = document.querySelector('#service_provider_container');
ReactDOM.render(e(ServiceProvider), domContainer);
