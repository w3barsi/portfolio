import { nowPlaying, SpotifyArtist } from "../../lib/spotify";

export type NowPlayingTrackResponse = {
  isPlaying: boolean;
  title: string;
  artist: string;
  url: string;
  img: string;
};

export const get = async () => {
  const response = await nowPlaying();

  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
    });
  }

  const { item } = await response.json();

  const track = {
    isPlaying: true,
    title: item.name,
    artist: item.artists
      .map((_artist: SpotifyArtist) => _artist.name)
      .join(", "),
    url: item.external_urls.spotify,
    img: item.album.images[0].url,
  };

  return new Response(JSON.stringify(track), {
    status: 200,
  });
};
