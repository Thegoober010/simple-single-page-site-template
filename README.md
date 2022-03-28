# Simple Single-Page Site Template

This is a simple single-page website coded using plain HTML, CSS, and a bit of jQuery. This is intended to be a clean implementation of a common layout that can be used as a template for further development

Live Demo: https://www.garysmith.ca/demos/simple-single-page-site-template/

### Deployment
Simply clone the files in this repository into any webserver doc root, and then visit `index.html` in a modern browser.

### Key Features
This template is intentionally designed to be a simple base for future development, but some common functionality was included:
- Fully responsive, with a mobile breakpoint at 768px.
- Primary navigation bar fixess to the top of the page as the content scrolls in desktop dimensions.
- Primary navigation converts to a dropdown menu toggled via a hamburger menu icon in mobile dimensions.
-Primary navigation bar links scroll smoothly to selected page section.
- The location bar hash is automatically updated to reflect the site section being viewed.
- Section background images can be fixed for a parallax scrolling effect.
- An example static page is included, for sections (such as privacy policies) that are not wanted on the main page.
- CSS is separated into two stylehseets, one for core functionality and one for fonts, colors and other visual styling.

### Customization

- For each section of content, create a uniquely identified `section` container in the `index.html` file, wrapping your HTML in an `article` element, as follows:

    ```
    <section id="my-section">
		<article>
		    <h2>My Section</h2>
		    <p>Some HTML content here</p>
		</article>
	</section>```
- Create a corresponding link in the primary `nav` section, linking to a hash value that matches the ID of the `section` to link to, as follows:
    ```
    <nav id="primary">
        ....
		<li><a href="#my-section">My Section</a></li>
		....
	</nav>```
- Adjust the site fonts, colors, and background images in `/css/styles.css`.
	