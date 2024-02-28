import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "@/lib/tailwind.element";

// Import the styles
import style from "@/styles/d-button.scss?inline";

// Define the new element to be used in templates
@customElement("d-button")
export class DButton extends TailwindElement(style) {
  // Define the properties that the element will accept
  @property()
  name = "";

  @property()
  count = 0;

  // Define the element's template
  render() {
    return html`
      <button name="${this.name}" @click=${this.increment}>
        <slot></slot>
      </button>

      <p>Count: ${this.count}</p>
    `;
  }

  // Define the element's logic
  increment() {
    this.count++;

    // Dispatch an event to notify the parent element that the count has changed
    const eventToDispatch = new CustomEvent("count-changed", {
      bubbles: true,
      composed: true,
      detail: this.count,
    });

    console.log('eventToDispatch', eventToDispatch);

    this.dispatchEvent(eventToDispatch);
  }
}
