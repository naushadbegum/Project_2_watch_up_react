# **WATCH UP**

![Screenshots of WATCH UP's homepage](photos/mobile-first-screenshot.png)

Link to demo : [WATCH UP](https://naushadbegum.github.io/Project-1-USA-National-Parks/)

## Summary
We cannot image a time without watches. It might be widely argued that in today's context, handphone is used to tell time. However, watches continue to play an important role in our lives. Many enthusiasts all around the world collect watches of different designs, brands and workmanship. This website aims to bring these collectors together and share their collection to the world.
---

## UI/UX
### Strategy
### Organisational Goals
Every watch in the world is unique. The older the watch is, the more valuable it becomes. Although new watches can be found in many shops, the older watches are rare. It would be ideal if there an application for watch collectors to showcase their watches and also look at other's collections. Visitors of the website can search via brand, model, movement, gender and glass material from the collection. Watch collectors can add their watch to the collection as well. 

### User Goals
The users of WATCH UP are mostly veteran watch collectors, watch enthusiasts and watch buyers. The aim of the users is to be able to find and post watches to the collection. 
| User Stories | Accceptance Criteria |
| ----------- | ----------- |
| As a water collector, I want to show my collection to others and share my joy of collecting with watch colelctors. | A water collector can upload his watch details with a photo of his watch and he can edit the details as well. |
| As a water enthusiat, I like to view watch collections especially older watches and know what watches others have. | There is a criteria for watch collectors to upload the year the watch was released, so users will know the age of the watch. |
| As a water buyer, I wish to compare the price and also search from the collection via brand, model I am interested in. | Watches can be searched based on the model and brand. |

### Design Decisions

#### Color scheme

![Screenshot of color scheme](./src/images/watchup-scheme.png)

The color scheme chosen revolves around black, grey and tan. As watches are usually dull in colour, to put more focus on the watches rather than the bakcground, dull colours were used for the application. Green was only used for the title of the application to make name stand out and also complements the banner. 

#### Fonts


*Serif* is a font family used for apt giving the formal look for the watch. *Sans-serif* was mainly used to ensure that the words are clear when read in the forms. 

---

## Features

| Features | Description |
| ----------- | ----------- |
| Search parks by name and state | These features allow the user to select the state and search based on the name of the park. This will be convenient for users as there are many national parks in the USA. Searching by states helps to narrow down the search.|
| View Campgrounds in the selected state | Users are able to view all the campgrounds in every state and click on the markers. The popup from the marker will provide photo and the address which is very important for travellers. |
| View Parking Lots in the selected state | Users are able to view all the parking lots in every state and click on the markers. The popup from the marker will provide information about the parking lots. It will provide information such as the number of cars can be parked and also the type of cars that can be parked.|
| View Convenience stores in the selected state | Users are able to view all the covenience within 10km radius of the map view. The markers will show the name of the shop. |
---

## Limitations and Future Implementations

1. Design a more user friendly search engine
    - Current limitation : 
        - The current search feature can only handle queries that match the park names and in that particular state. Users need to key in the park name correctly. 
    - Future implementation : 
        - Suggestions can be given while the user is typing and especially if user has typo errors in the query 
2. Adding hiking trials for the parks
    - Current limitation :
        - The website provides information such as photo, address, campgrounds and parking lots of the parks based on the information from nps.gov.
    - Future implementation :
        - Hiking trials based on state can be added to the map. This will be useful not just for hikers but also for tourists who are visiting for the first time as well. 
3. Separate the Guide tab without the need to 
    - Current limitation : 
         - User needs to select a state in the dropdown list before clicking on the campgrounds, parking lots and convinience stores. 
    - Future implementation :
        - Dropdown list can be added to the guide tab as well so that users can select from the tab and click on campgrounds, parking lots and convinience stores. 
4. Add weather feature 
    - Current limitation :
        - Due to time limitation, was not able to add the weather feature to the application.
    - Future implementation :
        - Using the open weather api, weather can be added to the map. A weather forcast feature will be very useful for the visitors. 

---

## Technologies Used

1. HTML

2. CSS

3. [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) 
    - Used for buttons, tabs and offcanvas of website

4. JavaScript

5. [Axios](https://github.com/axios/axios)
    - Used to fetch data from APIs used by website


---

## Testing

The website is tested for responsiveness using Developer Tools on Chrome browser for mobile, tablet and desktop screen widths.
The test cases can be found [here](test-cases.pdf).

---

## Deployment

The website is hosted using [Github](https://www.github.com/), deployed directly from the main branch of the Github repository.

---

## Credits and Acknowledgement
### Fonts :
1. [Google Fonts](https://fonts.google.com/) - Used for fonts displayed in website 
### Icons :
1. [Font Awesome](https://fontawesome.com/) - Used in tabs and buttons of website
### Data :
1. [Nps.gov](https://https://www.nps.gov/subjects/developer/api-documentation.htm/)
    - The dataset was used to display the parks information, campgrounds, parkinglots and photos on the website 
2. [Foursquare.com](https://foursquare.com/)
- The dataset was used to display convinience stores within the radius.
### Screenshot :
1. [CreateMockup.com](https://www.createmockup.com/generate/) - Used to generate responsive website mockup for README file
2. [Coolors.co](https://coolors.co/) -Used to generate the colour scheme for the project
### Background photo:
1. [Freepik.com](https://www.freepik.com) -Used for the background image of the introduction page