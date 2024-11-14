import Image from "next/image";
import { FC } from "react";
import BackIcon from '@/assets/icons/back.png'
import NextIcon from '@/assets/icons/next.png'


type SliderButtonsProps = {
    onNext: () => void,
    onPrev: () => void
};

const SliderButtons: FC<SliderButtonsProps> = ({
    onNext,
    onPrev
}) => {
    return (
        <div className='flex flex-col my-3 text-primary'>
            <div className='flex justify-center md:justify-start'>
                <button
                    className='border-primary border-2 rounded-lg bg-transparent mr-2'
                    onClick={onPrev}
                >
                    <Image src={BackIcon} alt='back' className='my-1 mx-2' />
                </button>
                <button
                    className='border-primary rounded-lg border-2 bg-primary'
                    onClick={onNext}
                >
                    <Image src={NextIcon} alt='next' className='my-1 mx-2' />
                </button>
            </div>
        </div>
    )
}

export default SliderButtons;