export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex justify-center">
      <div className="w-full sm:w-sm px-10">{children}</div>
    </main>
  );
}
