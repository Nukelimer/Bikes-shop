

import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";


function CheckoutBtn() {
  const { clearCart } = useShoppingCart();

  return (
    <>
      <Link href={"/"}>
        <button
          className="btn btn-primary w-full"
          onClick={() => {
            clearCart();
          }}>
          Checkout
        </button>
      </Link>
    </>
  );
}

export default CheckoutBtn;
