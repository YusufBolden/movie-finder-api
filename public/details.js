const movieDetails = document.getElementById('movieDetails');

async function loadMovieDetails() {
  const params = new URLSearchParams(window.location.search);
  const imdbID = params.get('id');

  if (!imdbID) {
    movieDetails.innerHTML = '<p class="text-red-400 text-center mt-4">No movie ID provided.</p>';
    return;
  }

  movieDetails.innerHTML = '<p class="text-center mt-4">Loading details...</p>';

  try {
    const res = await fetch(`/api/movies/${imdbID}`);
    const details = await res.json();

    if (details.Error) {
      movieDetails.innerHTML = `<p class="text-red-400 text-center mt-4">${details.Error}</p>`;
      return;
    }

    movieDetails.innerHTML = `
      <div class="bg-gray-800 p-6 rounded">
        <div class="flex flex-col md:flex-row gap-6">
          <img src="${details.Poster !== "N/A" ? details.Poster : "/noImage.png"}"
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

loadMovieDetails();
