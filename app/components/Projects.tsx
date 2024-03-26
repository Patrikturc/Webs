const projects = [
    {
        id: "1",
        title: "Public Company Details Research Tool",
        details: [
            "Quickly find items with the highest momentum in a variety of timeframes",
            "Assign weighed score to all companies the selection based on the chosen interval"
        ],
        url: "https://github.com/Patrikturc/MarketResearch"
    },
    {
        id: "2",
        title: "This Website!",
        details: [
            "Work in progress. Learning JS, Remix and version control habbits",
            "Deploying the website for free using Vercel"
        ],
        url: ""
    },
];

export function Projects() {
    return (
        <div className="bg-gray-100 pl-20 pb-10 pt-10">
            <h2 className="text-3xl font-semibold pt-00">Projects
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
                    {projects.map((proj) => (
                        <a href={proj.url}>
                            <div key={proj.id} className="bg-[#6c92d8] back shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                                <ul className="mt-4">
                                    {proj.details.map((detail) => (
                                        <li key={proj.id} className="text-sm">
                                            - {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    ))}
                </div>
            </h2>
        </div>
    );
}
