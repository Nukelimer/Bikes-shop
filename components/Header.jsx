"use client";

import React from "react";
import Nav from "./Nav";
import CartSideBar from "./CartSideBar";
import Link from "next/link";
import { CgShoppingBag } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";

function Header() {
  const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <header className="sticky top-0 bg-white shadow-lg py-8 z-40">
      <div className="flex container mx-auto items-center justify-between">
        <Link href={"/"}>
          <div className="flex">BIKE-SHOP</div>
        </Link>

        <div className="flex items-center gap-[26px]">
          <Nav containerStyle={"gap-8 flex"} />
          <div className="relative" onClick={() => handleCartClick()}>
            <CgShoppingBag className="text-[26px]" />
            <div className="bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex justify-center items-center">
              {cartCount}
            </div>
          </div>
          <CartSideBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
