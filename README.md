# Development

### Link to Deployed Website
If you used the stencil code, this is `https://CozyCapybara.github.io/development`

### Goal and Value of the Application

The goal of the application is to easily glace at a roster of a football team and filter by different metrics to find players. It's useful for easily seeing certain players and their information, maybe as someone trying to figure out who a player was that they only glanced at a number of on a screen.

### Usability Principles Considered
I wanted to have the sidebar consistently in view of the actual cards, except for mobile. This way as the filters change one could see the extent of the results immediately. Also put name and picture ahead of other details as those are the first two components someone would most likely look for. 

### Organization of Components

I just used two Components, one for the filters that include the checkboxes, and another with a PlayerCard or the representation of a player. The Filters component handled all of the filtering using functions and consts written in App.js, by linking those to the checkboxes that exist for each category of filter. The seocnd was a PlayerCard which contained the information of each player and was the visual representation of the json file. 

### How Data is Passed Down Through Components

The Filters Component takes in functions rather than data so that it can apply them to the onClick property for each checkbox. The PlayerCard Component just takes in the data and then two functions for adding and removing favorites, which handle the aggregators as well.

### How the User Triggers State Changes

The user triggers state changes by clicking on the buttons to add and remove from a favorites group, and can also click on the sort button to sort the players by their number. The sort button updates the state of sort as a boolean and then the favorites buttons add to the favPlayers state which keeps track of the players in the favorites. 

Similary, the user can check boxes to apply filters, in which each type of filter has it's own state for the sub categories within them. 