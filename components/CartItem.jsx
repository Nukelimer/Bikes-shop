import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

import { urlFor } from "@/app/lib/sanity";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";
import { useToast } from "./ui/use-toast";

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function CartItem({ item }) {
    const {toast} = useToast()
  const totalPrice = item.price * item.quantity;

  const formattedPrice = formatNumberWithCommas(totalPrice);
  const { removeItem, decrementItem, incrementItem } = useShoppingCart();
  return (
    <div className="flex mb-4 w-full justify-between h-[120px] border-b items-center">
      <div >
        <Image
          src={urlFor(item.images[0]).url()}
          width={110}
          height={110}
          alt="bike"
          priority
          style={{ width: 'auto', height: 'auto' }}
          
        />
      </div>
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex items-center justify-between">
          <h5> {item.name}</h5>
          {/* <p className="text-end">{ item.price}</p> */}
          <button
            onClick={() => {
                          removeItem(item.id);
                          toast({
                            title: 'Item has been removed successfully!'
                        })     
            }}>
            <FaX className="text-sm" />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
                      <button onClick={() => {
                          
                          toast({
                            title: 'Product has been incremented by 1!'
                        })  
                          incrementItem(item.id)
                      }}>
              {" "}
              <FaPlus />
            </button>
            <div className="font-semibold">{item.quantity}</div>
                      <button onClick={() => {
                          
                          toast({
                            title: 'Product has been decremented by 1!'
                        }) 
                          
                          decrementItem(item.id)
                      }}>
              {" "}
              <FaMinus />
            </button>
          </div>
          <div className="font-semibold text-balance text-right">
            ₦{formattedPrice}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
