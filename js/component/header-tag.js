const $template = document.createElement("template");
$template.innerHTML = `
<div class = 'header-tag'>
<header>
        <h2><span>24h</span>English</h2>
       <div class="header-text">
        <ul>
            <li><a href="#" style="font-weight:bold">Giới Thiệu</a></li>
            <li><a href="#" class="comment-item">Đánh Gía</a></li>
            <li><a href="#">Liên Hệ</a></li>
            <li><a href="#" class="login-btn">Đăng nhập</a></li>
        </ul>
       </div>
        
    </header>

    <section class="middle-container">
        <div class="middle-content">
            <div class="middle-child1">
                <p>GIAO TIẾP TIẾNG ANH TRÔI CHẢY <br> CHỈ SAU 3 THÁNG TỰ HỌC</p>
            </div>

            <div class="middle-child2">
               <ul>
                   <li><i class="fas fa-check"></i> Hiểu và nói tiếng anh như người bản xứ</li>
                   <li><i class="fas fa-check"></i> Tiết kiệm thời gian học chỉ với 1h học</li>
                   <li><i class="fas fa-check"></i> Hình thức học tập tiện lợi gồm Online và Offline</li>
               </ul>
            </div>

            <div class="middle-child3">
                <a href="#" class="begin-btn">Bắt đầu ngay</a>
            </div>
        </div>
    
    </section>
    </div>


`;

export default class HeaderTag extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$loginBtn = this.querySelector(".login-btn");
        this.$beginBtn = this.querySelector(".begin-btn");
        this.$comment = this.querySelector(".comment-item");
    }

    connectedCallback() {
        this.$loginBtn.addEventListener("click", (event) => {
            event.preventDefault();
            router.navigate("/login");
        });
        this.$beginBtn.addEventListener("click", (event) => {
            event.preventDefault();
            router.navigate("/login");
        });
        this.$comment.addEventListener("click", (event) => {
            event.preventDefault();
            router.navigate("/comment");
        });
    }
}

window.customElements.define("header-tag", HeaderTag);
