import {
    addFlashCard,
    getFlashCard,
    removeFlashcard,
} from "../../modules/user.js";

const $template = document.createElement("template");
$template.innerHTML = `
<div class="flash-container">
      <div class="flash-container-child1">
        <nav>
          <h1>FlashCard</h1>
        <div class="child1-button">
          <button class="child1-button-create">Create</button>
          <button class="child1-button-del">Delete</button>
          <button class="child1-button-home">Home</button>
        </div>
        </nav>
      </div>

      <div class="flash-container-child2">
        <div class="create-card" style="display: none;">
          <h2>Create FlashCard</h2>
          <nav>
            <label for="question">Question</label>
          <textarea  class="question"></textarea>
          <br>
          <label for="question">Answer</label>
          <textarea  class="answer"></textarea>
          <div class="button-showCard"></div>
            <button class="save-card">Save</button>
            <button class="hide-card">Close</button>
         
          </nav>
        </div>
        <add-flash-card></add-flash-card>
        </div>
    </div>


`;
export default class FlashCard extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$create = this.querySelector(".child1-button-create");
        this.$delete = this.querySelector(".child1-button-del");
        this.$home = this.querySelector(".child1-button-home");
        this.$question = this.querySelector(".question");
        this.$answer = this.querySelector(".answer");
        this.$saveCard = this.querySelector(".save-card");
        this.$hideCard = this.querySelector(".hide-card");
        this.$createCard = this.querySelector(".create-card");
        this.$flashCards = this.querySelector("add-flash-card");
    }

    connectedCallback() {
        getFlashCard((res) => {
            console.log(res);
            let flashcards = res.flashcard;

            this.$flashCards.setAttribute(
                "content",
                JSON.stringify(flashcards)
            );
        });

        this.$create.onclick = () => {
            this.$createCard.style.display = "block";
        };

        this.$hideCard.onclick = () => {
            this.$createCard.style.display = "none";
        };

        this.$delete.onclick = async () => {
            this.$flashCards.innerHTML = "";
            await removeFlashcard();
        };
        this.$saveCard.onclick = async () => {
            let question = this.$question.value;
            let answer = this.$answer.value;

            await addFlashCard(question, answer);
            this.$question.value = "";
            this.$answer.value = "";
        };
        this.$home.onclick = () => {
            router.navigate("/homeScreen");
        };
    }
}

window.customElements.define("flash-container", FlashCard);
