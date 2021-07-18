import dataSpeakingVowel from "../data/data-speaking-vowel.js";
import dataSpeakingConsonant from "../data/data-speaking-consonant.js";
const $template = document.createElement("template");
$template.innerHTML = `
<div class="speaking-container">
<div class="speaking-child1">
  <nav>
    <h1>24hEnglish</h1>
    <div class="child1-pronounciation">
      <h3 class ='vowel'>20 nguyên âm <i class="fas fa-angle-down"></i></h3>
      <h3 class = 'consonant'>24 phụ âm <i class="fas fa-angle-down"></i></h3>
    </div>
    <button class="home">Home</button>
  </nav>
</div>



<div class="nav-bar" style = 'display : none'>
  <ul class="ul">
 
  </ul>
</div>

<div class="speaking-child2"  style="display: none;" >
  
    <h3>Cách phát âm : <span class = 'speak-text'></span></h3>
    <video width="100%" height="340" controls class = 'video'>
    <source src="./pic/xxx.mp4" type="video/mp4">
    
    
  </video>
        
  </div>

  
</div>

`;
export default class SpeakContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$ul = this.querySelector(".ul");
        this.$consonant = this.querySelector(".consonant");
        this.$vowel = this.querySelector(".vowel");
        this.$navBar = this.querySelector(".nav-bar");
        this.$speakText = this.querySelector(".speak-text");
        this.$video = this.querySelector(".video");
        this.$speakChild2 = this.querySelector(".speaking-child2");
        this.$home = this.querySelector(".home");
    }

    connectedCallback() {
        this.$home.onclick = () => {
            router.navigate("/homeScreen");
        };

        let dataVowel = dataSpeakingVowel;
        let dataConsonant = dataSpeakingConsonant;
        console.log(dataVowel);
        console.log(dataConsonant);

        this.$vowel.onclick = () => {
            this.$consonant.style.color = "black";
            if (this.$navBar.style.display == "none") {
                this.$navBar.style.display = "block";
                this.$ul.innerHTML = "";
                this.$vowel.style.color = "#04aa6d";
            } else {
                this.$navBar.style.display = "none";
                this.$ul.innerHTML = "";
                this.$vowel.style.color = "black";
            }
            for (let i = 0; i < dataVowel.length; i++) {
                this.create(dataVowel[i].name, i);
            }

            let li = this.querySelectorAll("li");
            for (let i = 0; i < li.length; i++) {
                li[i].onclick = () => {
                    this.$speakChild2.style.display = "block";
                    this.$speakText.innerHTML = dataVowel[i].name;
                    this.$video.src = dataVowel[i].src;
                };
            }
        };

        this.$consonant.onclick = () => {
            this.$vowel.style.color = "black";
            if (this.$navBar.style.display == "none") {
                this.$navBar.style.display = "block";
                this.$ul.innerHTML = "";
                this.$consonant.style.color = "#04aa6d";
            } else {
                this.$navBar.style.display = "none";
                this.$ul.innerHTML = "";
                this.$consonant.style.color = "black";
            }
            for (let i = 0; i < dataConsonant.length; i++) {
                this.create(dataConsonant[i].name, i);
            }

            let li = this.querySelectorAll("li");
            for (let i = 0; i < li.length; i++) {
                li[i].onclick = () => {
                    this.$speakChild2.style.display = "block";
                    this.$speakText.innerHTML = dataConsonant[i].name;
                    this.$video.src = dataConsonant[i].src;
                };
            }
        };
    }

    create(value, index) {
        let li = document.createElement("LI");
        li.setAttribute("class", index);
        li.innerHTML = value;
        this.$ul.appendChild(li);
    }
}

window.customElements.define("speak-container", SpeakContainer);
