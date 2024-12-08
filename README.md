# Farsi Translations for React-Admin

Farsi translations for [React-Admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

[![react-admin-demo](https://marmelab.com/react-admin/img/react-admin-demo-still.png)](https://vimeo.com/268958716)

## Installation

### npm
```sh
npm install --save ra-language-farsi
```

### yarn
```sh
yarn add ra-language-farsi
```

## Usage

```js
import farsiMessages from 'ra-language-farsi';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    'fa': farsiMessages,
};

const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'fa');

<Admin i18nProvider={i18nProvider}>
  ...
</Admin>
```

## RTL
Material UI is already supprting RTL, so we can add its support to React Admin using these 2 steps:

1. Change `dir` property to `rtl` in your root elements (like body).


Using HTML (*public/index.html*):
```html
<body>
<noscript>
  You need to enable JavaScript to run this app.
</noscript>
<div id="root" dir="rtl"></div>
</body>
```

Using CSS style:
```css
body {
  direction: rtl;
}
```

Or Pure JS:
```js
document.getElementsByTagName("body")[0].setAttribute('dir', 'rtl');
```

2. Change the theme direction ([MUI theme direction](https://mui.com/material-ui/customization/right-to-left/#2-set-the-theme-direction))
```javascript
import { defaultTheme } from "react-admin";
import { deepmerge } from "@mui/utils";

const theme = deepmerge(defaultTheme, { direction: "rtl" });
```

3. Configure RTL style plugin ([MUI doc](https://mui.com/material-ui/customization/right-to-left/#3-configure-rtl-style-plugin))

```javascript
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

// Configure cache
const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const App = () => (
   <CacheProvider value={cacheRtl}>
        <Admin theme={theme}>
            // ...
        </Admin>
    </CacheProvider>
);
```

## Version Compatibility
- For React-Admin v5, use version 5.x of this package.
- For React-Admin v4, use version 4.x of this package.
- For React-Admin v3, use version 3.x of this package.
- For React-Admin v2, use version 2.x of this package.
- For React-Admin v1, use version 1.x of this package.

## License

This translation is licensed under the [BSD Licence](LICENSE), and sponsored by [Hamid FzM](https://hamidfzm.com).
