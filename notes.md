## Research

I wanted to find a weather API that also included historical preciipation data in its free tier offering. I found two possible options and chose [https://rapidapi.com/visual-crossing-corporation-visual-crossing-corporation-default/api/visual-crossing-weather](Visual Crossing Weather) because it allowed a higher number of requests vs [https://open-meteo.com/](Open Meteo) which could combine historic data with a forecast which was a big plus but it was much more limited in what you could access without creating a subscription.

## Thursday

My goal for tonight is to get a very barebones version of the front end and back end connected, running locally, and if possible also deployed on netlify and render.

It was helpful to go through the MongoDB article on [https://www.mongodb.com/languages/mean-stack-tutorial](MEAN stack) set up to get the basic backend code started.

- [X] Create express backend
- [X] Create get request to locally running server app
- [X] Deal with environment variables
- [X] Figure out how to deploy backend with Render
- [X] Figure out how to change where server is listening if you have to


## Friday

- [X] Figure out how newer version of angular handles environments.ts and how to use different url for dev and prod -- [https://angular.io/guide/build#configure-environment-specific-defaults](docs) and [https://www.joshmorony.com/production-development-environment-variables-in-ionic-angular/](blog post) to review tomorrow
- [X] Check that prod deploy of frontend is talking nicely to prod deploy of backend 
- [X] Figure out how to add scripts to start server
- [X] Make front end real jazzy looking
- [X] Add data transform logic to backend


## Saturday

- [X] disable submit button if zip is not valid
- [X] Replace all hardcoded request content
- [X] add zip param
- [X] add date query options - set fixed date calculation in backend rather than sending
- [X] import luxon to backend

## Sunday

- [X] Add decicion making logic to frontend
- [X] Expand decision making display and logic
- [X] Add Cypress
- [X] Connect with mongoDB
- [X] Write out crud API routes

## TODO

- [ ] Add spinner to disable button while awaiting server response
- [ ] Fix mobile text size
- [ ] Fix gradient size/scrolling issue
- [ ] Figure out what to do for validation on backend?
- [ ] Add tests to backend
- [ ] Figure out how to allow access in prod when not using home IP address
- [ ] Create crud views
- [ ] Write angular crud service
- [ ] Fix cypress e2e server stub response