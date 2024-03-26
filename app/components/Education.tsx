
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
    <div className=" bg-gray-100 mx-auto pl-20 pb-10"> {/* max-w-4xl*/}
      <h2 className="text-3xl font-semibold mb-2">Education</h2>
      <ul className="justify-left flex">
        {educationItems.map((item, index) => (
          <li key={index} className="px-5">
            <div className="text-lg font-medium">{item.institution}</div>
            <div className="text-md text-gray-800">
              {item.degree} in {item.fieldOfStudy}
            </div>
            <div className="text-sm text-gray-800">{item.years}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
