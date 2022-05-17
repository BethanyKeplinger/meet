<h1>Meet </h1>

<h2>Description</h2>
Meet App is a serverless, progressive web application (PWA) built with React using a test-driven development technique. The application uses the Google Calendar API to fetch upcoming events. 

<h2>Key Features</h2>

<h3>Filter Events by City</h3>
<h5>As a user, I should be able to filter events by city so that I can view upcoming lists of events in my desired location </h5>
  <ul>
    <li>Given user hasn’t searched for any city, when the user opens the app then the user should see a list of all upcoming events</li>
    <li>Given the main page is open, when user starts typing in the city textbox then the user should see a list of cities (suggestions) that match what they’ve typed</li>
    <li>Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing, when the user selects a city (e.g., “Berlin, Germany”) from the list then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city</li>
  </ul>
  
<h3>Show/Hide an Event's Details</h3>
<h5>As a user, I should be able to click on an event so that I can expand the details to learn more about the event</h5>
  <ul>
    <li>Given the user has searched for an event, when nothing has been clicked then the event details will be collapsed</li>
    <li>Given the user has searched for an event, when the user clicks to expand then the event details will be displayed</li>
    <li>Given the user is finished looking at an event, when the user clicks on the event details then the details will collapse</li>
  </ul>
  
<h3>Specify Number of Events</h3>
<h5>As a user, I should be able to specify the number of events I view so that I can view any many or as little as I would like</h5>
  <ul>
    <li>Given the user hasn't specified the number of events they wish to see, when the user searches for events then the default number will be 32</li>
    <li>Given the user has specified the number of events they wish to see, when the user searches for events then the amount requested will show up, if available</li>
  </ul>
  
<h3>Use the App When Offline</h3>
<h5>As a user, I should be able to use the app when I don't have internet access so that I can still see local events</5>
  <ul>
    <li>Given the user would like to use the app without internet access, when the user opens the app then the user is still able to use the app</li>
    <li>Given the user is using the app while offline when the user has changed the settings (city, time range) then an error message will appear </li>
  </ul>
  
<h3>Data Visualization</h3>
<h5>As a user, I should be able to see a chart with events listed so that I can have a more orgaizanized of viewing events</h5>
  <ul>
    <li>Given the user is searching events in a certain city, when the user clicks on that city then a chart with the number of upcoming events in         that city will appear</li>
  </ul>
  
<h3>Add an App shortcut to the homescreen</h3>