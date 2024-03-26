const experiences = [
  {
    title: "Student",
    //description: "University of the West of Scotland",
    details: [
      "Developed a prototype of quantitative algorithmic stock market research software in Python",
      "Using the ASP.Net framework with a combination of JS, CSS and HTML developed scalable web apps",
    ],
  },
  {
    title: "Hobby Developer",
    //description: "Company B",
    details: [
      "Designed responsive web interfaces with HTML, CSS, and JavaScript",
      "Collaborated with designers to convert designs into functional web pages",
      "Managed version control with Git",
    ],
  },
  // Add more experiences as needed
];

export function Experiences() {
  return (
    <div className="bg-gray-100 pl-20 pb-10">
      <h2 className="text-3xl font-semibold mb-0">Experience
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
          {experiences.map((experience, index) => (
            <div key={index} className="px-5">
              <h3 className="text-black text-xl font-semibold mb-2">{experience.title}</h3>
              {/* <p className="text-black text-xl">{experience.description}</p> */}
              <ul className="mt-4">
                {experience.details.map((detail, index) => (
                  <li key={index} className="text-sm text-black">
                    - {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </h2>
    </div>
  );
}
