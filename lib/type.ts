type MoviesType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: [];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieDetailType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: [{ id: number; name: string }];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    { id: number; logo_path: string; name: string; origin_country: string }
  ];
  production_countries: [{ iso_3166_1: string; name: string }];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [{ english_name: string; iso_639_1: string; name: string }];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type CastType = {
  id: number;
  cast: [
    {
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      cast_id: number;
      character: string;
      credit_id: string;
      order: number;
    }
  ];
};

type TvType = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: [];
  id: number;
  name: string;
  origin_country: [];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

type TvDetailType = {
  adult: boolean;
  backdrop_path: string;
  created_by: [{ id: number; credit_id: string }];
  episode_run_time: [];
  first_air_date: string;
  genres: [{ id: number; name: string }];
  homepage: string;
  id: number;
  in_production: boolean;
  language: [string];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    episode_type: string;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  name: string;
  network: [{ id: number; logo_path: string }];
  next_episode_to_air: {
    air_date: string;
    episode_number: 114;
    episode_type: string;
    id: 5088668;
    name: string;
    overview: string;
    production_code: string;
    runtime: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: [string];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    { id: number; logo_path: string; name: string; origin_country: string }
  ];
  production_countries: [{ iso_3166_1: string; name: string }];
  seasons: [{ air_date: string; episode_count: number; id: number }];
  spoken_languages: [{ english_name: string; iso_639_1: string; name: string }];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};
