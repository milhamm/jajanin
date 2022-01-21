import * as React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiDirectionFill } from "react-icons/ri";
import mapboxgl, { Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? "";

type MapProps = {
  lat: number;
  long: number;
  address: string;
};

const Maps = ({ lat, long, address }: MapProps) => {
  const mapContainerRef = React.useRef(null);

  React.useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [long, lat],
        zoom: 13,
        attributionControl: false,
      }) as Map;

      new mapboxgl.Marker().setLngLat([long, lat]).addTo(map);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex flex-col gap-2 mobile:text-sm'>
      <p className='font-semibold text-lg'>Direction</p>
      <div className='mb-4 relative'>
        <div
          className='h-[200px] w-full rounded-xl'
          ref={mapContainerRef}
        ></div>
      </div>
      <p>{address}</p>
      <div className='flex gap-4 mt-4'>
        <button
          onClick={() => navigator.clipboard.writeText(address)}
          className='flex justify-center items-center gap-2 border border-teal-400 py-1 rounded-lg active:border-transparent active:bg-teal-400'
        >
          <p className='text-teal-400 active:text-white flex items-center px-2 gap-1'>
            <MdOutlineContentCopy />
            Copy
          </p>
        </button>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${long}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='flex justify-center items-center gap-2 border border-red-500 py-1 rounded-lg active:border-transparent active:bg-red-500 active:text-white'>
            <p className='text-red-500 active:text-white flex items-center px-2 gap-1'>
              <RiDirectionFill /> Direction
            </p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Maps;
