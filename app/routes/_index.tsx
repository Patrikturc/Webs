import type { MetaFunction } from "@remix-run/node";
import { TopBanner } from "~/routes/components/TopBanner";
import { Experiences } from "~/routes/components/Experiences";
import { Education } from "~/routes/components/Education";
import { Footer } from "~/routes/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Jetrolon Gear" },
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
      <Education />
      <Footer />
    </main>
  );
}
