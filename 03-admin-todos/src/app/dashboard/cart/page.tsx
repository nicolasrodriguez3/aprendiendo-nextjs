import { Product } from "@/products/data/products";
import { cookies } from "next/headers";
import { products } from '../../../products/data/products';
import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { WidgetItem } from '../../../components/WidgetItem';


export const metadata = {
    title: 'Productos en el carrito',
    description: 'Productos en el carrito',
};

interface ProductInCart {
    product: Product,
    quantity: number
}

const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
    const productsInCart: ProductInCart[] = []

    for (const id in cart) {
        const product = products.find(product => product.id === id)
        if (product) {
            productsInCart.push({
                product,
                quantity: cart[id]
            })

        }
    }

    return productsInCart
}

export default async function CartPage() {
    const cookiesStore = await cookies()
    const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as { [id: string]: number }
    const productsInCart = getProductsInCart(cart)

    const totalToPay = productsInCart.reduce((acc, item) => {
        return acc + item.product.price * item.quantity
        }, 0)
    

    return (
        <div>
            <h1 className="text-4xl">Productos en el carrito</h1>
            <hr className="my-2" />
            <div className="flex flex-col sm:flex-row w-full">
                <div className="flex flex-col gap-2 w-full sm:w-2/3">
                    {
                        productsInCart.map(item => (
                            <ItemCard key={item.product.id} product={item.product} quantity={item.quantity} />
                        ))
                    }
                </div>

                <div className="flex flex-col gap-2 w-full sm:w-1/3">
                    <WidgetItem title="Total a pagar">
                        <div className="mt-2 flex flex-col gap-2 justify-center items-center">
                            <h3 className="text-2xl font-bold to-gray-700">
                                {totalToPay.toFixed(2)}
                            </h3>
                        </div>
                    </WidgetItem>
                </div>
            </div>
        </div>
    );
}