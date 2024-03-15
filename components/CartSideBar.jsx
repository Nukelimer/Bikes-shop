"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Sheet, SheetHeader, SheetTitle, SheetContent } from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import CartItem from "./CartItem";
import React from "react";
import CheckoutBtn from "./CheckoutBtn";

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function CartSideBar() {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice,
  } = useShoppingCart();

  const formattedPrice = formatNumberWithCommas(totalPrice);
  return (
    <div>
      <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()} >
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-left mb-12">
              My Shopping Cart {cartCount < 1 ? "Item" : "Items"} ({cartCount})
            </SheetTitle>
          </SheetHeader>

          <React.Fragment>
            {cartCount === 0 ? (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <p className="font-semibold text-xl">
                  You haven&apos;t added a bike to your cart.{" "}
                </p>
              </div>
            ) : (
              <ScrollArea className=" h-[70vh] xl:h-[74vh] pr-4 mb-4">
                {cartDetails &&
                  Object.entries(cartDetails).map(([key, item]) => {
                    return <CartItem key={key} item={item} />;
                  })}
              </ScrollArea>
            )}
          </React.Fragment>

          {cartCount > 0 && (
            <div className=" " >
              
              <div className="flex justify-between font-semibold mb-4 border-b-2 border-black/80">
              <div className="">Total</div>
              <div className="">₦{formattedPrice}</div>
              </div>
           <CheckoutBtn/>
           </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default CartSideBar;
