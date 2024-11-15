import Image, { StaticImageData } from "next/image";
import { FC } from "react";

export type ItemProps = {
    id: number,
    name?: string,
    path?: StaticImageData,
    price?: number,
    quantity?: number,
}


type CardProductProps = {
    item: ItemProps,
    addItem: (item: ItemProps) => void
};

const CardProduct: FC<CardProductProps> = ({
    item,
    addItem
}) => {

    const onAddItem = (item: ItemProps) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.getElementById('modalCart').showModal()
        addItem(item)
    }

    return (
        <div
            key={item?.id}
            className="shadow-md rounded-lg p-3 w-full"
        >
            <Image src={item?.path || ''} alt='product' className="w-full md:min-w-40" />
            <div className="flex justify-between w-full mt-2 items-center flex-col md:flex-row">
                <p className="sm:text-lg md:text-sm text-black">${item?.price}</p>
                <button
                    className="uppercase sm:text-md md:text-xxs text-white bg-primary rounded-lg p-1 min-w-3"
                    onClick={() => onAddItem(item)}
                >
                    buy now
                </button>
            </div>
        </div>
    )
}

export default CardProduct;