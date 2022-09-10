import Component from '@glimmer/component';
interface InkMdeArgs {
    doc?: string;
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
    beforeUpdate?: () => void;
    afterUpdate?: () => void;
}
export default class InkMde extends Component<InkMdeArgs> {
    #private;
    initEditor(editorElement: HTMLElement): void;
}
export {};
