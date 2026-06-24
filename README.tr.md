# Nohemia Widgets

**[English](README.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Deutsch](README.de.md) · [Polski](README.pl.md) · [한국어](README.ko.md) · [日本語](README.ja.md) · [Türkçe](README.tr.md)**

**Her web sitesine eklenebilen ücretsiz astroloji ve ay widget'ları.** Gerçek efemeris verisi, her gece yenilenir, hesap yok, takip yok, JavaScript gerektirmez. Tek satır HTML yapıştırın, işte bu kadar.

[Jade Nohemia](https://nohemia.com/tr/auteur/jade/) tarafından **[nohemia.com](https://nohemia.com/tr/)** üzerinde geliştirilir ve bakımı yapılır.
Galeri ve canlı önizlemeler: **[nohemia.com/tr/widgets](https://nohemia.com/tr/widgets/)**.


---

## Hızlı başlangıç (düz HTML)

Bunu sayfanızda herhangi bir yere yapıştırın. HTML kabul eden her sitede çalışır (WordPress, Wix, Squarespace,
Webflow, Ghost, Shopify, statik bir sayfa...).

```html
<iframe src="https://nohemia.com/tr/widgets/ay/acik-m/"
        width="300" height="210" loading="lazy"
        title="Ay takvimi" style="border:0;border-radius:12px;max-width:100%"></iframe>
<p style="font:12px/1.4 system-ui,sans-serif;text-align:center;margin:6px 0 0">
  <a href="https://nohemia.com/tr/" rel="nofollow">Nohemia'dan Ay takvimi</a>
</p>
```

İstediğimiz tek teşekkür o küçük kaynak satırı. Zorunlu değil: düzenleyebilir ya da kaldırabilirsiniz,
widget yine tıpatıp aynı şekilde çalışır.

---

## Widget'lar

| Widget | `type` | Açıklama | Boyutlar |
|--------|--------|----------|----------|
| Bugünün ayı | `moon` | Evre, burç ve bir sonraki dolunay | `s` (220x140), `m` (300x210) |
| Bugünün gökyüzü | `sky` | Burca göre Güneş ve Ay, güncel evre | `s` (230x150), `m` (300x200) |

Her `type`, iki temayla (`light` / `dark`) ve iki boyutla (`s` / `m`) gelir. URL kalıbı şudur:

```
https://nohemia.com/tr/widgets/{type}/{theme}-{size}/
```

Daha fazla widget yolda: dolunaya geri sayım, burca göre günlük burç yorumu, süregelen retrolar.

---

## Framework örnekleri

### WordPress
Bir **Custom HTML** bloğu ekleyin (ya da Klasik düzenleyicinin *Text* sekmesini kullanın) ve Hızlı başlangıç parçacığını yapıştırın.
Eklenti gerekmez.

### React / Next.js
```jsx
export function MoonWidget() {
  return (
    <>
      <iframe
        src="https://nohemia.com/tr/widgets/ay/acik-m/"
        width={300} height={210} loading="lazy"
        title="Ay takvimi"
        style={{ border: 0, borderRadius: 12, maxWidth: '100%' }}
      />
      <p style={{ font: '12px/1.4 system-ui, sans-serif', textAlign: 'center', margin: '6px 0 0' }}>
        <a href="https://nohemia.com/tr/" rel="nofollow">Nohemia'dan Ay takvimi</a>
      </p>
    </>
  )
}
```

### Vue
```vue
<template>
  <iframe src="https://nohemia.com/tr/widgets/gokyuzu/koyu-m/"
          width="300" height="200" loading="lazy" title="Bugünün gökyüzü"
          style="border:0;border-radius:12px;max-width:100%" />
</template>
```

### Webflow / Squarespace
Bir **Embed** öğesi (Webflow) ya da bir **Code** bloğu (Squarespace) bırakın ve Hızlı başlangıç parçacığını yapıştırın.

---

## Web bileşeni (npm)

iframe yerine bir etiket kullanmayı tercih ederseniz, küçük web bileşenini kurun (ince, bağımlılıksız bir sarmalayıcı):

```bash
npm i @nohemia/widgets
```

```html
<script type="module">import '@nohemia/widgets'</script>

<nohemia-widget type="moon" locale="tr" theme="light" size="m"></nohemia-widget>
<nohemia-widget type="sky" locale="tr" theme="dark" size="s"></nohemia-widget>
<nohemia-widget type="moon" locale="tr" tz="tokyo"></nohemia-widget>
```

Ya da doğrudan bir CDN üzerinden yükleyin, derleme adımı yok:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nohemia/widgets"></script>
<nohemia-widget type="moon" locale="tr"></nohemia-widget>
```

Öznitelikler: `type` (`moon` | `sky`), `theme` (`light` | `dark`), `size` (`s` | `m`), `tz`
(yalnızca moon, aşağıya bakın). Bileşen yalnızca resmi iframe'i işler, dolayısıyla veri ve görünüm
nohemia.com ile eşzamanlı kalır.

### Saat dilimi (`tz`)

Ay widget'ı bir sonraki dolunayın saatini gösterir. Varsayılan olarak bu saat, ziyaretçiden
bağımsız olan **Europe/Paris** dilimine göre verilir. `moon` widget'ında bu saati `tz`
özniteliğiyle başka bir şehre geçirebilirsiniz. İzin verilen değerler: `london`, `new-york`,
`los-angeles`, `sao-paulo`, `istanbul`, `seoul`, `tokyo`. Özniteliği yazmazsanız (ya da başka bir
değer verirseniz) varsayılan Paris saati kullanılır. `sky` widget'ında hiçbir etkisi yoktur
(bu widget saat göstermez).

```html
<nohemia-widget type="moon" locale="tr" tz="tokyo"></nohemia-widget>
```

URL'yi elle de kurabilirsiniz: dilim slug'ını `{theme}-{size}` parçasının sonuna ekleyin, örneğin
`https://nohemia.com/tr/widgets/ay/acik-m-tokyo/`.

---

## Veri ve güncellik

Hiçbir şey elle girilmez. Evreler, burçlar ve saatler gerçek bir astronomik efemeristen gelir
([astronomy-engine](https://github.com/cosinekitty/astronomy), MIT) ve her gece yeniden hesaplanır. Saatler
varsayılan olarak Europe/Paris saat dilimine göre, dakikası dakikasına verilir (ay widget'ı bir sonraki
dolunay saatini `tz` özniteliğiyle başka bir dilime geçirebilir). Aynı veri, nohemia.com'daki tam
[ay takvimini](https://nohemia.com/tr/calendrier-pleines-lunes/) de besler.

Kendi widget'ınızı oluşturmak isterseniz ham JSON'u da okuyabilirsiniz:
`https://nohemia.com/widgets/lune/data.json` (bugünkü evre, sonraki dolunay ve yeniay, yaklaşan on lunasyon).

---

## Bu widget'lar neden

- **Ücretsiz, sonsuza dek.** Hesap yok, API anahtarı yok, kullanım sınırı yok.
- **Hafif ve güvenli.** Sandbox'lanmış bir iframe: sayfanızı asla okumaz, hiçbir çerez kullanmaz ve sitenizi yavaşlatmaz.
- **Editöryel tasarım.** Sıcak, sade, Nohemia tarzında. Açık ve koyu temalar.
- **Dürüst, gerçek veri.** Sabit kodlanmış bir tablo değil, hakiki bir efemeris.
- **Gizliliğe saygılı.** Sıfır takip, yapısı gereği GDPR uyumlu.

---

## Bağlantılar

- Site: [nohemia.com](https://nohemia.com/tr/) · Widget galerisi: [nohemia.com/tr/widgets](https://nohemia.com/tr/widgets/)
- Yazar: [Jade Nohemia](https://nohemia.com/tr/auteur/jade/)
- Sorunlar ve fikirler: [github.com/jadenohemia/nohemia-widgets/issues](https://github.com/jadenohemia/nohemia-widgets/issues)

## Lisans

[MIT](./LICENSE) © Jade Nohemia / Nohemia. İster ticari olsun, her yerde kullanın. [nohemia.com](https://nohemia.com/tr/) adresine geri bağlantı verirseniz seviniriz ama bu asla zorunlu değildir.
