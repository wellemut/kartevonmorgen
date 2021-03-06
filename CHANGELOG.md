## v0.1.16 (2017-07-28)
- new(rating): show explanation for rating contexts when hovering over them
- new(rating): replace drop downs by radio buttons
- new(subscribeToBbox): add possibility for logged in user to subscribe to changes in an area of the map -> send notification emails
- new(login): make deleting account possible (mostly for debugging)
- new(login): send email to confirm email address
- new(login): user registration, login, logout
- new(search): show only the 50 best rated entries in search and pins
- new(landingPage): make an overview of Germany the initial default view
- new(rating): added optional sources field to rating form
- new(routing): route also by search string and tags
- fix(routing): fixed several issues with routing
- refactor(routing): put routing into url reducer
- new(search): show loading message when loading entries
- fix(search): ignore search when ending with '#', wait for hashtag first
- fix(entryForm): make finding address work again
- fix(entryForm): remove 'events' category for now because it produces an error 'react is undefined'
- chore(*): support es2017

## v0.1.15 (2017-06-14)

- new(routing): routing by center, zoom and entry
- new(routing): change URL when interacting with the website; make all updates to center, zoom and entry via the URL
- new(city-search): use Overpass API instead of Nominatim API for searching cities
- chore(*): update to webpack 2

## v0.1.14 (2017-06-01)

- fix(new entry): convert latitude and longitude to float when entering a manual address

## v0.1.13 (2017-05-26)

- new(routing): add routing functionality (#107)
- new(routing): go to location by url with `map-center` key
- new(routing): go to entry page by url with `entry` key (#164)

## v0.1.12 (2017-05-19)

- new(SearchBar): add hint for tag searching
- refactor(imprint): migrate to ES6
- fix(*): add missing Flower component
- fix(rating): change "Vielfältigkeit" to "Natürlichkeit"
- fix(rating): send rating value as integer

## v0.1.11 (2017-04-12)

- new(results): show rating flower
- fix(rating): allow comments with up to 500 chars

## v0.1.10 (2017-04-12)

- new(ratings): add basic rating form
- new(entry): show ratings
- refactor(map): migrate to ES6
- refactor(map): migrate to leaflet 1.0
- refactor(*): get rid of `updeep`

## v0.1.9 (2017-03-24)

- fix(entryForm): handle tag array correctly (#193)
- fix(entryForm): do not normalize url
- refacotr(specs): migrate to ES6

## v0.1.8 (2017-03-24)

- new(resultList): show tags
- fix(entryForm): show correct placeholder (#191)

## v0.1.7 (2017-03-19)

- new(entry): basic tag support (#179)
- fix(search): toggle category filter (#190)

## v0.1.6 (2017-03-11)

- refactor(*): start migrating CoffeeScript to ES6 (#143)
- refactor(entryForm): upgrade redux-form 4.x -> 6.x (#188)

## v0.1.5 (2016-07-11)

- new(landingpage): tutorial images
- new(entryForm): normalize homepage field
  (add `http://` if no protocol was specified)
- new(entryForm): naive URL validation (full validation is done on the server)
- fix(landingpage): text & typos

## v0.1.4 (2016-06-29)

- new(gui): use museo font
- new(landigpage): content update
- new(action): add licence property
- refactor(react): use `v15.1.0`

## v0.1.3 (2016-05-01)

- new(gui): add new landing page (#101)
- new(gui): show success message
- new(entryForm): show message on failure in top of entry form additionally
- new(entry form): improve scrolling / layout
- new(landingpage): menu / subpages moved into landingpage
- refactor(resultlist): increase width (#132)
- new(SearchBar): show entries by default (#148)
- fix(css): font-awesome font (#105)
- fix(map): #106
- fix(css): replace flexbox layout with float layout

## v0.1.2 (2016-04-09)

- fix(entryForm): update redux-form to solve saving issues with IE (#12)
- refactor(validation): allow 250 characters for descriptions (#130)
- fix(html): use correct htmlWebpackPlugin template syntax

## v0.1.1 (2016-01-25)

- new(webapi): use secure connection
- new(webapi): use secure nominatim connection (#113)
- new(entryForm): set marker automatically if address is given (#87)
- new(entryForm): set address automatically if marker is given (#87)
- fix(entryForm): don't reload page on submit (#124)

## v0.1.0 (2015-12-04)

First public prototype
