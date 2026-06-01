interface CardProps {
    title: string;
    description: string;
}


export default function Card({ title, description }: CardProps) {
    return (
        <div className="bg-prussian block max-w-lg p-6 rounded-lg shadow-xs">
            <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8 text-alabaster">{title}</h5>
            <p className="text-body mb-6 text-alabaster font-semibold">{description}</p>
        </div>
    );
}