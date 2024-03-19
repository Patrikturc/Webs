# Welcome to your project!

To run the project just run `npm install` and then `npm run dev`.
You should then be able to access the app on `http://localhost:3000`.

The main files live inside the app folder.
This folder has the following structure:

- tailwind.css: Tailwind is a CSS framework where instead of writing custom CSS, you write classes that you can apply to your HTML elements. This file is where you can customize the default Tailwind classes.
  This file prepares the project for that, and you can customize it to your needs.
  We can look over this later too.
  You can learn more about Tailwind [here](https://tailwindcss.com/docs/installation).

- root.tsx: This is the main file of the project. It's the entry point of the application. It's where the app is initialized and the main components are rendered.
  You don't need to change anything or the other 2 files, but you can look over them to understand how the project is structured.

- entry.server.tsx and entry.client.tsx: These files are the entry points for the server and the client. They are used to render the app on the server and the client, respectively. You don't need to change anything here, but you can look over them to understand how the project is structured.

- routes: This folder contains the routes of the app. Each file inside this folder is a route of the app. You can add more routes by creating new files here. You can look over the existing files to understand how the routes are structured.
  For now we will just add components inside the components folder and add them to \_index.tsx

- routes/components: This folder contains the components of the app. Each file inside this folder is a component of the app. You can add more components by creating new files here. You can look over the existing files to understand how the components are structured.
  Please go and try to change the text of the components and see how it changes on the app.
