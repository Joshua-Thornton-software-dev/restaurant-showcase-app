import Image from 'next/image';

// Image by evening_tao on Freepik : https://www.freepik.com/free-photo/restaurant-interior_1243339.htm#query=restaurant%20interior&position=1&from_view=keyword&track=ais&uuid=67580ef5-36d1-4b96-92d2-47a2336d3629
export default function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center h-auto w-screen'>
      <Image
        className='blur-sm'
        src={'/restaurant-interior.jpg'}
        alt='Home page background - restaurant interior'
        fill
        sizes='100vw'
        style={{objectFit: 'cover', zIndex: "-10"}}
      />

      <div className="">
        
      </div>
    </div>
  );
}
