import CommentList from "../course/commentList.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="comment-page-container">
    <header>
        <h2><span>24h</span>English</h2>
       <div class="header-text">
        <ul>
            <li><a href="#" class="intro-item">Giới Thiệu</a></li>
            <li><a href="#" style="font-weight:bold">Đánh Gía</a></li>
            <li><a href="#">Liên Hệ</a></li>
            <li><a href="#" class="login-btn">Đăng nhập</a></li>
        </ul>
       </div>
    </header>
    <comment-list></comment-list>
    </div>
`;

export default class CommentPage extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$loginBtn = this.querySelector(".login-btn");
        
        this.$intro = this.querySelector(".intro-item");
    }
    static get observedAttributes() {
        return [];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        
    }
    connectedCallback() {
        this.$loginBtn.addEventListener("click", (event) => {
            event.preventDefault();
            router.navigate("/login");
        });
        this.$intro.addEventListener("click", (event) => {
            event.preventDefault();
            router.navigate("/headerTag");
        });
    }
}
window.customElements.define("comment-page", CommentPage);