# Farsi Translations for Admin-on-rest

Farsi translations for [admin-on-rest](https://github.com/marmelab/admin-on-rest), the frontend framework for building admin applications on top of REST services.

![admin-on-rest demo](http://static.marmelab.com/admin-on-rest.gif)

## Installation

```sh
npm install --save aor-language-farsi
```

## Usage

```js
import farsiMessages from 'aor-language-farsi';

const messages = {
    'fa': farsiMessages,
};

<Admin locale="fa" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the [BSD Licence](LICENSE), and sponsored by [Hamid FzM](https://hamidfzm.com).