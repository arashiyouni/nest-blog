<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

#Run Debug
$ npm run start:debug
```

## Up Docker

```
$ docker-compuse up -d
```

## Stack

**Database**
- Mongoose
- TablePlus

**Dependency**
- class-validator
- class-transform

**API with the following responsibilities:**

- Return a list of articles. You can add filters such as publishing date, or tags.
- Return a single article, specified by the ID of the article.
- Create a new article to be published.
- Delete a single article, specified by the ID.
- Update a single article, again, you’d specify the article using its ID.

## About Schema
| Name        	| Type   	|
|-------------	|--------	|
| title       	| string 	|
| description 	| string 	|
| datePublish 	| Date   	|
| tags 	        | Tags   	|

Type Tags:
- **Dev** = '#development', 
- **FrontEnd** = '#frontend', 
- **Backen**d = '#backend', 
- **Learning** = '#learning',
- **Mobile** = '#mobile',
- **Ecom** = '#ecommerce',
- **Design** = "#design",
- **IA** = '#ia',
- **Empaty** = '#article',
- **SEO** = '#seo',
- **SEC** = '#cybersecurity',
- **Marketing** = '#marketing',
- **art** = '#art'

📌📖 Reference project: [Personal Blogging Platform API - Project ideas backend](https://roadmap.sh/projects/personal-blog)
