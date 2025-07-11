const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const movieList = document.getElementById('movieList');
const movieDetails = document.getElementById('movieDetails');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = searchInput.value.trim();
  if (!title) return;

  movieList.innerHTML = '<p class="text-center mt-4">Loading...</p>';
  movieDetails.innerHTML = '';

  try {
    const res = await fetch(`/api/search?title=${encodeURIComponent(title)}`);
    const data = await res.json();

    if (!data.Search) {
      movieList.innerHTML = '<p class="text-red-400 text-center mt-4">No movies found.</p>';
      return;
    }

    movieList.innerHTML = data.Search.map(movie => `
      <div class="bg-gray-800 p-3 rounded hover:bg-gray-700 cursor-pointer"
           onclick="getMovieDetails('${movie.imdbID}')">
        <img src="${movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}"
             alt="${movie.Title}"
             class="w-full h-64 object-cover rounded mb-2"/>
        <h3 class="text-lg font-semibold">${movie.Title}</h3>
        <p class="text-gray-400">${movie.Year}</p>
      </div>
    `).join('');
  } catch {
    movieList.innerHTML = '<p class="text-red-400 text-center mt-4">Failed to fetch movies.</p>';
  }
});

async function getMovieDetails(imdbID) {
  movieDetails.innerHTML = '<p class="text-center mt-4">Loading details...</p>';
  try {
    const res = await fetch(`/api/movies/${imdbID}`);
    const details = await res.json();

    if (details.Error) {
      movieDetails.innerHTML = `<p class="text-red-400 text-center mt-4">${details.Error}</p>`;
      return;
    }

    movieDetails.innerHTML = `
      <div class="bg-gray-800 p-6 rounded mt-6">
        <button onclick="clearDetails()" class="mb-4 text-blue-400 hover:underline">← Back to results</button>
        <div class="flex flex-col md:flex-row gap-6">
          <img src="${details.Poster !== "N/A" ? details.Poster : "/placeholder.png"}"
               class="w-full md:w-1/3 rounded"/>
          <div>
            <h2 class="text-3xl font-bold mb-2">${details.Title} (${details.Year})</h2>
            <p class="mb-2"><strong>Genre:</strong> ${details.Genre}</p>
            <p class="mb-2"><strong>Director:</strong> ${details.Director}</p>
            <p class="mb-2"><strong>Plot:</strong> ${details.Plot}</p>
            <p><strong>IMDB Rating:</strong> ${details.imdbRating}</p>
          </div>
        </div>
      </div>
    `;
  } catch {
    movieDetails.innerHTML = '<p class="text-red-400 text-center mt-4">Failed to load details.</p>';
  }
}

function clearDetails() {
  movieDetails.innerHTML = '';
}
