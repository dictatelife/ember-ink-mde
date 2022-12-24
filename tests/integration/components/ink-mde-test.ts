import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TInkMdeEditor } from 'ember-ink-mde/components/ink-mde';

const inkButtonClass = '.ink-button';

// Set any properties with this.set('myProperty', 'value');
// Handle any actions with this.set('myAction', function(val) { ... });

module('Integration | Component | ink-mde', function (hooks) {
  setupRenderingTest(hooks);

  test("it renders the given content", async function (assert) {
    await render(hbs`<div><InkMde @doc="test" /></div>`);

    assert.strictEqual(find(".cm-content")?.textContent, `test`);
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
    let editor: TInkMdeEditor = {update: function() { return "fakeUpdateResult";}};

    this.set('afterUpdate', function(content : string) {
      const afterEl = document.getElementById('after');
      if (afterEl) {
        afterEl.innerText = "afterUpdate" + content;
      }
    });

    this.set('beforeUpdate', async function(content : string) {
      const beforeEl = document.getElementById('before');
      if (beforeEl) {
        beforeEl.innerText = "beforeUpdate" + content;
      }
    });

    this.set('onEditorReady', async function(ink: TInkMdeEditor) {
      const readyEl = document.getElementById('ready');
      if (readyEl) {
        readyEl.innerText = "onEditorReady";
      }
      editor = ink;
    });

    await render(hbs`<InkMde
        @doc=" and "
        @beforeUpdate={{this.beforeUpdate}}
        @afterUpdate={{this.afterUpdate}}
        @onEditorReady={{this.onEditorReady}}
      />
      <div id=after></div>
      <div id=before></div>
      <div id=ready></div>
    `);

    await typeIn('.cm-line', 'something')

    assert.strictEqual(find('#before')?.textContent, "beforeUpdate and something");
    assert.strictEqual(find('#after')?.textContent, "afterUpdate and something");
    assert.strictEqual(find('#ready')?.textContent, "onEditorReady");
    assert.notEqual(editor.update("content"), "fakeUpdateResult");
  });
});
