import { LitElement, unsafeCSS } from "lit";

import tailwindStyle from "@/lib/tailwind.module.css";

const tailwindElement = unsafeCSS(tailwindStyle);

export const TailwindElement = (style: Record<string, string>) =>
  class extends LitElement {
    static styles = [tailwindElement, unsafeCSS(style)];
  };
