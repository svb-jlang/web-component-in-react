class DialogBox extends HTMLElement {
  static get observedAttributes() {
    return ["title", "text", "variant"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const title = this.getAttribute("title") || "Default Text";
    const text = this.getAttribute("text") || "Default Text";
    const variant = this.getAttribute("variant") || "default";
    let style;
    switch (variant) {
      case "info-on-dark":
        style = `<style>
          div {
            display: flex;
          flex-direction: column;
            width: 333px;
            padding: var(--space-3x, 12px);
            align-items: flex-start;
            gap: var(--space-2x, 8px);
            border-radius: var(--radius-medium, 4px);
            border: 1px solid var(--border-status-border-info, #E0E0E0);
            border: 1px solid var(--border-status-border-info, color(display-p3 0.8784 0.8784 0.8784));
            background: var(--fill-fill, #FFF);
            background: var(--fill-fill, color(display-p3 1 1 1));
            color: var(--text-text, #212121);
            color: var(--text-text, color(display-p3 0.1294 0.1294 0.1294));

            /* body/body-2 */
            font-family: Roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
          }
          strong {
            display: flex;
            align-items: center;
            font-family: Roboto;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            margin: 0;
          }
          p {
            margin: 0;
            margin-left: 28px;
          }
          strong::before {
            margin-right: 8px;
            display: inline-block;
            content: "";
            width: 20px;
            height: 20px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_220_2862)'%3E%3Cpath d='M10 1.66675C5.40002 1.66675 1.66669 5.40008 1.66669 10.0001C1.66669 14.6001 5.40002 18.3334 10 18.3334C14.6 18.3334 18.3334 14.6001 18.3334 10.0001C18.3334 5.40008 14.6 1.66675 10 1.66675ZM10.8334 14.1667H9.16669V9.16675H10.8334V14.1667ZM10.8334 7.50008H9.16669V5.83342H10.8334V7.50008Z' fill='%23424242' style='fill:%23424242;fill:color(display-p3 0.2588 0.2588 0.2588);fill-opacity:1;'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_220_2862'%3E%3Crect width='20' height='20' fill='white' style='fill:white;fill-opacity:1;'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
          }
        </style>`;
        break;
      case "success":
        style = `<style>
          div {
            display: flex;
          flex-direction: column;
            width: 333px;
            padding: var(--space-3x, 12px);
            align-items: flex-start;
            gap: var(--space-2x, 8px);
            border-radius: var(--radius-medium, 4px);
            border: 1px solid var(--border-status-border-success, #72D08C);
            border: 1px solid var(--border-status-border-success, color(display-p3 0.5961 0.8 0.5922));
            background: var(--fill-status-fill-success, #DCF3E0);
            background: var(--fill-status-fill-success, color(display-p3 0.8902 0.9451 0.8863));
            color: var(--text-text, #212121);
            color: var(--text-text, color(display-p3 0.1294 0.1294 0.1294));

            /* body/body-2 */
            font-family: Roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
          }
          strong {
            display: flex;
            align-items: center;
            font-family: Roboto;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            margin: 0;
          }
          p {
            margin: 0;
            margin-left: 28px;
          }
          strong::before {
            margin-right: 8px;
            display: inline-block;
            content: "";
            width: 20px;
            height: 20px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_220_2867)'%3E%3Cpath d='M10 1.66675C5.40002 1.66675 1.66669 5.40008 1.66669 10.0001C1.66669 14.6001 5.40002 18.3334 10 18.3334C14.6 18.3334 18.3334 14.6001 18.3334 10.0001C18.3334 5.40008 14.6 1.66675 10 1.66675ZM8.33335 14.1667L4.16669 10.0001L5.34169 8.82508L8.33335 11.8084L14.6584 5.48341L15.8334 6.66675L8.33335 14.1667Z' fill='%23388E3C' style='fill:%23388E3C;fill:color(display-p3 0.2196 0.5569 0.2353);fill-opacity:1;'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_220_2867'%3E%3Crect width='20' height='20' fill='white' style='fill:white;fill-opacity:1;'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
          }
        </style>`;
        break;
      case "warning":
        style = `<style>
          div {
            display: flex;
          flex-direction: column;
            width: 333px;
            padding: var(--space-3x, 12px);
            align-items: flex-start;
            gap: var(--space-2x, 8px);
            border-radius: var(--radius-medium, 4px);
            border: 1px solid var(--border-status-border-warning, #FFA15D);
            border: 1px solid var(--border-status-border-warning, color(display-p3 1 0.6706 0.4588));
            background: var(--fill-status-fill-warning, #FFE6D5);
            background: var(--fill-status-fill-warning, color(display-p3 1 0.9098 0.851));
            color: var(--text-text, #212121);
            color: var(--text-text, color(display-p3 0.1294 0.1294 0.1294));

            /* body/body-2 */
            font-family: Roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
          }
          strong {
            display: flex;
            align-items: center;
            font-family: Roboto;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            margin: 0;
          }
          p {
            margin: 0;
            margin-left: 28px;
          }
          strong::before {
            margin-right: 8px;
            display: inline-block;
            content: "";
            width: 20px;
            height: 20px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_220_2872)'%3E%3Cpath d='M0.833313 17.5001H19.1666L9.99998 1.66675L0.833313 17.5001ZM10.8333 15.0001H9.16665V13.3334H10.8333V15.0001ZM10.8333 11.6667H9.16665V8.33341H10.8333V11.6667Z' fill='%23EF6C00' style='fill:%23EF6C00;fill:color(display-p3 0.9373 0.4235 0.0000);fill-opacity:1;'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_220_2872'%3E%3Crect width='20' height='20' fill='white' style='fill:white;fill-opacity:1;'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
          }
        </style>`;
        break;
      case "error":
        style = `<style>
          div {
            display: flex;
          flex-direction: column;
            width: 333px;
            padding: var(--space-3x, 12px);
            align-items: flex-start;
            gap: var(--space-2x, 8px);
            border-radius: var(--radius-medium, 4px);
            border: 1px solid var(--border-status-border-error, #FF9CA3);
            border: 1px solid var(--border-status-border-error, color(display-p3 0.9469 0.6531 0.6531));
            background: var(--fill-status-fill-error, #FFE5E2);
            background: var(--fill-status-fill-error, color(display-p3 0.9961 0.9059 0.8941));
            color: var(--text-text, #212121);
            color: var(--text-text, color(display-p3 0.1294 0.1294 0.1294));

            /* body/body-2 */
            font-family: Roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
          }
          strong {
            display: flex;
            align-items: center;
            font-family: Roboto;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            margin: 0;
          }
          p {
            margin: 0;
            margin-left: 28px;
          }
          strong::before {
            margin-right: 8px;
            display: inline-block;
            content: "";
            width: 20px;
            height: 20px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_220_2877)'%3E%3Cpath d='M10 1.66675C5.40002 1.66675 1.66669 5.40008 1.66669 10.0001C1.66669 14.6001 5.40002 18.3334 10 18.3334C14.6 18.3334 18.3334 14.6001 18.3334 10.0001C18.3334 5.40008 14.6 1.66675 10 1.66675ZM10.8334 14.1667H9.16669V12.5001H10.8334V14.1667ZM10.8334 10.8334H9.16669V5.83342H10.8334V10.8334Z' fill='%23B71C1C' style='fill:%23B71C1C;fill:color(display-p3 0.7176 0.1098 0.1098);fill-opacity:1;'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_220_2877'%3E%3Crect width='20' height='20' fill='white' style='fill:white;fill-opacity:1;'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
          }
        </style>`;
        break;
      default:
        style = `<style>
          div {
            display: flex;
          flex-direction: column;
            width: 333px;
            padding: var(--space-3x, 12px);
            align-items: flex-start;
            gap: var(--space-2x, 8px);
            border-radius: var(--radius-medium, 4px);
            border: 1px solid var(--border-status-border-info, #E0E0E0);
            border: 1px solid var(--border-status-border-info, color(display-p3 0.8784 0.8784 0.8784));
            background: var(--fill-status-fill-info, #F5F5F5);
            background: var(--fill-status-fill-info, color(display-p3 0.9608 0.9608 0.9608));
            color: var(--text-text, #212121);
            color: var(--text-text, color(display-p3 0.1294 0.1294 0.1294));

            /* body/body-2 */
            font-family: Roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
          }
          strong {
            display: flex;
            align-items: center;
            font-family: Roboto;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            margin: 0;
          }
          p {
            margin: 0;
            margin-left: 28px;
          }
          strong::before {
            margin-right: 8px;
            display: inline-block;
            content: "";
            width: 20px;
            height: 20px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_220_2857)'%3E%3Cpath d='M10 1.66675C5.40002 1.66675 1.66669 5.40008 1.66669 10.0001C1.66669 14.6001 5.40002 18.3334 10 18.3334C14.6 18.3334 18.3334 14.6001 18.3334 10.0001C18.3334 5.40008 14.6 1.66675 10 1.66675ZM10.8334 14.1667H9.16669V9.16675H10.8334V14.1667ZM10.8334 7.50008H9.16669V5.83342H10.8334V7.50008Z' fill='%23424242' style='fill:%23424242;fill:color(display-p3 0.2588 0.2588 0.2588);fill-opacity:1;'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_220_2857'%3E%3Crect width='20' height='20' fill='white' style='fill:white;fill-opacity:1;'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
          }
        </style>`;
    }

    this.shadowRoot.innerHTML = `${style}<div><strong>${title}</strong><p>${text}</p></div>`;
  }
}

window.customElements.define("dialog-box", DialogBox);
