import { component$, useStore } from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  const { user } = useStore({
    user: {
      name: "Rohit",
      email: "sample",
      password: "hell",
      phone: "aaa",
    },
  });
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <meta name="author" content={user.name} />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
