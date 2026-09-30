# sangminwoo.github.io

Source for https://sangminwoo.github.io. It is a single static page (`index.html`, `css/site.css`, `js/site.js`) served by GitHub Pages.

## Updating

- **News:** add an `<li>` at the top of the `news` list in `index.html`.
- **Paper:** copy an existing `<li class="pub">` block into the right year. Topic tags are `multimodal`, `genai`, `agent`, `video`, `image`, and `learning`; the filter buttons use them.
- **Thumbnail:** put the figure in `papers/images/` and make a small WebP next to it:
  `cwebp -q 82 -resize 800 0 papers/images/NAME.png -o papers/images/NAME.webp`
- **CV:** add the PDF to `cv/` and update the CV link in `index.html`.

## Preview

    python3 -m http.server 8000

Then open http://localhost:8000.
