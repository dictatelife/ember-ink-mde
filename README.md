ember-ink-mde
====================================================================================

[![NPM Version][npm-badge]][npm-badge-url]
[![CI Status][ci-badge]][ci-badge-url]
[![Code Climate][codeclimate-badge]][codeclimate-badge-url]
[![MIT License][license-badge]][license-badge-url]

[npm-badge]: https://img.shields.io/npm/v/ember-ink-mde
[npm-badge-url]: https://www.npmjs.com/package/ember-ink-mde
[ci-badge]: https://github.com/malgasm/ember-ink-mde/workflows/CI/badge.svg
[ci-badge-url]: https://github.com/malgasm/ember-ink-mde/actions?query=workflow%3ACI
[codeclimate-badge]: https://codeclimate.com/github/malgasm/ember-ink-mde.svg
[codeclimate-badge-url]: https://codeclimate.com/github/malgasm/ember-ink-mde
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license-badge-url]: https://github.com/malgasm/ember-ink-mde/blob/master/LICENSE

An [Ember.js](https://github.com/emberjs/ember.js/) addon for the [Ink Markdown Editor](https://github.com/voraciousdev/ink-mde/)

## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v14 or above

## Requirements

* [ember-auto-import >= 2](https://github.com/ef4/ember-auto-import)

Ember will throw an error if this requirement is not met.

## Installation

```
ember install ember-ink-mde
```

## Usage

The configuration options match most of the configuation from ink-mde.

- doc
- beforeUpdate
- afterUpdate
- vim

Nested options are prefixed with their top-level configuration key so they can be specified as properties on an Ember component:

| interface             | toolbar                   |
|-----------------------|---------------------------|
| interfaceAttribution  | toolbarBold               |
| interfaceAutocomplete | toolbarCode               |
| interfaceImages       | toolbarCodeBlock          |
| interfaceReadonly     | toolbarHeading            |
| interfaceSpellcheck   | toolbarImage              |
| interfaceToolbar      | toolbarItalic             |
|                       | toolbarLink               |
|                       | toolbarList               |
|                       | toolbarOrderedList        |
|                       | toolbarQuote              |
|                       | toolbarTaskList           |
|                       | toolbarUpload             |




Note: The plugin does not yet support configuring the `file` options. Pull requests are welcomed.

###### templates/application.hbs

```hbs
<!-- my-component.hbs -->

{{ink-mde
  doc="my awesome markdown content"
  afterUpdate=(action afterEditorUpdate)
}}
```

The plugin also supports an `onEditorReady` function, which provides the ink `editor` object. For example,

```hbs
<!-- my-component.hbs -->

{{ink-mde
  onEditorReady=(action onEditorReady)
}}
```

```js
//my-component.js

@action
onEditorReady: function(editor) {
  this.editor = editor;
}
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
