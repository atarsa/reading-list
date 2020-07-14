# Reading List 

- A Front-End app created in React that allows user to store books to read as well as reading progress.
- Books covers are fetched from [Google Books API](https://developers.google.com/books).
- After adding book to any list, it can be later drag-and-drop to another one.
- The app is fully responsive, created with mobile first approach. The user can also change theme to light/dark.
- All data is stored in local storage.
- The app is fully responsive, with mobile first approach.

Live version, hosted on github-pages, can be found here: [Reading-list App](https://atarsa.github.io/reading-list/)
<br>
Main purpose of this small app was to play with **React Context** API.


![Reading-list app screenshot](https://raw.githubusercontent.com/atarsa/reading-list/master/Screenshot.png)

#### Running this project locally
##### Live version:
[Reading-list App](https://atarsa.github.io/reading-list/)

##### From the repo:
1. Clone this project locally
2. Run `npm install` in your bash/command line
3. Get your developer API key from [here](https://console.developers.google.com/)
4. Create `.env` file in your root directory and add your developer key:
`REACT_APP_API_KEY=Your_key_goes_here`
5. Run `npm start` to run local server
6. The app should be live on your local server now!


### Dev dependencies
- [React](https://reactjs.org/)
- [React Modal](https://github.com/reactjs/react-modal)
- [Styled Components](https://styled-components.com/)
- ESLint

