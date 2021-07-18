const $template = document.createElement("template");
$template.innerHTML = `
    <div class="comment">
        <img class="comment-image" />
        <div class="comment-name">
        </div>
        <div class="comment-content">
        </div>
    </div>
`;

export default class Comment extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$image = this.querySelector(".comment-image");
        this.$name = this.querySelector(".comment-name");
        this.$content = this.querySelector(".comment-content");
    }
    static get observedAttributes() {
        return ["comment"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "comment") {
            newValue = JSON.parse(newValue);
            this.$content.innerHTML = newValue.content;
            this.$name.innerHTML = newValue.name;
            this.$image.src = newValue.image;
        }
    }
    connectedCallback(){
        // let a = {
        //     image:"https://image.freepik.com/free-vector/couple-with-speech-bubbles_24877-56150.jpg",
        //     name: "HAHAH",
        //     content:"AAAAAAAAAAAAAAAAAAA"
        // }
        // this.setAttribute("comment", JSON.stringify(a))
    }
}
window.customElements.define("comment-box", Comment);
