import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css"; // ✅ Radix UI theme styles
import "./index.css"; // ✅ Tailwind CSS
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme
      appearance="light"
      accentColor="blue"
      grayColor="slate"
      radius="large"
    >
      <App />
    </Theme>
  </StrictMode>
);
