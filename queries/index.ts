"use client";
import {
  getMovieDetail,
  getNowPlayingMovies,
  getPopularMovies,
  getPopularTv,
  getSearchMovies,
  getSearchTv,
  getTrendingMovies,
  getTrendingTv,
  getTvDetail,
  getTvShows,
} from "@/lib/fetcher";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useTrendingMovies = () => {
  return useQuery({
    queryKey: ["trending-movies"],
    queryFn: getTrendingMovies,
  });
};

export const useSearchMovies = (search: string | null, page: number) => {
  return useQuery({
    queryKey: ["search-movies"],
    queryFn: () => getSearchMovies(search, page),
  });
};

export const useNowPlayingMovies = (page: number) => {
  return useQuery({
    queryKey: ["now-playing-movies"],
    queryFn: () => getNowPlayingMovies(page),
    placeholderData: keepPreviousData,
  });
};

export const useMovieDetail = (
  queryKey: string,
  id: string,
  additionalUrl?: string
) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => getMovieDetail(id, additionalUrl),
  });
};

export const usePopularMovies = (page: number) => {
  return useQuery({
    queryKey: ["popular-movies"],
    queryFn: () => getPopularMovies(page),
  });
};

export const useTrendingTv = () => {
  return useQuery({
    queryKey: ["trending-Tv"],
    queryFn: getTrendingTv,
  });
};

export const useTvShows = (page: number) => {
  return useQuery({
    queryKey: ["discover-Tv"],
    queryFn: () => getTvShows(page),
  });
};

export const usePopularTv = (page: number) => {
  return useQuery({
    queryKey: ["popular-Tv"],
    queryFn: () => getPopularTv(page),
  });
};

export const useTvDetail = (
  queryKey: string,
  id: string,
  additionalUrl?: string
) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => getTvDetail(id, additionalUrl),
  });
};

export const useSearchTv = (search: string | null, page: number) => {
  return useQuery({
    queryKey: ["search-tv"],
    queryFn: () => getSearchTv(search, page),
  });
};