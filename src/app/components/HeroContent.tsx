import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import RightArrow from '@/assets/icons/rigth_arrow.png'
import GreenRightArrow from '@/assets/icons/arrow_rigth_green.png'


type HeroContentProps = {
    title: string,
    subtitle: string,
    description: string,
    image: StaticImageData
};

const HeroContent: FC<HeroContentProps> = ({
    title,
    subtitle,
    description,
    image
}) => {
    return (
        <div className="flex flex-col md:flex-row w-full md:justify-between mt-8">
            <div className="flex flex-col">
                <div className='md:text-4xl text-2xl text-primary text-center md:text-left mt-4'>
                    <p>{title}</p>
                    <p>{subtitle}</p>
                </div>
                <div className='hidden md:max-w-96 md:flex my-4'>
                    <p>{description}</p>
                </div>
                <div className='flex flex-col items-center text-xs md:flex-row md:items-start'>
                    <button
                        className='flex items-center justify-between p-3 bg-primary border-primary border-2 rounded-md mt-4 text-white w-full max-w-44 uppercase md:mr-2'
                    >
                        <p>Shop now</p>
                        <Image src={RightArrow} alt='arrowleft' />
                    </button>
                    <button
                        className='flex items-center justify-between p-3 bg-transparent border-primary border-2 rounded-md my-4 text-primary w-full max-w-44 uppercase'
                    >
                        <p>take the quiz</p>
                        <Image src={GreenRightArrow} alt='arrowrigth' />
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <Image src={image} alt='hero-image' width={170} />
            </div>
        </div>
    )
}

export default HeroContent;