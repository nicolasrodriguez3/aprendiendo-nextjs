
export default async function ({ params }: {params: Promise<{ id: string }>}) {
    const { id } = await params;
    return (
        <div>
            <h1>Category Page {id}</h1>
        </div>
    );
}