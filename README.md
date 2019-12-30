# Farsi Translations for React-Admin

Farsi translations for [React-Admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

![react-admin demo](http://static.marmelab.com/react-admin.gif)

## Installation

```sh
npm install --save ra-language-farsi
```

## Usage

```js
import farsiMessages from 'ra-language-farsi';
import polyglotI18nProvider from 'ra-i18n-polyglot';


const i18nProvider = polyglotI18nProvider(() => farsiMessages, 'fa');

<Admin i18nProvider={i18nProvider}>
  ...
</Admin>
```

## RTL
Material UI is already supprting RTL, so we can add its support to react admin using these 2 steps:

1. Change **dir** property to **rtl** in your root elements (like body). You can also connect this property to redux.
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

*public/index.html*

```html
<body>
<noscript>
  You need to enable JavaScript to run this app.
</noscript>
<div id="root" dir="rtl"></div>
</body>
```
or in css of body add :
```css
body {
  direction: rtl;
}
```


## License

This translation is licensed under the [BSD Licence](LICENSE), and sponsored by [Hamid FzM](https://hamidfzm.com).
