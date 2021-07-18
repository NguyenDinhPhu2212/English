const $template = document.createElement("template");
$template.innerHTML = `
            <div class="questionContainer">
                <div class="threads">
                Please write your answer in the field below.
                </div>
                <div class="question">
                    Question <span class="numberQuestion"></span>: <span class="questionContent"></span>
                </div>
                <form class="answerForm">
                    <input type="text" name="answer" id="answer" class="answer" autocomplete="off">
                </div>
            </div>
`;
const settings = {
    async: true,
    crossDomain: true,
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    method: "POST",
    headers: {
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-key": "0265a6de14mshbf9a8508c66a8cfp100b0ejsncfb3b0c9860b",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    },
    data: {
        q: "",
        target: "en",
        source: "vi",
    },
};
export default class AnswerForm extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$numberQuestion = this.querySelector(".numberQuestion");
        this.$questionContent = this.querySelector(".questionContent");
        this.question = "";
        this.$answerForm = this.querySelector(".answerForm");
        this.correctAnswer = null;
        this.$input = this.querySelector("input");
    }
    static get observedAttributes() {
        return ["question"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "question") {
            newValue = JSON.parse(newValue);
            this.$numberQuestion.innerHTML = newValue.number;
            this.$questionContent.innerHTML = newValue.question;
            this.question = newValue.question;
            // this.correctAnswer = newValue.answer;
            this.$answerForm.answer.value = "";
        }
    }
    connectedCallback() {}
    async getCorrected() {
        const answer = this.$answerForm.answer.value;
        let isTrue = false;
        if (answer) {
            const re = /\s*(?:,|$)\s*/;
            let newAnswer = answer.toLowerCase().split(re).join(" ");
            let corrected = this.question.toLowerCase().split(re).join(" ");
            console.log(newAnswer);
            settings.data.q = corrected;
            let me = this;
            let res = {};
            let promise = new Promise(function (resolve, reject) {
                $.ajax(settings).done(function (response) {
                    console.log(response);
                    if (
                        response.data.translations[0].translatedText.toLowerCase() ==
                        newAnswer
                    ) {
                        resolve(true);
                    }
                });
            });
            isTrue = await promise.then((value) => {
                if (value == true) {
                    me.$input.style.border = "none";
                    return true;
                }
            });
        }
        return isTrue;
    }
}
window.customElements.define("answer-form", AnswerForm);
