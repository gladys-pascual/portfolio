const mainProjects = [
  {
    key: 1,
    title: "Stock Finder",
    deployedLink: "https://stockfinder-me.netlify.app/",
    repo: "https://github.com/gladys-pascual/stockfinder",
    description:
      "StockFinder is an interactive web application created using the Finnhub API.",
    img: "./pictures/projects/stockfinder.gif",
    appFeatures: [
      "Search for a specific stock, with auto-complete feature.",
      "Summary of the company stock.",
      "See a graph of stocks cost in various timelines (5D, 1M, 3M, 1Y & 5Y).",
      "See the current analysis on whether to buy or sell the stock.",
      "View the current news about the stock.",
      "View the latest market news.",
    ],
    technologies: "JavaScript | React | HTML | CSS | SASS | Flexbox | ES Lint",
    libraries: "axios | react-router-dom | react-spinners | nivo",
  },
  {
    key: 2,
    title: "Moive & TV Show Search App",
    deployedLink: "https://movie-tv-search-app.netlify.app/",
    repo: "https://github.com/gladys-pascual/movie-tv-search-app",
    description:
      "ShowMe is a Movie & TV show searching web app created using the TMDb API.",
    img: "./pictures/projects/show-me.gif",
    appFeatures: [
      "Search movies or tv shows.",
      "Login to your own account.",
      "Mark and view favourite movies or tv shows.",
      "Bookmark search results, movies and tv shows.",
    ],
    technologies: "JavaScript | React | HTML | CSS | SASS | Flexbox",
    libraries:
      "react-router-dom | react-animated-heart | react-rater | react-spinners",
  },
  {
    key: 3,
    title: "Complex To Do",
    deployedLink: "https://complextodo.netlify.app/login",
    repo: "https://github.com/gladys-pascual/complex-to-do",
    description:
      "A slightly more complex to-do list, purely Front-End focused.",
    img: "./pictures/projects/complex-to-do.gif",
    appFeatures: [
      "Front-end focused project, no database. Information is saved in the state, therefore data will reset when browser is refreshed.",
      "Log-in & sign-up forms, where inputs will be saved in the local storage.",
      "To test the app, enter any email address & password. ",
      "Create a list, add task to a list, and add subtasks.",
      "Edit tasks, mark tasks and subtasks done.",
      "Delete a list, task, or subtask.",
    ],
    technologies: "JavaScript | React | HTML | CSS | SASS | Flexbox",
    libraries: "react-hook-form | react-router-dom ",
  },
];

export default mainProjects;
