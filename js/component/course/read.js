const $template = document.createElement("template");
$template.innerHTML = `
    <div class="lesson read">
        <div class="lesson-title">
            <div>
                <span class="lesson-name"></span>
            </div>
            <img src="" class="lesson-image">
        </div>
        <div class="read-content" style="text-align: left;text-indent: 30px;display:none;font-weight:600;"></div>
    </div>
`;

export default class ReadIntro extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$lessonTitle = this.querySelector(".lesson-title");
        this.$lessonImage = this.querySelector(".lesson-image");
        this.$lessonName = this.querySelector(".lesson-name");
        this.$content = this.querySelector(".read-content");
    }
    static get observedAttributes() {
        return ["lesson"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "lesson") {
            newValue = JSON.parse(newValue);
            console.log(newValue);
            this.setAttribute("id", newValue.id);
            this.$lessonName.innerHTML = newValue.name;
            this.$lessonImage.src = newValue.background;
            let content = "";
            let value = newValue.read[0];
            for (let i in value) {
                if (value[i].indexOf(":") > 0 && value[i].indexOf(":") < 10) {
                    console.log(value[i].indexOf(":"));
                    let tmp = value[i].split(":");
                    content += `<p style="margin-bottom: 10px;"><b>${tmp[0]}</b>:${tmp[1]}</p>`;
                } else {
                    content += `<p style="margin-bottom: 10px;">${value[i]}</p>`;
                }
            }
            this.$content.innerHTML = content;
        }
    }
    connectedCallback() {
        this.$lessonTitle.onclick = () => {
            this.$content.style.display =
                this.$content.style.display == "none" ? "block" : "none";
        };
    }
}
window.customElements.define("read-intro", ReadIntro);