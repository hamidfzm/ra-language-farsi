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
Material UI is already supprting RTL, so we can add its support to react admin using these 2 steps:

1. Change **dir** property to **rtl** in your root elements (like body). You can also connect this property to redux.
*public/index.html*

```html
<body>
<noscript>
  You need to enable JavaScript to run this app.
</noscript>
<div id="root" dir="rtl"></div>
</body>
```

Or `body` CSS:
```css
body {
  direction: rtl;
}
```

2. Define a theme and set **direction** to **rtl**.

```javascript
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  direction: 'rtl',
});

const App = () => (
    <Admin theme={theme}>
        // ...
    </Admin>
);
```

## License

This translation is licensed under the [BSD Licence](LICENSE), and sponsored by [Hamid FzM](https://hamidfzm.com).
