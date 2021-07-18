import { getUser, realTime, signOut, updateUser } from "../../modules/user.js";

const $template = document.createElement("template");
$template.innerHTML = `
<div class="home-screen">
<div class="home-screen-container">
  <div class="home-screen-child1">
    <div class="child1-text1">
      <h1>24hEnglish-Website học Tiếng Anh số 1 Việt Nam</h1>
    </div>

    <div class="child1-text2">
      <h4><i class="far fa-plus"></i> 100% thực hành mỗi buổi học</h4>
      <h4><i class="far fa-plus"></i> 100% giáo viên bản xứ</h4>
      <h4><i class="far fa-plus"></i> 100% cam kết đầu ra</h4>
      <h4><i class="far fa-plus"></i> Phát triển toàn diện 4 kỹ năng</h4>
    </div>
  </div>

  <div class="home-screen-child2">
    <div class="child2-content1">
      <div class="child2-content1-text1">
        <div class="text1-image" style="padding-left: 40px">
          <img
            style="width: 30px"
            src="https://img.icons8.com/cotton/64/000000/graduation-cap--v2.png"
          />
        </div>
        <h3 style="padding-left: 6px">24hEnglish</h3>
      </div>

      <div class="child2-content1-text2">
        <span class = 'name-user'>24hEnglish</span><i class="fas fa-angle-down"></i>
      </div>
    </div>

    <div class="child2-content2">
      <div class="child2-content2-img">
        <!-- <img class = 'image-content2' src="./pic/content2.jpg" alt=""> -->
      </div>
    </div>

    <div class="child2-content3">
     <div class="child2-content3-1">
       <h2>Giao tiếp tiếng anh trôi chảy chỉ sau 3 tháng</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  aut quos, reprehenderit quaerat? Alias, explicabo minus.</p>
       <h5 class="begin">Khám phá ngay</h5>
     </div>
     <div class="child2-content3-2">
      <div class="child2-content3-container">
        <div class="content3-child content3-speaking" >
          <p>Speaking</p>
          <img src="https://img.icons8.com/doodle/48/000000/talk-female.png"/>
       
        </div>

        <div class="content3-child content3-listening">
          <p>Listening</p>
          <img
            src="https://img.icons8.com/color/48/000000/music-robot.png"
          />
        </div>

        <div class="content3-child content3-writting" >
          <p>Writting</p>
          <img
            src="https://img.icons8.com/color/48/000000/hand-with-pen.png"
          />
        </div>

        <div class="content3-child content3-reading" >
          <p>Reading</p>
          <img
            style="width: 60px"
            src="https://img.icons8.com/plasticine/100/000000/reading.png"
          />
        </div>

        <div class="content3-child content3-flashcard" >
          <p>FlashCard</p>
          <img style = 'width:55px' src="https://img.icons8.com/color/48/000000/quizlet.png"/>
        </div>
        <div class="content3-child content3-dic" >
          <p>Dictionary</p>
          <img
            style="width: 50px"
            src="https://img.icons8.com/cotton/64/000000/read.png"
          />
        </div>
      </div>
     </div>
    </div>
   
  </div>
 
</div>

      <div class = 'sign-out' style="display: none;">
     <p>Sign Out <i class="far fa-sign-out"></i></p>
      </div>

      <div class = 'course' style = 'display : none'>
         <div class = 'course-container' >
         <h2 style = 'color:black'>Bạn chưa đăng kí khóa học <span class = 'course-text'>bbbb</span></h2>
         <div class = 'course-btn'>
             <button class = 'course-register btn'>Đăng kí</button>
             <button class = 'course-back btn'>Quay lại</button>
             </div>
            </div>

        </div>
</div>


`;
export default class HomeScreen extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$child2_content1_text2 = this.querySelector(
            ".child2-content1-text2"
        );
        this.$signOut = this.querySelector(".sign-out");
        this.$nameUser = this.querySelector(".name-user");
        this.$speaking = this.querySelector(".content3-speaking");
        this.$listening = this.querySelector(".content3-listening");
        this.$reading = this.querySelector(".content3-reading");
        this.$writting = this.querySelector(".content3-writting");
        this.$dic = this.querySelector(".content3-dic");
        this.$flashcard = this.querySelector(".content3-flashcard");
        this.$course = this.querySelector(".course");
        this.$courseText = this.querySelector(".course-text");
        this.$courseBackBtn = this.querySelector(".course-back");
        this.$courseRegisterBtn = this.querySelector(".course-register");
        this.$begin = this.querySelector(".begin");
    }

    async connectedCallback() {
        // let data = await getUser()
        realTime((data) => {
            console.log(data);

            this.$nameUser.innerHTML = data.name;
            let speaking = data.speaking;
            let reading = data.reading;
            let listening = data.listening;
            let writting = data.writting;
            let currentUser = firebase.auth().currentUser;

            this.$speaking.onclick = () => {
                if (speaking == false) {
                    this.$course.style.display = "block";
                    this.$courseText.innerHTML = "Speaking";
                    this.$courseRegisterBtn.onclick = () => {
                        this.$course.style.display = "none";
                        updateUser(
                            {
                                speaking: true,
                            },
                            currentUser.uid
                        );
                    };
                } else {
                    router.navigate("/speakContainer");
                }
            };

            this.$listening.onclick = () => {
                if (listening == false) {
                    this.$course.style.display = "block";
                    this.$courseText.innerHTML = "Listening";
                    this.$courseRegisterBtn.onclick = () => {
                        this.$course.style.display = "none";
                        updateUser(
                            {
                                listening: true,
                            },
                            currentUser.uid
                        );
                    };
                } else {
                    router.navigate("/listening");
                }
            };

            this.$writting.onclick = () => {
                if (writting == false) {
                    this.$course.style.display = "block";
                    this.$courseText.innerHTML = "Writting";
                    this.$courseRegisterBtn.onclick = () => {
                        this.$course.style.display = "none";
                        updateUser(
                            {
                                writting: true,
                            },
                            currentUser.uid
                        );
                    };
                } else {
                    router.navigate("/writting");
                }
            };

            this.$reading.onclick = () => {
                if (reading == false) {
                    this.$course.style.display = "block";
                    this.$courseText.innerHTML = "Reading";
                    this.$courseRegisterBtn.onclick = () => {
                        this.$course.style.display = "none";
                        updateUser(
                            {
                                reading: true,
                            },
                            currentUser.uid
                        );
                    };
                } else {
                    router.navigate("/reading");
                }
            };
            this.$begin.onclick = () => {
                router.navigate("/speakContainer");
            };
            this.$courseBackBtn.onclick = () => {
                this.$course.style.display = "none";
            };
        });
        // console.log(data);

        this.$dic.onclick = () => {
            router.navigate("/dic");
        };
        this.$flashcard.onclick = () => {
            router.navigate("/flashCard");
        };

        this.$child2_content1_text2.addEventListener("click", () => {
            if (this.$signOut.style.display === "none") {
                this.$signOut.style.display = "block";
                this.$child2_content1_text2.style.color = "blue";
            } else {
                this.$signOut.style.display = "none";
                this.$child2_content1_text2.style.color = "black";
            }
        });
        this.$signOut.addEventListener("click", () => {
            signOut();
        });
    }
}
window.customElements.define("home-screen", HomeScreen);
