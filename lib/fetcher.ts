export const getTrendingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=00c85b6545cdf2c554a139cf9b487839`
  );
  return await res.json();
};

export const getSearchMovies = async (search: string | null, page: number) => {
  const res = await fetch(
    `  https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=00c85b6545cdf2c554a139cf9b487839`
  );
  return await res.json();
};

export const getNowPlayingMovies = async (page: number) => {
  const res = await fetch(
    `  https://api.themoviedb.org/3/movie/now_playing?page=${page}&api_key=00c85b6545cdf2c554a139cf9b487839`
  );
  return await res.json();
};

export const getMovieDetail = async (id: string, additionalUrl?: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}${additionalUrl}?api_key=00c85b6545cdf2c554a139cf9b487839
  `
  );
  return await res.json();
};

export const getPopularMovies = async (page: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=00c85b6545cdf2c554a139cf9b487839
  `
  );
  return await res.json();
};

export const getTvShows = async (page: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/airing_today?page=${page}&api_key=00c85b6545cdf2c554a139cf9b487839
  `
  );
  return await res.json();
};

export const getPopularTv = async (page: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?page=${page}&api_key=00c85b6545cdf2c554a139cf9b487839
  `
  );
  return await res.json();
};

export const getTrendingTv = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=00c85b6545cdf2c554a139cf9b487839`
  );
  return await res.json();
};

export const getTvDetail = async (id: string, additionalUrl?: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}${additionalUrl}?api_key=00c85b6545cdf2c554a139cf9b487839
  `
  );
  return await res.json();
};

export const getSearchTv = async (search: string | null, page: number) => {
  const res = await fetch(
    `  https://api.themoviedb.org/3/search/tv?query=${search}&page=${page}&api_key=00c85b6545cdf2c554a139cf9b487839`
  );
  return await res.json();
};