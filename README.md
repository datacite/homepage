# DataCite Homepage

![Release](https://github.com/datacite/homepage/workflows/Release/badge.svg)

# Local development

Note: does not work with Ruby 3.x+ or Node 15.x+ . To run locally without installing older versions of Ruby/Node, follow the Docker steps

## Run directly on your OS

### Prerequisites
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Ruby v2.6](https://www.ruby-lang.org/en/)
- [RubyGems](https://rubygems.org/)
- [Node.js v14.x](https://nodejs.org/en/) (at least version 12)
- [Bundler](https://bundler.io/)

### Install and start
1. `git clone <repository-url> this repository`
2. `cd homepage`
3. `yarn`
4. `bundle exec middleman server`
5. `Visit the app at http://localhost:4567`

### Run in Docker

### Prerequisites
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Docker desktop](https://www.docker.com/products/docker-desktop/)

### Install and start
1. `git clone <repository-url> this repository`
2. `cd homepage`
3. `docker-compose up -d`
5. `Visit the app at http://localhost:4567`

## License

**Homepage** is released under the [MIT License](https://github.com/datacite/homepage/blob/master/LICENSE.md).
