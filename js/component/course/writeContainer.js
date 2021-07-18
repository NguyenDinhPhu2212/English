import WritingSkill from "./WritingSkill.js";
// import { getAllLesson } from "../models/lesson.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="read-container">
        <div class="child1-content1">
        <nav>
        <h3><span>24h</span>English</h3>
        <button class = 'home'>Home</button>
        </nav>
    </div>
        <write-skill></write-skill>
    </div>
`;

export default class WriteContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$home = this.querySelector(".home");
    }
    static get observedAttributes() {
        return [];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
    }
    connectedCallback(){
        this.$home.onclick = () => {
            router.navigate("/homeScreen");
        };
    }
}
window.customElements.define("write-container", WriteContainer);