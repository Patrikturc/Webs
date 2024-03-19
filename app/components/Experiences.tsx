const experiences = [
  {
    title: "Software Engineer",
    description: "Company A",
    details: [
      "Developed a web application using React and Redux",
      "Implemented RESTful APIs with Node.js",
      "Optimized application performance for scalability",
    ],
  },
  {
    title: "Frontend Developer",
    description: "Company B",
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
    <div className="bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
            <p className="text-gray-800">{experience.description}</p>
            <ul className="mt-4">
              {experience.details.map((detail, index) => (
                <li key={index} className="text-sm text-gray-600">
                  - {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
