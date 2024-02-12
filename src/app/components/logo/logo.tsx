import Image from "next/image";
import { PropsWithChildren } from "react";

interface LogoProps extends PropsWithChildren<any> {
    width?: number,
    height?: number
};

export default function Logo({
    width: w = 64,
    height: h = 64
}: LogoProps) {
    return (
        <div className="">
            <Image
                className="rounded-3xl"
                // png image from pngtree.com: https://pngtree.com/freepng/plate-with-fork-and-knife-icon-flat-style_5105121.html
                src={"/logo.png"}
                alt={""}
                width={w}
                height={h}
            />
        </div>
    );
}