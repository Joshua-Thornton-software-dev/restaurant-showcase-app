import Image from 'next/image';
import { PropsWithChildren } from 'react';

type Page_With_BG_Props = {
  src: string,
  alt: string
};

export default function Page_With_BG({
  children,
  src: source,
  alt: altText
}: PropsWithChildren<Page_With_BG_Props>) {
    return (
      <div className='flex flex-col justify-center items-center h-auto w-screen mt-6'>
        <Image
          className='blur-sm'
          src={source}
          alt={altText}
          fill
          sizes='100vw'
          style={{objectFit: 'cover', zIndex: "-10"}}
        />
  
        <div className="">
          {children}
        </div>
      </div>
    );
  }