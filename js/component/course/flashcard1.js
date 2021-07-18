const $template = document.createElement("template");
$template.innerHTML = `
  <div class = 'flash-card'>
     <h3 class= 'question'></h3>
     <h3 class = 'answer' style = 'display: none; color : red'></h3>

     <div>



`;
export default class FlashCard1 extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$answer = this.querySelector(".answer");
        this.$question = this.querySelector(".question");
        this.$flashcard = this.querySelector(".flash-card");
    }
    static get observedAttributes() {
        return ["question", "answer"];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "question") {
            this.$question.innerHTML = newValue;
        } else if (attrName == "answer") {
            this.$answer.innerHTML = newValue;
        }
    }
    connectedCallback() {
        this.$flashcard.onclick = () => {
            if (this.$answer.style.display == "none") {
                this.$answer.style.display = "block";
            } else {
                this.$answer.style.display = "none";
            }
        };
    }
}

window.customElements.define("flash-card", FlashCard1);
