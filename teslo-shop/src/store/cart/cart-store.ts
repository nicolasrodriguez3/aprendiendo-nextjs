import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartProduct, SummaryInformation } from "@/interfaces";

interface State {
  cart: CartProduct[];

  getTotalItems: () => number;
  getSummaryInformation: () => SummaryInformation;
  addProductToCart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProductFromCart: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      // Methods
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((acc, item) => item.quantity + acc, 0);
      },

      getSummaryInformation() {
        const { cart } = get();

        const subTotal = cart.reduce(
          (acc, product) => product.quantity * product.price + acc,
          0,
        );

        const tax = subTotal * 0.21;
        const total = subTotal + tax;
        const itemsInCart = cart.reduce(
          (acc, product) => product.quantity + acc,
          0,
        );

        return {
          subTotal,
          tax,
          total,
          itemsInCart,
        };
      },

      addProductToCart: (product) => {
        const { cart } = get();
        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size,
        );

        if (!productInCart) {
          return set({
            cart: [...cart, product],
          });
        }

        const updatedCart = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }

          return item;
        });

        set({ cart: updatedCart });
      },

      updateProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();

        const updatedCart = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: quantity };
          }

          return item;
        });

        set({ cart: updatedCart });
      },
      removeProductFromCart(product: CartProduct) {
        const { cart } = get();

        const updatedCart = cart.filter((item) => {
          return item.id !== product.id || item.size !== product.size;
        });

        set({ cart: updatedCart });
      },
    }),
    {
      name: "shopping-cart",
    },
  ),
);
