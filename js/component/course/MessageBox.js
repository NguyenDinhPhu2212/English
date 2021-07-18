const $template = document.createElement("template");
$template.innerHTML = `
    <div class="message-box">
        <div class = "message">Congratulation! You are completed the practice!</div>
        <img class="image" 
            src="https://image.freepik.com/free-vector/completed-concept-illustration_114360-4113.jpg">
        <div class="next-btn">Next</div>
    </div>
`;

export default class MessageBox extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$nextBtn = this.querySelector(".next-btn");
        this.$messageBox = this.querySelector(".message-box");
    }
    connectedCallback() {
        this.$nextBtn.onclick = () => {
            this.$messageBox.parentNode.parentNode.style.display = "none";
            this.$messageBox.parentNode.parentNode.parentNode.parentNode.setAttribute(
                "clicked",
                "true"
            );
        };
    }
}
window.customElements.define("message-box", MessageBox);
