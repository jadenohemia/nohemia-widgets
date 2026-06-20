/**
 * <nohemia-widget> - a tiny, dependency-free web component that embeds an official Nohemia widget.
 *
 * It renders the canonical iframe served from nohemia.com, so the data, the nightly refresh and the
 * styling always stay in sync with the source. No tracking, no cookies, no external runtime.
 *
 *   <script type="module">import '@nohemia/widgets'</script>
 *   <nohemia-widget type="lune" theme="clair" size="m"></nohemia-widget>
 *
 * Attributes:
 *   type   "lune" | "ciel"            (default "lune")
 *   theme  "clair" | "sombre"         (default "clair")
 *   size   "s" | "m"                  (default "m")
 *
 * MIT © Jade Nohemia / Nohemia - https://nohemia.com/fr/widgets/
 */

const BASE = 'https://nohemia.com/fr/widgets'

// Pixel dimensions per type and size, matching the official widget pages.
const DIMS = {
  lune: { s: [220, 140], m: [300, 210] },
  ciel: { s: [230, 150], m: [300, 200] },
}

class NohemiaWidget extends HTMLElement {
  connectedCallback() {
    const type = (this.getAttribute('type') || 'lune').toLowerCase()
    const theme = (this.getAttribute('theme') || 'clair').toLowerCase()
    const size = (this.getAttribute('size') || 'm').toLowerCase()

    const safeType = DIMS[type] ? type : 'lune'
    const safeSize = size === 's' ? 's' : 'm'
    const safeTheme = theme === 'sombre' ? 'sombre' : 'clair'
    const [w, h] = DIMS[safeType][safeSize]

    const iframe = document.createElement('iframe')
    iframe.src = `${BASE}/${safeType}/${safeTheme}-${safeSize}/`
    iframe.width = String(w)
    iframe.height = String(h)
    iframe.loading = 'lazy'
    iframe.title = 'Widget Nohemia'
    iframe.style.cssText = 'border:0;border-radius:12px;max-width:100%'
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin')

    this.replaceChildren(iframe)
  }
}

if (typeof customElements !== 'undefined' && !customElements.get('nohemia-widget')) {
  customElements.define('nohemia-widget', NohemiaWidget)
}

export { NohemiaWidget }
