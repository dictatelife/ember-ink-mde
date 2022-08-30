import Component from '@glimmer/component';
import { action } from '@ember/object';
import { defineOptions, ink } from 'ink-mde';

interface InkMdeArgs {
  doc?: string

  interfaceAttribution?: boolean;
  interfaceAutocomplete?: boolean;
  interfaceImages?: boolean;
  interfaceReadonly?: boolean;
  interfaceSpellcheck?: boolean;
  interfaceToolbar?: boolean;

  toolbarBold?: boolean;
  toolbarCode?: boolean;
  toolbarCodeBlock?: boolean;
  toolbarHeading?: boolean;
  toolbarImage?: boolean;
  toolbarItalic?: boolean;
  toolbarLink?: boolean;
  toolbarList?: boolean;
  toolbarOrderedList?: boolean;
  toolbarQuote?: boolean;
  toolbarTaskList?: boolean;
  toolbarUpload?: boolean;

  vim?: boolean;

  beforeUpdate?: () => void
  afterUpdate?: () => void
}

export default class InkMde extends Component<InkMdeArgs> {
  #noOp() {}

  #booleanDefault(val: boolean | undefined, defaultValue = true) { return val == undefined ? defaultValue : val }

  @action
  public initEditor(editorElement: HTMLElement) {
    const args = this.args;

    const afterUpdate = args.afterUpdate || this.#noOp;
    const beforeUpdate = args.beforeUpdate || this.#noOp;
    const interfaceAttribution = this.#booleanDefault(args.interfaceAttribution);
    const interfaceAutocomplete = this.#booleanDefault(args.interfaceAutocomplete, false);
    const interfaceImages = this.#booleanDefault(args.interfaceImages, false);
    const interfaceReadonly = this.#booleanDefault(args.interfaceReadonly, false);
    const interfaceSpellcheck = this.#booleanDefault(args.interfaceSpellcheck);
    const interfaceToolbar = this.#booleanDefault(args.interfaceToolbar, false);
    const toolbarBold = this.#booleanDefault(args.toolbarBold);
    const toolbarCode = this.#booleanDefault(args.toolbarCode);
    const toolbarCodeBlock = this.#booleanDefault(args.toolbarCodeBlock);
    const toolbarHeading = this.#booleanDefault(args.toolbarHeading);
    const toolbarImage = this.#booleanDefault(args.toolbarImage);
    const toolbarItalic = this.#booleanDefault(args.toolbarItalic);
    const toolbarLink = this.#booleanDefault(args.toolbarLink);
    const toolbarList = this.#booleanDefault(args.toolbarList);
    const toolbarOrderedList = this.#booleanDefault(args.toolbarOrderedList);
    const toolbarQuote = this.#booleanDefault(args.toolbarQuote);
    const toolbarTaskList = this.#booleanDefault(args.toolbarTaskList);
    const toolbarUpload = this.#booleanDefault(args.toolbarUpload, false);
    const vim = this.#booleanDefault(args.vim, false);

    ink(editorElement, defineOptions({
      doc: args.doc || '',
      hooks: {
        beforeUpdate: beforeUpdate,
        afterUpdate: afterUpdate
      },
      interface: {
        attribution: interfaceAttribution,
        autocomplete: interfaceAutocomplete,
        images: interfaceImages,
        readonly: interfaceReadonly,
        spellcheck: interfaceSpellcheck,
        toolbar: interfaceToolbar,
      },
      toolbar: {
        bold: toolbarBold,
        code: toolbarCode,
        codeBlock: toolbarCodeBlock,
        heading: toolbarHeading,
        image: toolbarImage,
        italic: toolbarItalic,
        link: toolbarLink,
        list: toolbarList,
        orderedList: toolbarOrderedList,
        quote: toolbarQuote,
        taskList: toolbarTaskList,
        upload: toolbarUpload
      },
      vim: vim
    }))
  }
}
