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

- [ ] Figure out how newer version of angular handles environments.ts and how to use different url for dev and prod -- [https://angular.io/guide/build#configure-environment-specific-defaults](docs) and [https://www.joshmorony.com/production-development-environment-variables-in-ionic-angular/](blog post) to review tomorrow
- [ ] Check that prod deploy of frontend is talking nicely to prod deploy of backend 
- [ ] Figure out how to add scripts to start server
- [ ] Make front end real jazzy looking
- [ ] Add data transform logic to backend
- [ ] Add decicion making logic to frontend