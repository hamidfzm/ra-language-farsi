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

const messages = {
    'fa': farsiMessages,
};

<Admin locale="fa" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the [BSD Licence](LICENSE), and sponsored by [Hamid FzM](https://hamidfzm.com).
