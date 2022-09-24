import type { SpotifySectionType } from '../types/spotify';
import { useEffect, useState } from 'preact/hooks';

import '../../styles/globals.css';
import type { TrackResponse } from '../pages/api/tracks';
import type { ArtistResponse } from '@api/artists';
import ArtistRow from '@components/ArtistRow';
import TrackRow from '@components/TrackRow';

export default function SpotifySection({
  tracks,
  nowPlaying,
  artists,
}: SpotifySectionType) {
  const [tab, setTab] = useState<number>(0);

  return (
    <div className="flex flex-col p-3 m-3 bg-black max-h-full rounded-md overflow-hidden">
      <h1 className="flex justify-center font-bold text-2xl">Spotify Stats</h1>
      <p className="mb-2">Now playing:</p>
      {nowPlaying.isPlaying ? (
        <div className="mb-3 py-3 h-24 flex-none hover:bg-[#121212] flex pl-3 flex-row items-center rounded-md">
          <a href={nowPlaying.url} target="_blank">
            <img src={nowPlaying.img} height={70} width={70} />
          </a>
          <div className="ml-3">
            <p className="leading-4 font-bold text-lg">{nowPlaying.title}</p>
            <p className="text-sm">{nowPlaying.artist}</p>
          </div>
        </div>
      ) : (
        <div className="h-24 py-3 mb-3 flex-none flex items-center justify-center">
          Probably asleep 😴😴😴
        </div>
      )}
      <div>
        <div className="flex flex-row items-center">
          <a href="https://open.spotify.com/user/12137127210" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              className="mx-3 fill-spotify-green hover:fill-white"
            >
              <path d="M15,3C8.4,3,3,8.4,3,15s5.4,12,12,12s12-5.4,12-12S21.6,3,15,3z M19.731,21c-0.22,0-0.33-0.11-0.55-0.22 c-1.65-0.991-3.74-1.54-5.94-1.54c-1.21,0-2.53,0.22-3.63,0.44c-0.22,0-0.44,0.11-0.55,0.11c-0.44,0-0.77-0.33-0.77-0.77 s0.22-0.77,0.66-0.77c1.43-0.33,2.861-0.55,4.401-0.55c2.53,0,4.84,0.66,6.82,1.76c0.22,0.22,0.44,0.33,0.44,0.77 C20.39,20.78,20.06,21,19.731,21z M20.94,17.921c-0.22,0-0.44-0.11-0.66-0.22c-1.87-1.21-4.511-1.87-7.37-1.87 c-1.43,0-2.751,0.22-3.74,0.44c-0.22,0.11-0.33,0.11-0.55,0.11c-0.55,0-0.881-0.44-0.881-0.881c0-0.55,0.22-0.77,0.77-0.991 c1.32-0.33,2.641-0.66,4.511-0.66c3.08,0,5.94,0.77,8.361,2.2c0.33,0.22,0.55,0.55,0.55,0.881 C21.82,17.48,21.491,17.921,20.94,17.921z M22.37,14.4c-0.22,0-0.33-0.11-0.66-0.22c-2.2-1.21-5.39-1.98-8.47-1.98 c-1.54,0-3.19,0.22-4.621,0.55c-0.22,0-0.33,0.11-0.66,0.11c-0.66,0.111-1.1-0.44-1.1-1.099s0.33-0.991,0.77-1.1 C9.39,10.22,11.26,10,13.24,10c3.41,0,6.93,0.77,9.681,2.2c0.33,0.22,0.66,0.55,0.66,1.1C23.471,13.96,23.03,14.4,22.37,14.4z"></path>
            </svg>
          </a>
          <h3
            onClick={() => setTab(0)}
            className={`${
              !tab ? 'bg-spotify-green text-black' : 'bg-[#121212]'
            } px-3 py-2 rounded-tl-md cursor-pointer`}
          >
            Top Tracks
          </h3>
          <h3
            onClick={() => setTab(1)}
            className={`${
              tab ? 'bg-spotify-green text-black' : 'bg-[#121212]'
            } px-3 py-2 rounded-tr-md cursor-pointer`}
          >
            Top Artists
          </h3>
        </div>
      </div>
      <div className="overflow-auto scroll-none bg-spotify-green p-3 rounded-md">
        <div className="bg-black/50 p-3 rounded-md">{!tab ? 
        tracks.map((item: TrackResponse, index: number) => (
        <TrackRow item={item} index={index}/>
        ))
        :
        artists.map((item: ArtistResponse, index: number) => (
        <ArtistRow item={item} index={index}/>
        ))
        }</div>
      </div>
    </div>
  );
}
