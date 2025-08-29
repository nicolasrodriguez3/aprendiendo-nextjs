import { getCookie, hasCookie, setCookie } from "cookies-next"

export const getCookieCart = async (): Promise<{ [id: string]: number }> => {
  const hasCartCookie = await hasCookie("cart")

  if (!hasCartCookie) {
    return {}
  }

  const cookieCart = JSON.parse((getCookie("cart") as string) ?? {})
  return cookieCart
}

export const addProductToCart = async (id: string): Promise<void> => {
  const cookieCart = await getCookieCart()
  cookieCart[id] = (cookieCart[id] || 0) + 1

  setCookie("cart", JSON.stringify(cookieCart))
}

export const removeProductFromCart = async (id: string): Promise<void> => {
  const cookieCart = await getCookieCart()
  delete cookieCart[id]

  setCookie("cart", JSON.stringify(cookieCart))
}