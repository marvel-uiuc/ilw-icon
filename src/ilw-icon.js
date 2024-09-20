import { LitElement, html, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { nothing } from "lit";
import styles from "./ilw-icon.styles.css?inline";
import "./ilw-icon.css";

class Icon extends LitElement {
    static get properties() {
        return {
            icon: { type: String, attribute: true },
            type: { type: String, attribute: true },
            alt: { type: String, attribute: true },
            size: { type: String, attribute: true },
        };
    }

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
        this.icon = "";
        this.type = "solid";
        this.alt = "";
        this.size = "";
    }

    get isHidden() {
        return this.getAttribute("aria-hidden");
    }

    render() {
        if (!this.icon) {
            return html``;
        }
        let classes = {
            "ilw-icon": true,
        };
        if (this.type === "line") {
            classes[`ilw-icon-${this.icon}-line`] = true;
        } else {
            classes[`ilw-icon-${this.icon}`] = true;
        }
        let styles = {};
        if (this.size) {
            styles["font-size"] = this.size;
        }

        return html`<span
            class=${classMap(classes)}
            style=${styleMap(styles)}
            aria-label="${this.label}"
            aria-hidden="${this.isHidden ? "true" : nothing}"
        ></span>`;
    }
}

customElements.define("ilw-icon", Icon);
