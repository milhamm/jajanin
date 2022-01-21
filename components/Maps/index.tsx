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
    <div className='mobile:text-sm'>
      <div className='mb-4 relative'>
        <div className='h-[200px]' ref={mapContainerRef}></div>
      </div>
      <p className='font-semibold text-lg mobile:text-base'>Direction</p>
      <div>Maps</div>
      <p>{address}</p>
      <div className='flex gap-4 mt-4'>
        <div className='flex justify-center items-center gap-2 border px-2 rounded-lg'>
          <MdOutlineContentCopy />
          <button onClick={() => navigator.clipboard.writeText(address)}>
            Copy
          </button>
        </div>
        <div className='flex justify-center items-center gap-2 border px-2 py-1 rounded-lg'>
          <RiDirectionFill />
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${long}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>Direction</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maps;
