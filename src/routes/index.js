import express from "express";
import {
  getOngoingAnime,
  getFinishedAnime,
  getMovieAnime,
  getSearchAnime,
  getScheduleAnime,
  getPropertiesList,
  getPropertiesAnimeList,
  getDetailAnime,
  getEpisodeAnime,
} from "../controllers/animeController.js";
import {
  getMangaKomik,
  getManhwaKomik,
  getManhuaKomik,
  getSearchKomik,
  getDetailKomik,
  getChapterKomik,
  getGenreList,
  getGenreKomik,
} from "../controllers/komikController.js";

const router = express.Router();

router.get("/anime/ongoing", getOngoingAnime);
router.get("/anime/finished", getFinishedAnime);
router.get("/anime/movie", getMovieAnime);
router.get("/anime/search", getSearchAnime);
router.get("/anime/schedule", getScheduleAnime);
router.get("/anime/properties/:properties_type", getPropertiesList);
router.get("/anime/properties/:properties_type/:properties_id", getPropertiesAnimeList);
router.get("/anime/:anime_code/:anime_id", getDetailAnime);
router.get("/anime/:anime_code/:anime_id/episode/:episode_number", getEpisodeAnime);
router.get("/komik/manga", getMangaKomik);
router.get("/komik/manhwa", getManhwaKomik);
router.get("/komik/manhua", getManhuaKomik);
router.get("/komik/search", getSearchKomik);
router.get("/komik/genres", getGenreList);
router.get("/komik/genre/:genre_id", getGenreKomik);
router.get("/komik/:komik_id", getDetailKomik);
router.get("/komik/chapter/:chapter_id", getChapterKomik);

export default router;
