import Link from "next/link";
import { titleFont } from "@/config/fonts";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-6 gap-6">
      <Link href="/">
        <span className={`${titleFont.className} font-bold`}>Teslo</span>
        <span> | Shop</span>
        <span> &copy; {new Date().getFullYear()}</span>
      </Link>
      <Link href="/">Privacidad & Legal</Link>
      <Link href="/">Ubicaciones</Link>
    </div>
  );
};
