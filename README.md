# 🎬 Movie Finder

Movie Finder is a responsive web application built with **Node.js**, **Express**, and vanilla **JavaScript**. It uses the **OMDb API** to fetch movie data, displaying search results and detailed movie information on a dedicated page. Styled entirely with **Tailwind CSS** via CDN for rapid prototyping and consistent design.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![OMDb](https://img.shields.io/badge/OMDb-FF9E0F?style=for-the-badge)

---

## 🚀 Features

🎥 **Movie Search:** Look up any movie title to see a grid of matching results from OMDb.

📝 **Dedicated Details Pages:** Click a movie to navigate to `/details.html?id=...` and view extended plot, genre, director, ratings.

🎨 **Responsive UI:** Built with Tailwind CSS loaded via CDN for instant styling, adapting seamlessly across devices.

🖼 **Fallback Poster:** If OMDb returns `Poster: "N/A"`, a local placeholder image is displayed.

🚨 **Clean 404 JSON:** API routes gracefully return `{ Failed to load details. Server error }` for unmatched endpoints.


---

## 🚢 Live Deployment

[View live on Render](https://movie-finder-api-al5o.onrender.com)

---

## 🚀 Local Setup & Installation

To set up and run this project locally:

1. **Clone the repository**

```bash
git clone https://github.com/YusufBolden/movie-finder-api.git
cd movie-finder-api
npm install
```
---

2. **Install project dependencies**

```
npm init -y
npm install express axios nodemon dotenv
```
This installs:

package.json

express for the web server

axios for HTTP requests to OMDb

dotenv for environment variables

nodemon for auto-restarting in development

3. **Create your .env file**

```
OMDB_API_KEY=your_omdb_api_key_here

```

4. **Run dev and type scripts to add to package.json**

```
npm pkg set type="module"
npm pkg set scripts.dev="nodemon server.js"
```

5. **Start the development server with nodemon**

```
npm run dev
```

6. **Open your browser**

```
http://localhost:3000
```
---

## 🗄️ File Structure
```
movie-finder-api/
├── controllers/
│   └── movieController.js
├── routes/
│   └── movieRoutes.js
├── public/
│   ├── 404.png
│   ├── app.js
│   ├── details.html
│   ├── details.js
│   ├── home.png
│   ├── index.html
│   ├── movieDetails.png
│   ├── placeholder.png
│   ├── reel.png (favicon)
│   └── searchResults.png
├── .env
├── .gitignore
├── package.json
└── server.js

```
---

## 📸 Previews

### Home Page 
![Home Page](public/home.png)

### Search Results
![Search Results](public/searchResults.png)

### Movie Details
![Movie Details](public/movieDetails.png)

### Invalid url
![Network Error](public/404.png)

---

## 🧑🏿‍💻 Author

Created by [Yusuf Bolden](https://github.com/YusufBolden). Feedback and suggestions are welcome!

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
