import type { SpotifySectionType } from '../types/spotify';
import { useEffect, useState } from 'preact/hooks';

import type { TrackResponse } from '../pages/api/tracks';
import type { ArtistResponse } from '@api/artists';
import ArtistRow from '@components/ArtistRow';
import TrackRow from '@components/TrackRow';

export default function SpotifySection({
  tracks,
  nowPlaying,
  artists,
}: SpotifySectionType) {
  const [tab, setTab] = useState(0);

  return (
    <div className="h-full w-full rounded-sm p-5 ">
      <div className="h-full overflow-auto rounded-md bg-black p-3">
        <p className="pt-3 pl-3 pb-1 text-white">Now Playing: </p>
        <a href={nowPlaying.url} target="_blank">
          <div className="flex items-center rounded-md p-3 transition-colors duration-200 hover:bg-[#121212]">
            <img src={nowPlaying.img} height="70px" width="70px" />
            <div className="pl-3">
              <p className="font-bold text-white">{nowPlaying.title}</p>
              <p className="text-sm text-gray-300">{nowPlaying.artist}</p>
            </div>
          </div>
        </a>

        <div className="mt-3">
          <button
            onClick={() => setTab(0)}
            className={`rounded-tl-md p-3 ${tab ? 'bg-[#121212] text-white' : 'bg-spotify-green'
              }  `}
          >
            Tracks
          </button>
          <button
            onClick={() => setTab(1)}
            className={`rounded-tr-md p-3 ${!tab ? 'bg-[#121212] text-white' : 'bg-spotify-green text-black'
              } `}
          >
            Artists
          </button>
          <button
            className="rounded-full bg-red-500 p-3 text-black"
          >
            {tab}
          </button>
        </div>

        <div className="flex flex-col overflow-auto overflow-x-hidden  bg-gradient-to-b from-spotify-green via-black to-black p-3">
          {!tab &&
            tracks.map(
              (item: TrackResponse, index: number): JSX.Element => (
                <TrackRow item={item} index={index} />
              )
            )}
          {tab &&
            artists.map((item: ArtistResponse, index: number) => (
              <ArtistRow item={item} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
