import Image from "next/image";
import { Poppins } from 'next/font/google';
import { cn } from "@/lib/utils"; 

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})
export const Logo = () => {
    return (
        <div className="hidden md:flex item-center gap-x-2">
            <Image 
                src = "/logoapp.jpg"
                height= "30"
                width="30"
                alt="logo"
                // className="dark:hidden"
            />

            {/* in case for 2 image for dark mode and light mode */}
            {/* <Image 
                src = "/logoapp-for-dark.jpg"
                height= "30"
                width="30"
                alt="logo"
                className="hidden dark:block" 
            /> */}
            <p className={cn("font-semibold", font.className)}>
                Jotion
            </p>
        </div>
    )
}