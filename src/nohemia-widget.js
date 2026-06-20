/**
 * <nohemia-widget> - a tiny, dependency-free web component that embeds an official Nohemia widget.
 *
 * It renders the canonical iframe served from nohemia.com, so the data, the nightly refresh and the
 * styling always stay in sync with the source. No tracking, no cookies, no external runtime.
 *
 *   <script type="module">import '@nohemia/widgets'</script>
 *   <nohemia-widget type="moon" locale="en" theme="light" size="m"></nohemia-widget>
 *
 * Attributes:
 *   type    "moon" | "sky"                                    (default "moon")
 *   locale  "en"|"fr"|"pt"|"es"|"it"|"de"|"pl"|"ko"|"ja"|"tr" (default "en")
 *   theme   "light" | "dark"                                  (default "light")
 *   size    "s" | "m"                                         (default "m")
 *
 * The slug and theme word in the URL are localized for SEO (e.g. /de/widgets/mond/hell-m/),
 * but you always pass the canonical English keys above - the component maps them per locale.
 *
 * MIT (c) Jade Nohemia / Nohemia - https://nohemia.com/en/widgets/
 */

const BASE = 'https://nohemia.com'

// Localized URL slug per widget type (the word natives search) - mirrors widget-locales.ts.
const SLUG = {
  moon: { en: 'moon', fr: 'lune', pt: 'lua', es: 'luna', it: 'luna', de: 'mond', pl: 'ksiezyc', ko: 'dal', ja: 'tsuki', tr: 'ay' },
  sky: { en: 'sky', fr: 'ciel', pt: 'ceu', es: 'cielo', it: 'cielo', de: 'himmel', pl: 'niebo', ko: 'haneul', ja: 'sora', tr: 'gokyuzu' },
}
// Localized theme word in the URL.
const THEME = {
  light: { en: 'light', fr: 'clair', pt: 'claro', es: 'claro', it: 'chiaro', de: 'hell', pl: 'jasny', ko: 'light', ja: 'light', tr: 'acik' },
  dark: { en: 'dark', fr: 'sombre', pt: 'escuro', es: 'oscuro', it: 'scuro', de: 'dunkel', pl: 'ciemny', ko: 'dark', ja: 'dark', tr: 'koyu' },
}
// Pixel dimensions per type and size, matching the official widget pages.
const DIMS = {
  moon: { s: [220, 140], m: [300, 210] },
  sky: { s: [230, 150], m: [300, 200] },
}

// Backward-compatible aliases (the first release used the French keys).
const TYPE_ALIAS = { lune: 'moon', ciel: 'sky' }
const THEME_ALIAS = { clair: 'light', sombre: 'dark' }
const LOCALES = ['en', 'fr', 'pt', 'es', 'it', 'de', 'pl', 'ko', 'ja', 'tr']

class NohemiaWidget extends HTMLElement {
  connectedCallback() {
    let type = (this.getAttribute('type') || 'moon').toLowerCase()
    type = TYPE_ALIAS[type] || type
    if (!DIMS[type]) type = 'moon'

    let locale = (this.getAttribute('locale') || 'en').toLowerCase()
    if (LOCALES.indexOf(locale) === -1) locale = 'en'

    let theme = (this.getAttribute('theme') || 'light').toLowerCase()
    theme = THEME_ALIAS[theme] || theme
    if (theme !== 'dark') theme = 'light'

    const size = this.getAttribute('size') === 's' ? 's' : 'm'
    const [w, h] = DIMS[type][size]

    const slug = SLUG[type][locale]
    const themeWord = THEME[theme][locale]

    const iframe = document.createElement('iframe')
    iframe.src = `${BASE}/${locale}/widgets/${slug}/${themeWord}-${size}/`
    iframe.width = String(w)
    iframe.height = String(h)
    iframe.loading = 'lazy'
    iframe.title = 'Nohemia widget'
    iframe.style.cssText = 'border:0;border-radius:12px;max-width:100%'
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin')

    this.replaceChildren(iframe)
  }
}

if (typeof customElements !== 'undefined' && !customElements.get('nohemia-widget')) {
  customElements.define('nohemia-widget', NohemiaWidget)
}

export { NohemiaWidget }
