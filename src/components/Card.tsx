import cardInfo from "../info/CardInfo.ts"

interface CardProps {
    index: number;
    type?: string;
}

export default function Card({ index, type="N/A" }: CardProps) {
    const {title, paragraph, details, subtitle, skills} = cardInfo[index];
    return (
        <div className="bg-prussian block max-w-5xl w-3xl p-6 rounded-lg shadow-xs">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-heading leading-8 text-blue-500">{title}</h2>
            {type === "Experience" && (
                <>
                    <p className="text-lg mb-3 text-alabaster font-semibold"><span className="rounded-full inline-block mr-2 bg-red-500 w-4 h-4"></span>{paragraph}</p>
                    <p className="text-lg mb-6 ml-6 text-alabaster font-semibold"><li>{details}</li></p>
                    <h2 className="text-2xl font-bold text-heading leading-4 text-blue-500"> {subtitle}:</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {skills?.map((skill, index) => (
                            <span key={index} className="inline-flex items-center bg-dusk/75 border border-dusk text-alabaster text-md font-medium px-2 py-1 rounded">
                                <span className="inline-block h-2 w-2 bg-alabaster rounded-full mr-2"></span>
                                {skill}
                            </span>
                        ))}
                    </div>
                </>
            )}
            {type !== "Experience" && (
                <>
                    <p className="text-lg mb-3 text-alabaster font-semibold">{paragraph}</p>
                    <p className="text-lg mb-6 text-alabaster font-semibold">{details}</p>
                </>
            )}
        </div>
    );
}