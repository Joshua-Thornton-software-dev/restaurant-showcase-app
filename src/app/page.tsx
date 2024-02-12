import Image from 'next/image';
import Page_With_BG from './components/page_with_bg/page_with_bg';

// Image by evening_tao on Freepik : https://www.freepik.com/free-photo/restaurant-interior_1243339.htm#query=restaurant%20interior&position=1&from_view=keyword&track=ais&uuid=67580ef5-36d1-4b96-92d2-47a2336d3629
export default function HomePage() {
  return (
    <Page_With_BG
      src='/restaurant-interior.jpg'
      alt='Home page background - restaurant interior'
    >
      <h1>Home</h1>
    </Page_With_BG>
  );
}
