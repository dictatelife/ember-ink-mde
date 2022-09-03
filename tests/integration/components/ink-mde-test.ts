import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const poweredText = 'powered by ink-mde';
const inkButtonClass = '.ink-button';

// Set any properties with this.set('myProperty', 'value');
// Handle any actions with this.set('myAction', function(val) { ... });

module('Integration | Component | ink-mde', function (hooks) {
  setupRenderingTest(hooks);

  test("it renders the given content", async function (assert) {
    await render(hbs`<div><InkMde @doc="test" /></div>`);

    assert.strictEqual(find(".cm-content")?.textContent, `test${poweredText}`);
    assert.strictEqual(findAll(inkButtonClass).length, 0)
  });

  test("it allows interface configuration", async function (assert) {
    await render(hbs`<div><InkMde
      @doc="interface"
      @interfaceAttribution={{false}}
      @interfaceAutocomplete={{false}}
      @interfaceImages={{false}}
      @interfaceReadonly={{false}}
      @interfaceSpellcheck={{false}}
      @interfaceToolbar={{true}}
    /></div>`);

    assert.strictEqual(find(".cm-content")?.textContent, `interface`);
    assert.strictEqual(findAll(inkButtonClass).length, 11)
  });

  test("it allows toolbar configuration", async function (assert) {

    await render(hbs`<div><InkMde
      @interfaceToolbar={{true}}
      @toolbarBold={{true}}
      @toolbarCode={{false}}
      @toolbarCodeBlock={{false}}
      @toolbarHeading={{false}}
      @toolbarImage={{false}}
      @toolbarItalic={{false}}
      @toolbarLink={{false}}
      @toolbarList={{false}}
      @toolbarOrderedList={{false}}
      @toolbarQuote={{false}}
      @toolbarTaskList={{false}}
    /></div>`);

    assert.strictEqual(findAll(inkButtonClass).length, 1)
  });

  test("it calls hooks", async function (assert) {
    this.set('afterUpdate', function(content) {
      document.getElementById('after').innerText = "afterUpdate" + content;
    });

    this.set('beforeUpdate', function(content) {
      document.getElementById('before').innerText = "beforeUpdate" + content;
    });

    await render(hbs`<InkMde
        @doc=" and "
        @beforeUpdate={{this.beforeUpdate}}
        @afterUpdate={{this.afterUpdate}}
      />
      <div id=after></div>
      <div id=before></div>
    `);

    await typeIn('.cm-line', 'something')

    assert.strictEqual(find('#before')?.textContent, "beforeUpdate and something");
    assert.strictEqual(find('#after')?.textContent, "afterUpdate and something");
  });
});
