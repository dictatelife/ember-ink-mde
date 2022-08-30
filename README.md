# ember-ink-mde

**Currently locked at Ink version 0.10.0 due to compatibility issues with Ember and Solid.js**

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
