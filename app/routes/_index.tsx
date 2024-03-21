import type { MetaFunction } from "@remix-run/node";
import { TopBanner } from "~/components/TopBanner";
import { Experiences } from "~/components/Experiences";
import { Projects } from "~/components/Projects";
import { Education } from "~/components/Education";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Patrik Website" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

export default function Index() {
  return (
    // This is the main layout for the website
    // It includes the top banner, experiences, education, and footer components
    <main className={"w-screen h-screen"}>
      <TopBanner />
      <Experiences />
      <Projects/>
      <Education />
      <Footer />
    </main>
  );
}
