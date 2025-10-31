// src/services/youtube.js
const API_KEY = import.meta.env.VITE_YT_API_KEY;
const PLAYLIST_ID = import.meta.env.VITE_YT_PLAYLIST_ID; // definido no .env
const BASE_URL = "https://www.googleapis.com/youtube/v3";

/** Lista itens de um playlist do YouTube */
export async function listPlaylistItems({ pageToken = "", maxResults = 10 } = {}) {
  const url = new URL(`${BASE_URL}/playlistItems`);
  url.searchParams.set("part", "snippet,contentDetails");
  url.searchParams.set("playlistId", PLAYLIST_ID);
  url.searchParams.set("maxResults", String(maxResults));
  if (pageToken) url.searchParams.set("pageToken", pageToken);
  url.searchParams.set("key", API_KEY);

  const res = await fetch(url.toString());
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`YouTube API error ${res.status}: ${msg}`);
  }
  return res.json();
}
