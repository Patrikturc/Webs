
const educationItems = [
  {
    institution: "University of the West of Scotland",
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    years: "2020 - 2023",
  },
  {
    institution: "New College Lanarkshire",
    degree: "Higher National Diploma",
    fieldOfStudy: "Software Development",
    years: "2017 - 2020",
  },
  // Add more education items as needed
];

export function Education() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <ul>
        {educationItems.map((item, index) => (
          <li key={index} className="mb-4">
            <div className="text-lg font-medium">{item.institution}</div>
            <div className="text-md text-gray-800">
              {item.degree} in {item.fieldOfStudy}
            </div>
            <div className="text-sm text-gray-600">{item.years}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
