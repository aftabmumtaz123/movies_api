# Movie Search App

This is a simple **Movie Search App** that allows users to search for movies using the **OMDB API**. It provides movie details such as the **poster, IMDb rating, year of release, title, and plot**.

## Features
- Search for movies by title
- Display movie details (Poster, IMDb rating, Year, Title, Plot)
- Handle errors gracefully when no results are found

## Technologies Used
- **Node.js** (Express.js for backend)
- **EJS** (Embedded JavaScript for templating)
- **Axios** (To fetch data from the OMDB API)
- **Tailwind CSS** (For styling the frontend)

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the app**
   ```sh
   node app.js
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Usage
1. Enter a movie title in the search bar and click **Search**.
2. The movie details will be displayed on the screen.
3. If the movie is not found, an error message will be shown.

## API Used
- [OMDB API](http://www.omdbapi.com/) - A free movie database API

## Folder Structure
```
/movie-search-app
├── views
│   ├── index.ejs  # Frontend UI (Search Form and Results)
├── app.js  # Main server file
├── package.json  # Dependencies and scripts
├── public  # (Optional) For static files like CSS, JS, and images
```

## Contributing
If you'd like to contribute, feel free to fork the repo and submit a pull request. Any improvements are welcome!

## License
This project is licensed under the **MIT License**.

---
**Author:** Aftab Mumtaz | [GitHub Profile]((https://github.com/aftabmumtaz123))

