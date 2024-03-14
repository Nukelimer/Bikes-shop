"use client";

import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "./ui/use-toast";

function AddToCartBtn({
  btnStyles,
  icon,
  text,
  currency,
  price,
  images,
  description,
  name,
  id,
}) {
  const { toast } = useToast();
  const { addItem } = useShoppingCart();

  const bike = {
    id,
    currency,
    price,
    images,
    description,
    name,
  };

  
  return (
    <button
      className={`${btnStyles}`}
      onClick={() => {
    
        toast({
          title: `${name} has been added to cart!`,
        });
        addItem(bike);
      }}>
      <div className="">{icon}</div>
      <p className="flex">{text}</p>
    </button>
  );
}

export default AddToCartBtn;
