import type { SpotifySectionType } from '../types/spotify';
import { useEffect, useState } from 'preact/hooks';

import '../../scrollbar.css';
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
    <div className="h-full w-full rounded-sm p-3 ">
      <div className="h-full scroll overflow-auto rounded-md bg-black p-3">
        <p className="pl-3 pb-1 text-white">Now Playing: </p>
        {nowPlaying.isPlaying && (
          <a href={nowPlaying.url} target="_blank">
            <div className="h-24 flex items-center rounded-md p-3 transition-colors duration-200 hover:bg-[#121212]">
              <img src={nowPlaying.img} height="70px" width="70px" />
              <div className="pl-3">
                <p className="font-bold text-white">{nowPlaying.title}</p>
                <p className="text-sm text-gray-300">{nowPlaying.artist}</p>
              </div>
            </div>
          </a>
        )}
        {!nowPlaying.isPlaying && (
          <div className="h-24 flex justify-center items-center rounded-md p-3 transition-colors duration-200 hover:bg-[#121212]">
            <p className="text-white">Probably asleep 😴😴😴</p>
          </div>
        )}

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
        </div>

        <div className="flex flex-col overflow-auto overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-spotify-green via-[#052511] to-black p-3">
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
