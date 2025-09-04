"use client"
import Image from "next/image";

export const Heroes = () =>{
    return (
        <div className="frex flx-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
                    <Image 
                    src = "/jotion.png"
                    fill
                    className="object-contain dark:hidden"
                    alt="Documents"
                    />
                    {/* image for dark */}
                    <Image 
                    src = "/jotion-dark.png"
                    fill
                    className="object-contain hidden dark:block"
                    alt="Documents"
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image 
                    src = "/reading.png"
                    fill
                    className="object-contain dark:hidden"
                    alt="reading"
                    />
                    <Image 
                    src = "/reading-dark.png"
                    fill
                    className="object-contain hidden dark:block"
                    alt="reading"
                    />
                </div>
            </div>
        </div>
    );
}
