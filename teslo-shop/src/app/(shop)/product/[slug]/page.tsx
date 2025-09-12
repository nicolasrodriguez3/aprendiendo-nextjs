
export default async function ({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    return (
        <div>
            <h1>Product Page</h1>
        </div>
    );
}