# Simple Single-Page Site Template

This is a simple single-page website coded using plain HTML, CSS, and a bit of jQuery. This is intended to be a clean implementation of a common layout to be used as a template for further development

Live Demo: https://www.garysmith.ca/demos/simple-single-page-site-template/

### Deployment
Simply clone the files in this repository into any webserver doc root, and then visit `index.html` in a modern browser.

### Key Features
This template is intentionally designed to be a simple base for future development, but some common useful functionality is included:
- Fully responsive, with a mobile breakpoint at 768px.
- In desktop views, the primary navigation bar fixes to the top of the page as the content scrolls.
- In mobile views, the primary navigation converts to a dropdown menu toggled via a hamburger menu icon.
- Primary navigation bar links are animated to scroll smoothly to the selected page section.
- The browser location bar hash is automatically updated to always reflect the section being viewed.
- Section background images can be fixed for a parallax scrolling effect.
- Though this is a single-page layout, an example static page is included, for sections (such as privacy policies) that are perhaps not wanted on the main page.
- For ease of customization, the CSS is separated into two stylesheets, one for the core layout and one for fonts, colors and other visual styling.

### Customization

- For each section of content, create a uniquely identified `section` container in the `index.html` file, wrapping your HTML in an `article` element, as follows:

    ```
    <section id="my-section">
		<article>
		    <h2>My Section</h2>
		    <p>Some HTML content here.</p>
		</article>
	</section>```
- Create a corresponding link in the primary `nav` section, linking to a hash value that exactly matches the ID of the `section` to link to, as follows:
    ```
    <nav id="primary">
        ....
		<li><a href="#my-section">My Section</a></li>
		....
	</nav>```
- Adjust the site fonts, colors, and background images in `/css/styles.css`.
	