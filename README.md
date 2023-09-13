# MyNews - Your Source for the Latest News
An application used to fetch news from the News API. Built with React, JavaScript, CSS, and HTML.

## Installation and Setup Instructions

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
Clone down this repository. You will need Node.js and npm installed globally on your machine.

I used the Vite build tool for the development of this project. To install Vite, run the following command in your terminal:
```bash
npm create vite@latest
```

To run the Vite server, use the following command:
```bash
npm run dev
```

You can visit the app at:
```bash
localhost:5173
```
You can visit the App at: 
https://momair1131.github.io/React-News-Blog/

## Description

This was a week-long project built during my third module at the Software Engineering Bootcamp. The project's goal included using technologies learned up to this point and familiarizing myself with how to use APIs in the project after reading the API documentation.

My goal was to build an application using the News API to fetch the latest news and categorize them. I started this process by using the create-vite boilerplate with npm, then added BrowserRouter from the react-router-dom library. I used BrowserRouter to keep my UI in sync with the URL. I added the Link element in my Navbar to set the URL and keep track of browsing history. To maintain clean and organized code, I divided the project into different components and pages. Lastly, I used the Fetch API through the fetch() method to make the HTTP request to get the data. I used the useEffect and useState hooks to fetch and store the data.

One of the main challenges I encountered was customizing the data according to the categories. It took me two days to figure out how to customize the data for different categories. To do this, I created two URLs, one with the category URL variable and the other without it, and implemented a conditional check to render the URL accordingly. Another issue I faced was related to updating the data when navigating to a specific category. I resolved this issue by updating my useEffect hook and setting a category variable as the watch variable, ensuring that when the category changes, the useEffect fetches new data from the News API.

In summary, the technologies implemented in this project are React, React-Router, and a significant amount of Vanilla JavaScript, JSX, and CSS. I chose to use the Vite boilerplate to minimize initial setup and invest more time in exploring various technological aspects. In the next iteration, I plan to add a search bar feature so that users can search for news based on their preferences and implement Google sign-in functionality to personalize news based on users' history.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements
I would like to thank my instructor, Tishana Trainor, for assigning me this challenging project. I would also like to express my gratitude to Manara Ali for his assistance in creating this project and helping me resolve any issues I encountered along the way.


