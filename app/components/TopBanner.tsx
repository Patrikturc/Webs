import React from "react";

const backgroundImageUrl = "banner.jpeg";
const title = "Hi, I'm Patrik, welcome to my website!";
const subtitle = "This website is built with Remix and Tailwind CSS";

// Components are the building blocks of a website. They are reusable and can be used in multiple places. They are also easy to test and maintain. In this example, we have a TopBanner component that displays a banner with a background image and some text. We can use this component in multiple places in our website.
export function TopBanner() {
  return (
    // This is a div. It is a container that holds other elements. It is used to group elements together. It can also be used to apply styles to a group of elements.
    // This div has a className of "relative h-96 w-full overflow-hidden". This means that it is 96% of the height of its parent container and it is 100% of the width of its parent container. It also has overflow hidden, which means that any content that overflows the div will be hidden.
    <div className="relative h-96 w-full overflow-x-hidden">
      {/* Background Image */}
      {/* This is an image. It is used to display an image on the website. It has a src attribute that specifies the URL of the image. It also has an alt attribute that specifies the alternative text for the image. This text is used by screen readers to describe the image to visually impaired users. It also has a className of "absolute w-full h-full object-cover". This means that it is 100% of the width and height of its parent container and it is set to cover the entire container. */}
      <img
        src={backgroundImageUrl}
        alt="Banner"
        className="absolute w-full h-full object-cover overflow-x-hidden"
      />

      {/* Overlay */}
      <div className="absolute w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-4xl font-bold mb-4">{title}</h1>
        <p className="text-white text-xl">{subtitle}</p>
      </div>
    </div>
  );
}
