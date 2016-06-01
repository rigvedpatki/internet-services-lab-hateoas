# Internet-services-lab-hateoas

## Graphical HATEOAS Representation for REST API Development

An important aspect of Restful APIs is the concept of “Hypermedia as the engine of application state” (HATEOAS). In this project we will develop a graphical REST API prototyping system as a web application and include the concept of HATEOAS.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `npm install -g ember-cli`
* `bower install`
* `bower install bootstrap`

## Addon Installed:
* `ember-cli-github-pages`
For more information on this Addon please follow this [link](https://github.com/poetic/ember-cli-github-pages)


## Running / Development on local machine

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests on local machine

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying on Git Pages
When on the master branch after making the changes, do the following steps:
* Use `ember build` to build the changes that were made and then commit the changes to master branch
* Next used the command `ember github-pages:commit --message "State your messages here"`
* Next commit the changes to the gh-pages branch by using the command `git push origin gh-pages:gh-pages`
* To look at the web app go this [link](http://rigvedpatki.github.io/internet-services-lab-hateoas)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
