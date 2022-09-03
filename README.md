<p align="center">
  <a href="https://github.com/malgasm/ember-ink-mde/actions?query=workflow%3ACI"><img src="https://github.com/malgasm/ember-ink-mde/workflows/CI/badge.svg" alt="CI Status"></a>
  <a href="https://codeclimate.com/github/malgasm/ember-ink-mde"><img src="https://codeclimate.com/github/malgasm/ember-ink-mde.svg" alt="Code Climate"></a>
  <a href="https://github.com/malgasm/ember-ink-mde/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="GitHub license"></a>

</p>

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
{{ink-mde
  doc="my awesome markdown content"
  afterUpdate=(action afterEditorUpdate)
}}
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
