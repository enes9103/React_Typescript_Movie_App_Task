## About The Project
Movie Application is an application where users can search and review the details of the movies they want by registering and logging in, add them to their favorites by commenting on the movies, and also share them with their loved ones.

## Description
- The Movie Application consists of 3 pages: "Home page (search)", "listing" and "movie detail".
- With the Movie Application, users can register to the application with their e-mail addresses. You can also use the option to continue with the Google account with the Google Provider feature.
- You can see the current movies on the main page of the application and get information about the movie sessions.
- You can search for the movies you want on the application home page.
- It can list all Search results with "MORE RESULTS" option.
- You can view the details of the movies listed by clicking on the relevant movie.
- You can add the movie you like in the movie details to your favorites, suggest it to another person via e-mail address, and comment on the movie.
- He can continue to review the movies he has listed by going back from the detail page.
- The application can work responsively on mobile and desktop platforms.

<p align="right">(<a href="#top">back to top</a>)</p>

## Project Outcome
![Project gif](Animation.gif)

## Project Skeleton

```
Movie App (folder)
|
|----readme.md
SOLUTION
├── public
│     └── index.html
├── src
│    ├── assets
│    │     └── logo1.png
│    ├── components
│    │     ├── MovieCard.tsx
│    │     └── Navbar.tsx
│    ├── context
│    │     └── AuthContext.tsx
│    ├── helpers
│    │     ├── AuthFirebase.tsx
│    │     └── DataBaseFirebase.tsx
│    ├── pages
│    │     ├── Login.tsx
│    │     ├── Main.tsx
│    │     ├── MovieDetails.tsx
│    │     ├── MovieList.tsx
│    │     └── Register.tsx
│    ├── router
│    │     └── AppRouter.tsx
│    ├── App.test.tsx
│    ├── App.tsx
│    ├── App.css
│    ├── index.tsx
│    ├── index.css
│    ├── react-app-env.d.ts
│    └── setupTest.ts
├── package.json
├── package-lock-json
├── tsconfig.json
└──.env
```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)
2. Create a new Firebase project and app. Get api key and required domain information to use in authentication processes.
Then create a new Realtime Database of the application. [https://firebase.google.com/](https://firebase.google.com/)
3. Clone the repo
   ```sh
   git clone https://github.com/enes9103/movie_app_task_react_ts
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Create .env file in home directory.
    ```sh
    API_KEY=ENTER YOUR themoviedb.org APIKEY
    apiKey:ENTER YOUR FİREBASE APIKEY
    authDomain:ENTER YOUR FİREBASE AUTHDOMAIN
    projectId:ENTER YOUR FİREBASE PROJECTID
    storageBucket:ENTER YOUR FİREBASE STORAGEBUCKET
    messagingSenderId:ENTER YOUR FİREBASE MESSAGİNGSENDERID
    appId:ENTER YOUR FİREBASE APPID
   ```
    ### Important reminder: It is designed to be used by preparing an .env file for the project. However, the .env structure has been left as a comment for convenience in the control situation.

    ### Themoviedb.org and Firebase api keys and necessary information required for the project are temporarily in the project file.

6. The project is ready, you can start using it now.
    You can run:

    `npm start`

    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    ### Don't  forget!!!
    You must log in to search for movies, view details and comment. You can also log in with your Google account.

<p align="right">(<a href="#top">back to top</a>)</p>


## Project Development Process

- 1 : `https://firebase.google.com/` was used for the `Authentication` and `data base operations` of the project.

- 2 : Registered to api `https://www.themoviedb.org/documentation/api` and get API key to get data from `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, for searching movies `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=` and for movie details `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`.

- 3 : Bootstrap was used as a css library for styling purposes in the project.

- 4 : The application has been designed in a responsive structure that can run smoothly on mobile and desktop platforms.

- 5: Typescript was used in the application created using the React.js library.

- 6: The application has been shared on Github. During the project preparation, the development stages were committed and pushed to the repo.

- 7: Cypress testing framework was used for application testing.

- 8: After the project was completed, gif and detailed README.md file were added.

- 9: The npm package manager was used during application development. Webpack was used for pre-deploy packaging.

- 10: The project was finally deployed using the Netlify service.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## Notes

- You can add additional functionalities to your app.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>