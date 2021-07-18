import Comment from "./comment.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="comment-container">
    <div class="title">Học viên tiêu biểu</div>
    <div class="comment-list">
    </div>
    <div class="go">Đăng ký</div>
    </div>
`;

export default class CommentList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$go = this.querySelector(".go");
        this.$list = this.querySelector(".comment-list");
    }
    static get observedAttributes() {
        return ["list"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "list") {
            newValue = JSON.parse(newValue);
            for (let i of newValue) {
                let comment = new Comment();
                comment.setAttribute("comment", JSON.stringify(i));
                this.$list.appendChild(comment);
            }
        }
    }
    connectedCallback() {
        let a = [
            {
                image: "https://image.freepik.com/free-vector/couple-with-speech-bubbles_24877-56150.jpg",
                name: "NGUYỄN VĂN A",
                content:
                    "Sau khi đến với 24h English, tiếng Anh của tôi đã được cải thiện rất nhiều. Hiện tại tôi đã có thể đọc sách tiếng anh và giao tiếp một cách tự tin",
            },
            {
                image: "https://image.freepik.com/free-vector/couple-with-speech-bubbles_24877-56150.jpg",
                name: "NGUYỄN VĂN A",
                content: "Sau khi đến với 24h English, tiếng Anh của tôi đã được cải thiện rất nhiều. Hiện tại tôi đã có thể đọc sách tiếng anh và giao tiếp một cách tự tin",
            },
            {
                image: "https://image.freepik.com/free-vector/couple-with-speech-bubbles_24877-56150.jpg",
                name: "NGUYỄN VĂN A",
                content: "Sau khi đến với 24h English, tiếng Anh của tôi đã được cải thiện rất nhiều. Hiện tại tôi đã có thể đọc sách tiếng anh và giao tiếp một cách tự tin",
            },
            {
                image: "https://image.freepik.com/free-vector/couple-with-speech-bubbles_24877-56150.jpg",
                name: "NGUYỄN VĂN A",
                content: "Sau khi đến với 24h English, tiếng Anh của tôi đã được cải thiện rất nhiều. Hiện tại tôi đã có thể đọc sách tiếng anh và giao tiếp một cách tự tin",
            },
            {
                image: "https://image.freepik.com/free-vector/couple-with-speech-bubbles_24877-56150.jpg",
                name: "NGUYỄN VĂN A",
                content: "Sau khi đến với 24h English, tiếng Anh của tôi đã được cải thiện rất nhiều. Hiện tại tôi đã có thể đọc sách tiếng anh và giao tiếp một cách tự tin",
            },
        ];
        this.setAttribute("list", JSON.stringify(a));
        this.$go.onclick = () => {
            router.navigate("/login");
        };
    }
}
window.customElements.define("comment-list", CommentList);
