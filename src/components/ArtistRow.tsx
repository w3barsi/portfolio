import type { ArtistResponse } from '@api/artists';

export default function ArtistRow({
    item,
    index,
}: {
    ArtistRow: ArtistResponse;
    index: number;
}) {
    return (
        <a href={item.url} target="_blank">
            <div className="flex w-full rounded-md py-3 hover:bg-[#121212]/70 ">
                <div className="ml-6 mr-1 flex w-[30px] items-center">
                    <p className="text-right text-lg text-white">{index + 1}</p>
                </div>
                <div className="h-[70px] w-[70px]">
                    <img
                        src={item.img.url}
                        className="object-contain object-center"
                        height="70px"
                        width="70px"
                        alt={item.name}
                    />
                </div>
                <div className="flex flex-col justify-center ">
                    <p className="px-3 text-lg text-white">{item.name}</p>
                </div>
            </div>
        </a>
    );
}
