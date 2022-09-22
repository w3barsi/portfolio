import type { TrackResponse } from '@api/tracks'
import type { ArtistResponse } from '@api/artists'
import type { NowPlayingTrackResponse } from '@api/now';

export type SpotifySectionType = {
  tracks: TrackResponse,
  artists: ArtistResponse,
  nowPlaying: NowPlayingTrackResponse
}
