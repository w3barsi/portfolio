import { Fragment } from 'preact';
import { useState } from 'preact/hooks';

import type { SpotifySectionType } from '@appTypes/spotify';

export default function SpotifySection({
  tracks,
  nowPlaying,
  artists,
}: SpotifySectionType) {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <div>Idk why i am getting this error even after restarting</div>
  );
}
