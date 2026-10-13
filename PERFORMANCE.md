# Site refresh

The five public pages remain static HTML with the existing Bootstrap layout and icon styles. `css/refresh.css` provides the conservative visual updates and displays the single-image heroes without Flexslider. Navigation stays visible on phones and works without JavaScript.

Home, services, contact, and photos load no local JavaScript (previously approximately 200 KB per page). The reviews page retains jQuery because the legacy Google reviews embed could depend on it. Existing review embeds and Cloudflare analytics are preserved. Vendor files and the original theme remain available for the archived pages under `hidden/`.

## Images

Original images are retained. Public heroes use adjacent WebP copies, with a maximum dimension of 1600 pixels. Gallery display copies live in `images/gallery/display/`, have a maximum dimension of 1200 pixels, and total approximately 2.3 MB instead of 36.3 MB for the 13 originals used by the page. Below-fold gallery images and the contact map load lazily; gallery dimensions reserve space before loading.

When replacing a photo, update its display copy as well. Preserve orientation, resize proportionally, and encode WebP at approximately quality 82 (heroes use 85, services uses 80). Update the HTML width and height when the image's aspect ratio changes. The full-resolution originals remain available at their existing URLs.

## Verification

Locally checked all five pages in Chrome at 1440, 390, and 320 pixels, with JavaScript enabled and disabled. Navigation and hero text remain visible, local assets load, and there is no horizontal document overflow. Desktop and phone screenshots were inspected. Form endpoints and fields, existing navigation links, and service prices were compared with the starting pages. No contact-form submission was sent.

Remote fonts, reviews, maps, and analytics were excluded from the local layout checks; live third-party rendering is not verified. These checks establish local behavior and asset reductions, rather than a measured production load-time or Lighthouse score.
