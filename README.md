


![alt text](https://i.imgur.com/lzVI3d8.png)

# General Assembly: Software Engineering Immersive

## Hidden Gems

https://sei-hidden-gems.herokuapp.com/

### Overview

This was my first group full stack MERN project with full CRUD functionality using our own Restful API. The app was created to showcase the hidden gems across the British Isles. Users can leave a comment, login and create a new pin which showcases information about a particular place, such as the location, type of place and upload an image. Users can also search for pins and view profiles online. 

### Project members 

Tom Murphy - https://github.com/Kumasta 
Mayur Raj Kumar - https://github.com/TMurp 

### Site screenshots 

#### Homepage

Users can filter by the type of place or search for the name of a particular place. 

![alt text](https://i.imgur.com/AjTBrfL.jpg)
![alt text](https://i.imgur.com/qIzh15v.jpg)


#### Map page

Users can filter the gems shown by the typeof place and tags.

![alt text](https://i.imgur.com/5BAqSvi.jpg)

Users can click anyway on the map to create a new pin which will prompt them to register if not logged in.

![alt text](https://i.imgur.com/5NmqLRH.jpg)

#### Single pin page 

Users can post a comment and make a rating once logged in.

![alt text](https://i.imgur.com/r0YcV2U.jpg)
![alt text](https://i.imgur.com/YijFzu4.jpg)


#### Profile page 

![alt text](https://i.imgur.com/YrX0nOk.jpg)

#### Create a new pin

![alt text](https://i.imgur.com/2KxOG0W.jpg)


### Project Brief

- Build a full-stack application by making your own backend and your own front-end
- Use an Express API to serve your data from a Mongo database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
- Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. 
- Be deployed online so it's publicly accessible.
- To be completed in 8 days 

#### Technologies used

- React
- Node.js
- Express
- MongoDB/Mongoose
- SASS
- Axios
- React Bootstrap
- React Select
- React Mapbox GL
- Nodemon
- Bcrypt
- jsonwebtoken
- Insomnia
- Git/GitHub

### Approach taken 

#### Planning

We started the project planning our relationships, user stories, overall design of the app, the functionality needed and the work allocation using Trello. We were all really keen to implement Mapbox in our application and brainstormed ideas on what we could do.

#### Wireframe

The wireframe is colour coded by MVP and stretch goals. This allowed us to visually see what functionality we should prioritise before moving on to additional features. 

![alt text](https://i.imgur.com/TxO1QRi.jpg)



#### Trello board 

We used trello to keep track of our responsibilities during the course of the project.

![alt text](https://i.imgur.com/stneNsy.jpg)

#### Backend 

We decided to code the backend together, with one person screen sharing. This was to ensure that everyone had a thorough understanding of the backend and was able to consolidate their knowledge from module 3 which covered node and express. This also ensured the team knew how everything worked together before working on the frontend. We ensured to include any functionality in the backend that was required for our stretch goals to avoid having to rework the backend if we had additional time to work on more features on the frontend after achieving our MVP. 

We built the express app and connected it to MongooseDB before focusing on building the models, controllers, and the routes. The endpoints, secure routes and error handling of the API were tested in Insomnia before moving to the frontend. 

The pins model (which represents a place on the map) was the most complex model for our app. This included embedded relationships with referenced data with the reviews schema (embedded with a like schema), ratings schema, average rating calculated in a virtual field and a referenced relationship with the user schema.

![alt text](https://i.imgur.com/2C2uhvB.jpg)

#### Frontend 

We decided to divide tasks and take ownership of different components on the web page.

I was responsible for the following:


- Homepage 
- Navbar 
- Comments on the single pin page (Tom worked on the likes functionality)
- User authentication 


#### Hero carousel on homepage

This generates five random images to display by pushing random pins from the pin data into a new array with no duplicates inside of a while loop while the condition specified is truthy. Once set to state, the random hero images array is mapped over to generate a carousel using react bootstrap. 

![alt text](https://i.imgur.com/G5X6S6j.jpg)


#### Most rated section on homepage 

The filter method was used to filter the pin data with an average rating of more than 4. Three random pins with a rating more than 4 are shown using a similar logic to the hero carousel.

#### Search bar on homepage

A usEffect was used to check for updates on the pin data and filters then setting the state of the filtered pins. The search input was saved to a variable and a regular expression was created using the RegExp object. The filtered pins are set by filtering the pin data array by the filtered values, firstly checking the search input from the user then also checking if the type of place matches the selection or the selection is ‘All’.

![alt text](https://i.imgur.com/F6kHFQa.jpg)


#### Comments 

I decided to split the functionality of the comments into three components: the comment card, the comment form and the comment edit form which were child components of the showcase page. 

To create a comment card for each comment the map method was implemented when the reviews data array was populated to display who posted the comment and a link to their profile. 

The comment form was built using react bootstrap.The comments data was initially set to an object with a key of text and an empty string as the value.The data is updated on the handleChange function which spreads in the comments data which represents the state as it is. The text key is updated based on the e.target.name that is defined on the input form. This is then updated with the e.target.value. 

![alt text](https://i.imgur.com/vNhE7Ah.jpg)

A separate form was used for the comment edit form. If the id of the user was equal to the payload.sub, the user would have access to the functionality to delete and edit their comment. A ternary operator was used for this functionality on the commnet card. 

Screenshot of the JSX for the comment card component: 

![alt text](https://i.imgur.com/ShgxO3j.jpg)


#### Navbar 

React bootstrap was used for the layout and structure of the navbar.  Ternary operators were used to ensure certain information was displayed when the user was logged in and authenticated. For example, the navbar will toggle between the login in/register links and the profile/logout links depending on whether the user was authorised. 


#### Challenges 

- When building the backend, we had difficulty populating some of the models with the correct nested schema information.
- This was my first time styling a carousel. I struggled to override the existing bootstrap styling and had to play around with targeting the different elements before achieving the desired design. 
- I had to refactor my code several times to get the functionality working for editing comments. The main challenge was knowing which buttons should handle the handleEditButtonClick function or the editComment function.


#### Bugs 

- The carousel requires images to have a certain height and width. Images that are below this will look stretched and pixelated. 

### Wins 

- The level of planning before starting to code was crucial, this really helped the team have a clear understanding of our end goal and our main objectives
- I really enjoyed collaborating in a team and motivating each other particularly at times when  things were not going our way.
- Gaining insight into how others solved problems when I encountered any issues/bugs was very useful

### Future improvements 

- Adding a timestamp to the comments so users can see when the comments were posted 
- Improve the overall styling of the web page to make things look more slick and cleaner 
- Ensuring the user experience is enhanced by directing the user to the register page for all functionality that requires authorization such as posting comments or making a rating 
- Extending the search function on the homepage to search by ratings, location etc. 

### Key learnings 

- This was the biggest project I had done at GA, planning was key but I also gained insight on how I like to work and structure my day during long projects 
- Building the backend from start to finish gave me a better understanding on how everything works together and really consolidated what we had learned in class


### Contact

- Linkedin - https://www.linkedin.com/in/marilyn-poku
- Email - marilynpoku@hotmail.com 
