var app = {
  title: 'Python Animal Adoption Scraper',
  subtitle: 'Scraping aint scrapping...'
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <p>This is great a location: Providence, RI</p>
  </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
