import { useContext } from "react";
import { CartContext } from "../provider/cart";


const ModalCart = () => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const { cartItems, removeItem, totalCart } = useContext<any>(CartContext);

    return (
        <div>
            <dialog id="modalCart" className="modal bg-white rounded-2xl border-spacing-2 shadow-lg p-4">
                <div className="modal-box md:w-96">
                    <h3 className="font-bold text-lg">Carrito</h3>
                    {cartItems.map((cartItem: any) => (
                        <div key={cartItem.id} className="flex items-center w-full justify-between">
                            <div className="flex">
                                <p className="py-4 px-2">{cartItem?.name}-</p>
                                <p className="py-4 font-bold">${cartItem?.price}</p>
                                <p className="py-4 px-2">x{cartItem?.quantity}</p>
                            </div>
                            <button
                                className="bg-red-500 mx-2 rounded-lg px-4 text-xs h-8 text-center text-white"
                                onClick={() => removeItem(cartItem.id)}
                            >
                                Quitar
                            </button>
                        </div>

                    ))}
                    {cartItems.length === 0 && <p>No se encuentran items</p>}
                    {cartItems.length > 0 &&
                        <div className="my-3">
                            <p>Total: </p>
                            <p className="font-bold">${totalCart}</p>
                        </div>
                    }
                    <div className="modal-action my-6">
                        <form method="dialog">
                            <button className="btn">Cerrar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ModalCart;