import ReadIntro from "./read.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="read-list">
        
    </div>
`;

export default class ReadList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$lessonList = this.querySelector(".read-list");
    }
    static get observedAttributes() {
        return ["list"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "list") {
            let lessonList = JSON.parse(newValue);
            for (let lesson of lessonList) {
                let readIntro = new ReadIntro();
                readIntro.setAttribute("lesson", JSON.stringify(lesson));
                this.$lessonList.appendChild(readIntro);
            }
        }
    }
}
window.customElements.define("read-list",ReadList);