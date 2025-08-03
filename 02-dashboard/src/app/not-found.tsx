import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Página no encontrada</h2>
      <p>La página que estás buscando no existe.</p>
      <Link href="/dashboard/pokemons">Ir al inicio</Link>
    </div>
  );
}