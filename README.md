# DialogBox Web Component in React

## Overview

This repository contains a React application that integrates a custom web component called `DialogBox`. This component is designed to be flexible and customizable, offering features such as dynamic text content, multiple styling variants, SVG integration via a `::before` pseudo-element, and automatic text truncation to ensure consistent UI presentation.

## Features

- **Dynamic Text Content:** Allows dynamic updates to the text displayed in the component through React state management.
- **Multiple Styling Variants:** Supports various styles through the `variant` attribute, including `default`, `primary`, and `secondary`.
- **SVG Decoration:** Utilizes an SVG icon using a `::before` pseudo-element for enhanced visual appeal.
- **Text Truncation:** Implements text truncation to a specified character limit, ensuring the component's content remains concise and visually consistent.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js: LTS version recommended.
- npm: Typically installed with Node.js.

## Installation

Follow these steps to set up the project locally:

1.  Clone the Repository:

    bashCopy code

    `git clone https://github.com/svb-jlang/web-component-in-react cd react-web-component-demo`

2.  Install Dependencies:

    bashCopy code

    `npm install`

3.  Start the Development Server:

    bashCopy code

    `npm start`

    Access the React application at `http://localhost:3000/`.

## Usage

### In React Components

The `DialogBox` component can be integrated within any React component. Interaction with the component is facilitated through a React-controlled form, which includes:

- Text Input Field: Updates the component's text in real-time.
- Style Variant Selector: Allows selection among different appearance styles.

### As a Standalone Web Component

The `DialogBox` can be utilized in any HTML file or within other web frameworks:

arduinoCopy code

`<dialog-box text="Hello World" variant="primary"></dialog-box>`

Attributes:

- text: Sets the text displayed within the component.
- variant: Specifies the component's styling variant (`default`, `primary`, `secondary`).

### Customization and Styling

Modify the component's internal styles by adjusting the CSS within the `DialogBox` JavaScript class definition. Styles are encapsulated using Shadow DOM, with specific variants handled within the `render` method.

## Contributing

Contributions are welcome! Here are some ways you can contribute:

- Report Bugs: Use the issue tracker to report bugs.
- Suggest Features: Propose new features or enhancements by opening an issue.
- Submit Pull Requests: Contribute improvements or new features through pull requests.

Please refer to the `CONTRIBUTING.md` for detailed submission guidelines.

## License

This project is available under the MIT License. Use and modify it for personal or commercial projects as needed.
