import request from "request";
import * as cheerio from "cheerio";
import baseUrl from "../utils/baseUrl.js";

const baseURL = baseUrl.komik;

export const getMangaKomik = (req, res) => {
  const page = req.query.page || 1;
  const order = req.query.order || "update";

  request(
    `${baseURL}/manga/?page=${page}&type=manga&order=${order}`,
    (error, response, body) => {
      if (response.statusCode !== 200) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      const $ = cheerio.load(body);
      const data = [];

      const prevPage = $(".l").length > 0 || $(".prev").length > 0;
      const nextPage = $(".r").length > 0 || $(".next").length > 0;

      $(".listupd .bs").each((i, e) => {
        const title = $(e).find("a").attr("title");
        const image = $(e).find("img").attr("src");
        const chapter = $(e).find(".epxs").text().trim();
        const score = $(e).find(".numscore").text();
        const type = $(e).find("span.type").attr("class").split(" ").pop();
        const komik_id = $(e).find("a").attr("href").split("/")[4];

        data.push({
          title,
          image,
          chapter,
          score,
          type,
          komik_id,
        });
      });
      res.json({
        data,
        prevPage,
        nextPage,
      });
    }
  );
};

export const getManhwaKomik = (req, res) => {
  const page = req.query.page || 1;
  const order = req.query.order || "update";

  request(
    `${baseURL}/manga/?page=${page}&type=manhwa&order=${order}`,
    (error, response, body) => {
      if (response.statusCode !== 200) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      const $ = cheerio.load(body);
      const data = [];

      const prevPage = $(".l").length > 0 || $(".prev").length > 0;
      const nextPage = $(".r").length > 0 || $(".next").length > 0;

      $(".listupd .bs").each((i, e) => {
        const title = $(e).find("a").attr("title");
        const image = $(e).find("img").attr("src");
        const chapter = $(e).find(".epxs").text().trim();
        const score = $(e).find(".numscore").text();
        const type = $(e).find("span.type").attr("class").split(" ").pop();
        const komik_id = $(e).find("a").attr("href").split("/")[4];

        data.push({
          title,
          image,
          chapter,
          score,
          type,
          komik_id,
        });
      });
      res.json({
        data,
        prevPage,
        nextPage,
      });
    }
  );
};

export const getManhuaKomik = (req, res) => {
  const page = req.query.page || 1;
  const order = req.query.order || "update";

  request(
    `${baseURL}/manga/?page=${page}&type=manhua&order=${order}`,
    (error, response, body) => {
      if (response.statusCode !== 200) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      const $ = cheerio.load(body);
      const data = [];

      const prevPage = $(".l").length > 0 || $(".prev").length > 0;
      const nextPage = $(".r").length > 0 || $(".next").length > 0;

      $(".listupd .bs").each((i, e) => {
        const title = $(e).find("a").attr("title");
        const image = $(e).find("img").attr("src");
        const chapter = $(e).find(".epxs").text().trim();
        const score = $(e).find(".numscore").text();
        const type = $(e).find("span.type").attr("class").split(" ").pop();
        const komik_id = $(e).find("a").attr("href").split("/")[4];

        data.push({
          title,
          image,
          chapter,
          score,
          type,
          komik_id,
        });
      });
      res.json({
        data,
        prevPage,
        nextPage,
      });
    }
  );
};

export const getSearchKomik = (req, res) => {
  const page = req.query.page || 1;
  const query = req.query.query;

  request(`${baseURL}/page/${page}/?s=${query}`, (error, response, body) => {
    if (response.statusCode !== 200) {
      return res.status(500).json({
        status: false,
        message: error,
      });
    }

    const $ = cheerio.load(body);
    const data = [];

    const prevPage = $(".l").length > 0 || $(".prev").length > 0;
    const nextPage = $(".r").length > 0 || $(".next").length > 0;

    $(".listupd .bs").each((i, e) => {
      const title = $(e).find("a").attr("title");
      const image = $(e).find("img").attr("src");
      const chapter = $(e).find(".epxs").text().trim();
      const score = $(e).find(".numscore").text();
      const type = $(e).find("span.type").attr("class").split(" ").pop();
      const komik_id = $(e).find("a").attr("href").split("/")[4];

      data.push({
        title,
        image,
        chapter,
        score,
        type,
        komik_id,
      });
    });
    res.json({
      data,
      prevPage,
      nextPage,
    });
  });
};

export const getGenreList = (req, res) => {
  request(`${baseURL}/daftar-manga/`, (error, response, body) => {
    if (response.statusCode !== 200) {
      return res.status(500).json({
        status: false,
        message: error,
      });
    }

    const $ = cheerio.load(body);
    const data = [];

    $("div.filter:nth-child(1) ul li").each((i, e) => {
      const name = $(e).text().trim();
      const genre_id = $(e).find("input").attr("value");

      data.push({
        name,
        genre_id,
      });
    });
    res.json(data);
  });
};

export const getGenreKomik = (req, res) => {
  const { genre_id } = req.params;
  const page = req.query.page || 1;
  const order = req.query.order || "update";

  request(
    `${baseURL}/manga/?page=${page}&genre[]=${genre_id}&order=${order}`,
    (error, response, body) => {
      if (response.statusCode !== 200) {
        return res.status(500).json({
          status: false,
          message: error,
        });
      }

      const $ = cheerio.load(body);
      const data = [];

      const prevPage = $(".l").length > 0 || $(".prev").length > 0;
      const nextPage = $(".r").length > 0 || $(".next").length > 0;

      $(".listupd .bs").each((i, e) => {
        const title = $(e).find("a").attr("title");
        const image = $(e).find("img").attr("src");
        const chapter = $(e).find(".epxs").text().trim();
        const score = $(e).find(".numscore").text();
        const type = $(e).find("span.type").attr("class").split(" ").pop();
        const komik_id = $(e).find("a").attr("href").split("/")[4];

        data.push({
          title,
          image,
          chapter,
          score,
          type,
          komik_id,
        });
      });
      res.json({
        data,
        prevPage,
        nextPage,
      });
    }
  );
};

export const getDetailKomik = (req, res) => {
  const { komik_id } = req.params;

  request(`${baseURL}/manga/${komik_id}`, (error, response, body) => {
    if (response.statusCode !== 200) {
      return res.status(500).json({
        status: false,
        message: error,
      });
    }

    const $ = cheerio.load(body);

    const title = $(".entry-title").text();
    const alternativeTitle = $(".seriestualt").text().trim();
    const image = $(".thumb img").attr("src");
    const score = $(".num").text();
    const synopsis = $(".entry-content").text().trim();
    const status = $(".infotable tr:contains('Status')")
      .text()
      .replace("Status", "")
      .trim();
    const type = $(".infotable tr:contains('Type')")
      .text()
      .replace("Type", "")
      .trim();
    const released = $(".infotable tr:contains('Released')")
      .text()
      .replace("Released", "")
      .trim();
    const author = $(".infotable tr:contains('Author')")
      .text()
      .replace("Author", "")
      .trim();
    const artist = $(".infotable tr:contains('Artist')")
      .text()
      .replace("Artist", "")
      .trim();
    const serialization = $(".infotable tr:contains('Serialization')")
      .text()
      .replace("Serialization", "")
      .trim();
    const postedBy = $(".infotable tr:contains('Posted By')")
      .text()
      .replace("Posted By", "")
      .trim();
    const postedOn = $(".infotable tr:contains('Posted On')")
      .text()
      .replace("Posted On", "")
      .trim();
    const updatedOn = $(".infotable tr:contains('Updated On')")
      .text()
      .replace("Updated On", "")
      .trim();
    const genres = $(".seriestugenre a")
      .map((i, e) => $(e).text())
      .get();
    const chapterList = $("#chapterlist ul li")
      .map((i, e) => ({
        title: $(e).find(".chapternum").text(),
        date: $(e).find(".chapterdate").text(),
        chapter_id: $(e).find("a").attr("href")?.split("/")[3],
      }))
      .get();

    res.json({
      title,
      alternativeTitle,
      image,
      score,
      synopsis,
      status,
      type,
      released,
      author,
      artist,
      serialization,
      postedBy,
      postedOn,
      updatedOn,
      genres,
      chapterList,
    });
  });
};

export const getChapterKomik = (req, res) => {
  const { chapter_id } = req.params;

  request(`${baseURL}/${chapter_id}`, (error, response, body) => {
    if (response.statusCode !== 200) {
      return res.status(500).json({
        status: false,
        message: error,
      });
    }

    const $ = cheerio.load(body);

    const script = $("script:contains('ts_reader.run')").html();
    const data = JSON.parse(script.match(/ts_reader\.run\((\{.*?\})\);/)[1]);

    const title = $(".entry-title").text();
    const komik_id = $(".allc a").attr("href").split("/")[4];
    const prev_chapter_id = data.prevUrl.split("/")[3];
    const next_chapter_id = data.nextUrl.split("/")[3];
    const downloadUrl = $(".dlx a").attr("href");
    const images = data.sources[0].images;

    res.json({
      title,
      komik_id,
      prev_chapter_id,
      next_chapter_id,
      downloadUrl,
      images,
    });
  });
};
