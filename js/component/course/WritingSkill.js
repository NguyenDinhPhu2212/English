import AnswerForm from "./AnswerForm.js";
import MessageBox from "./MessageBox.js";
import "../../navigo.js";
import { lesson,questions } from "../data/data.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="writing-skill">
        <div class="container">
            <answer-form></answer-form>
            <button class="check-btn">Check</button>
        </div>
        <div class="message-box-container"><message-box></message-box></div>
    </div>
`;

export default class WritingSkill extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$checkBtn = this.querySelector(".check-btn");
       
        this.$messageBoxContainer = this.querySelector(
            ".message-box-container"
        );
        this.$messageBox = this.querySelector("message-box");
        this.indexQuestion = 0;
        this.$answerForm = this.querySelector("answer-form");
        this.correctAnswer = null;
        this.all = 0;
    }
    static get observedAttributes() {
        return ["lesson", "questions", "clicked"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "lesson") {
            let lesson = JSON.parse(newValue);           
            this.setAttribute("questions", JSON.stringify(lesson));
            this.all = lesson.length;
        } 
        else if (attrName == "questions") {
            this.questions = JSON.parse(this.getAttribute("questions"));
            this.$numberQuestion = this.indexQuestion + 1;
            this.$answerForm.setAttribute(
                "question",
                JSON.stringify(this.questions[this.indexQuestion])
            );
        } else if (attrName == "clicked") {
            this.indexQuestion++;
            if (this.indexQuestion == this.all) {
                router.navigate("/homeScreen");
            } else {
                this.$messageBoxContainer.style.display = "none";
                this.$answerForm.setAttribute(
                    "question",
                    JSON.stringify(this.questions[this.indexQuestion])
                );
            }
        }
    }
    connectedCallback() {
        
        // this.setAttribute("list", JSON.stringify(lessons));
        this.setAttribute("lesson", JSON.stringify(questions));
        this.$checkBtn.onclick = async (event) => {
            event.preventDefault();

            if ( await this.$answerForm.getCorrected()) {
                this.$messageBoxContainer.style.display = "block";
            }
        };
        this.$messageBoxContainer.onclick = (event) => {
            if (!this.$messageBox.isEqualNode(event.target)) {
                this.$messageBoxContainer.style.display = "none";
            }
        };
    }
}
window.customElements.define("write-skill", WritingSkill);
