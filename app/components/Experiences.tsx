interface IExperience {
  title: string;
  backgroundImageUrl: string;
  URL: string;
}

type ExperiencesType = IExperience[];

const experiences:ExperiencesType = [
  {
    title: "Student",
    backgroundImageUrl: "banner.jpeg",
    URL: "https://github.com/zuikeviciute",
  },
  {
    title: "Frontend Developer",
    backgroundImageUrl: "banner.jpeg",
    URL: "https://github.com/zuikeviciute",
  },
  {
    title: "Frontend Developer",
    backgroundImageUrl: "banner.jpeg",
    URL: "https://github.com/zuikeviciute",
  },
  {
    title: "Frontend Developer",
    backgroundImageUrl: "banner.jpeg",
    URL: "https://github.com/zuikeviciute",
  },
  {
    title: "Frontend Developer",
    backgroundImageUrl: "banner.jpeg",
    URL: "https://github.com/zuikeviciute",
  },
  // Add more experiences as needed
];

export function Experiences() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience, index) => (
          <a key={index} href={experience.URL}>
            <div className="relative shadow-md">
            <img src={experience.backgroundImageUrl} alt="Banner" className="w-full object-cover rounded-lg"/>
            <h3 className="absolute left-7 bottom-1 text-white text-xl font-semibold mb-2">{experience.title}</h3>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}
