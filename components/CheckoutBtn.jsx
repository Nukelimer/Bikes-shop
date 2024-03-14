import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "./ui/use-toast";
import {useRouter} from "next/router";

function CheckoutBtn() {
  const toast = useToast();
  const { clearCart } = useShoppingCart();
  const router = useRouter()
  return (
    <button
      className="btn btn-primary w-full"
      onClick={() => {
        toast({
          title: `you have bought all your item`,
        });
        clearCart();
        router.push('/')
      }}>
      Checkout
    </button>
  );
}

export default CheckoutBtn;
