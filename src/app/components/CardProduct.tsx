import Image from "next/image";
import { FC } from "react";

type ItemProps = {
    id: number,
    path?: string,
    price?: string
}


type CardProductProps = {
    item: ItemProps,
    addItem: (item: ItemProps) => {}
};

const CardProduct: FC<CardProductProps> = ({
    item,
    addItem
}) => {

    const onAddItem = (item: any) => {
        document.getElementById('modalCart').showModal()
        addItem(item)
    }

    return (
        <div
            key={item?.id}
            className="shadow-md rounded-lg p-3 max-w-40 w-full"
        >
            <Image src={item?.path || ''} alt='product' />
            <div className="flex justify-between w-full mt-2">
                <p className="text-xs text-black">${item?.price}</p>
                <button
                    className="uppercase text-xxs text-white bg-primary rounded-lg p-1"
                    onClick={() => onAddItem(item)}
                >
                    buy now
                </button>
            </div>
        </div>
    )
}

export default CardProduct;