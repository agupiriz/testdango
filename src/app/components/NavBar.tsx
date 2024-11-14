'use client'
import Image from "next/image";
import { useContext, useState } from "react";
import MenuIcon from '@/assets/icons/menu-icon.svg'
import CartIcon from '@/assets/icons/cart-icon.png'
import CartNotification from '@/assets/icons/eclipse.png'
import { usePathname } from 'next/navigation'
import { CartContext } from "../provider/cart";

const menuItems = [
    { path: "/", title: "Inicio" },
    { path: "/item1", title: "Item 1" },
    { path: "/item1", title: "Item 2" },
    { path: "/item1", title: "Item 3" },
    { path: "/item1", title: "Item 4" },
    { path: "/item1", title: "Item 5" },
];

const NavBar = () => {
    const pathname = usePathname()
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const { cartItems } = useContext<any>(CartContext);


    const toggleMenu = () => {
        setMobileMenuIsOpen(!mobileMenuIsOpen);
    };

    const onViewCart = () => {
        document.getElementById('modalCart').showModal()
    };

    return (
        <nav className="bg-white  shadow uppercase z-40">
            <div className="my-4">
                <div className={`${mobileMenuIsOpen ? 'hidden' : 'block'}`}>
                    <div className="mr-2 hidden md:flex w-full items-center justify-center ">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.path}
                                className={`block px-3 text-base ${pathname === item.path && 'font-bold'}
                                  ${pathname === item.path && 'border-b-2'} border-primary text-primary hover:border-b-2`}
                            >
                                {item.title}
                            </a>
                        ))}
                        <button className="absolute right-0 mr-3 cursor-pointer" onClick={onViewCart}>
                            <div className="">
                                <Image src={CartIcon} alt="cart-icon"></Image>
                                {cartItems?.length > 0 && <Image src={CartNotification} alt="cart-notification" className="-mt-2 absolute right-0"></Image>}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="bg-white p-2"
                >
                    <Image src={MenuIcon} alt="menu-icon" width={20}></Image>
                </button>

                <button className="absolute right-0 mr-3 cursor-pointer" onClick={onViewCart}>
                    <div className="">
                        <Image src={CartIcon} alt="cart-icon"></Image>
                        {cartItems?.length > 0 && <Image src={CartNotification} alt="cart-notification" className="-mt-2 absolute right-0"></Image>}
                    </div>
                </button>
            </div>

            <div className={`w-full bg-red text-primary ${mobileMenuIsOpen ? 'block' : 'hidden'}`}>
                <div className="mx-3">
                    <div className="relative">
                        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md">
                            {menuItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.path}
                                    className={`block px-3 py-2 rounded-md text-base text-primary ${pathname === item.path && 'font-bold'} text-gray-700 hover:bg-gray-50 hover:text-gray-900`}>
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default NavBar;