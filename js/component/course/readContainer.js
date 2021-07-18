import { lesson } from "../data/data.js";
import ReadIntro from "./read.js";
import ReadList from "./readList.js";
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
        <read-list></read-list>
    </div>
`;

export default class ReadContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$lessonPage = this.querySelector(".read-container");
        this.$readList = this.querySelector("read-list");
        this.$home = this.querySelector(".home");
    }
    static get observedAttributes() {
        return ["list"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "list") {
            this.$readList.setAttribute("list", newValue);
        }
    }
    async connectedCallback() {
        this.$home.onclick = () => {
            router.navigate("/homeScreen");
        };
        
        // this.setAttribute("list", JSON.stringify(lessons));
        this.setAttribute("list", JSON.stringify(lesson));
    }
}
window.customElements.define("read-container", ReadContainer);
