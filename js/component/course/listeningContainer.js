import dataListening from "../data/data-listening.js";
const $template = document.createElement('template');
$template.innerHTML = `
<div class="listening-container">
      <div class="listening-child1">
        <div class="child1-content1">
          <nav>
            <h3><span>24h</span>English</h3>
            <button class = 'home'>Home</button>
          </nav>
        </div>

        <div class="child1-content2">
          <h1>The best way to predict the future is to create it.</h1>
          <p>
            Live as if you were to die tomorrow. Learn as if you were to live
            forever.
          </p>
          <p></p>
        </div>
      </div>

      <div class="listening-child2">
        <nav class="listening-child2-content">
         
        </nav>
      </div>

      <div class="listening-child3">
         <h2 class = 'text-topic' style =  'color: #865616; display : none'>Coronavirus</h2>

      

     
      </div>
    </div>

`;
export default class ListeningContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true))
        this.$listeningChild2Content = this.querySelector('.listening-child2-content')
        this.$textTopic = this.querySelector('.text-topic');
        this.$listeningChild3 = this.querySelector('.listening-child3')
        this.$home = this.querySelector('.home')
        
    }
    
    createTopic(item, index) {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        h3.innerHTML = item.topic;
        p.innerHTML = item.detail;
        div.appendChild(h3);
        div.appendChild(p);
        div.setAttribute('class', 'topic')
        this.$listeningChild2Content.appendChild(div);
        if (index % 2 == 0) {
          div.classList.add("even-number");
        } else {
          div.classList.add("no-even-number");
        }
    }

    createContent(item,text){
        let main = document.createElement('main')
        let nav = document.createElement('nav')
        let p = document.createElement('p')
        let h3 = document.createElement('h3')
        let div = document.createElement('div')
        let iframe = document.createElement('iframe')
       
        
        iframe.src = item.src
        h3.innerHTML = item.name;

        p.innerHTML = item.transcript
        
        nav.appendChild(h3)
        div.appendChild(iframe)
        nav.appendChild(div)
        main.appendChild(nav)
        
        main.appendChild(p)
      main.setAttribute('class', text)
        
        this.$listeningChild3.appendChild(main)
       


    }

    connectedCallback() {

      this.$home.onclick = () => {
        router.navigate('/homeScreen')
      }
        for(let i = 0; i< dataListening.length;i++) {
              this.createTopic(dataListening[i],i)
            
        }
        let topic = this.querySelectorAll('.topic')

       for(let i  = 0 ; i < topic.length; i++){
        
           topic[i].onclick = () => {
            // this.$textTopic.style.display = 'block'
            // this.$textTopic.innerHTML = dataListening[i].topic;
            
              this.$listeningChild3.innerHTML = ''
               
               let lecture = dataListening[i].lecture;
               for(let j  = 0 ;j< lecture.length; j++) {
                   this.createContent(lecture[j],dataListening[i].topic)  
                   
               }

               
              
              
           }
         
           
       }

      
    }
}
window.customElements.define('listening-container', ListeningContainer)