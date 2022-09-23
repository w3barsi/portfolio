import type { TrackResponse } from '../pages/api/tracks';

export default function TrackRow({ item, index }: { item: TrackResponse, index: number }) {
  return (
    <a href={item.url} target="_blank">
      <div className="flex w-full rounded-md py-3 hover:bg-[#121212]/70 ">
        <div className="ml-6 mr-1 flex w-[30px] items-center">
          <p className="text-right text-lg text-white">{index + 1}</p>
        </div>
        <div className="h-[70px] w-[70px]">
          <img
            src={item.img}
            className="object-contain object-center "
            height={70}
            width={70}
            alt={item.title}
          />
        </div>
        <div className="flex flex-col justify-center ">
          <p className="px-3 text-lg font-semibold text-white">{item.title}</p>
          <p className="px-3 text-md text-white">{item.artist}</p>
        </div>
      </div>
    </a>
  );
}
