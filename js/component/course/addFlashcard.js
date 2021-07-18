import FlashCard1 from "./flashcard1.js";

const $template = document.createElement('template');
$template.innerHTML = `
 <div class = 'add-flash-card'>


   <div>

`
export default class addFlashCard extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true))
        this.$flashCards = this.querySelector('.add-flash-card')
    }

    static get observedAttributes() {
        return ['content']
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'content') {
            let data = JSON.parse(newValue)
            console.log(data);
            this.$flashCards.innerHTML = ``
            for(let doc of data){
                let flashcard = new FlashCard1()
                flashcard.setAttribute('question', doc.question)
                flashcard.setAttribute('answer', doc.answer)
                this.$flashCards.appendChild(flashcard)
            }
            
        }
    }
}

window.customElements.define('add-flash-card', addFlashCard)