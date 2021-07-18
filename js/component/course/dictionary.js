import { getDictionary } from "../../modules/user.js";

const $template = document.createElement('template');
$template.innerHTML = `

    <div class="dic-container">
       <div class="dic-content">
         <form  class ="form">
          <div class = 'dic-child1'>
          <h3><i class="fal fa-book"></i> Dictionary</h3>
         <div class = 'search'>
         <input type="text" name="word" class="word">
         <button type = 'submit'>Search</button>
         
         </div>

             </div>

              <div class = 'div-child2'>
              <h2 class = 'search-word'></h2>
              <div class = 'div-child2-content explain1' style="display:none">
              <h4><i class="fas fa-star"></i><span class = 'noun1'>Noun</span></h4>
                 <div class = 'div-child2-content-text'>
                 <h4>Definition : <span class = 'definition1'>None of your business</span></h4>
                 <h4>Example : <span class = 'example1'>hihih</span></h4>
                    </div>
                </div>

                <div class = 'div-child2-content explain2' style="display:none">
                <h4><i class="fas fa-star"></i><span class = 'noun2'>Noun</span></h4>
              <div class = 'div-child2-content-text'>
              <h4>Definition : <span class = 'definition2'>None of your business</span></h4>
              <h4>Example : <span class = 'example2'>hihih</span></h4>
                 </div>
                </div>

                <div class = 'div-child2-content explain3' style="display:none">
                <h4><i class="fas fa-star"></i><span class = 'noun3'>Noun</span></h4>
              <div class = 'div-child2-content-text'>
              <h4>Definition : <span class = 'definition3'>None of your business</span></h4>
              <h4>Example : <span class = 'example3'>hihihaa</span></h4>
                    </div>
                </div>
             

             
                 </div>
         </form>

         
         
      <h5 class = 'previous'><i class="fas fa-backward"></i> Previous</h5>

            
        </div>
        
    </div>
  

`
export default class Dictionary extends HTMLElement {
    constructor(){
        super()
        this.appendChild($template.content.cloneNode(true))
        this.$word = this.querySelector('.word')
        this.$form = this.querySelector('.form')
        this.$explain1 = this.querySelector('.explain1')
        this.$explain2 = this.querySelector('.explain2')
        this.$explain3 = this.querySelector('.explain3')
        this.$noun1 = this.querySelector('.noun1')
        this.$definition1 = this.querySelector('.definition1')
        this.$example1 = this.querySelector('.example1')
        this.$noun2 = this.querySelector('.noun2')
        this.$definition2 = this.querySelector('.definition2')
        this.$example2 = this.querySelector('.example2')
        this.$noun3 = this.querySelector('.noun3')
        this.$definition3 = this.querySelector('.definition3')
        this.$example3= this.querySelector('.example3')
        this.$searchWord = this.querySelector('.search-word')
        this.$previous = this.querySelector('.previous')
    }

    connectedCallback() {
        this.$previous.onclick = () => {
            router.navigate('/homeScreen')
        }
        this.$form.onsubmit = async (e) => {
            e.preventDefault();
            let word =this.$form.word.value
           try{
            let data = await getDictionary(word)
           
            let meanings = data[0].meanings;
            
            console.log(meanings);
            if(meanings[0]!= null){
            this.$noun1.innerHTML = meanings[0].partOfSpeech
            this.$definition1.innerHTML = meanings[0].definitions[0].definition
            this.$example1.innerHTML = meanings[0].definitions[0].example
            this.$explain1.style.display = 'block'
            this.$searchWord.innerHTML = word
            
            }

            if(meanings[1] != null) {
                this.$noun2.innerHTML = meanings[1].partOfSpeech
                this.$definition2.innerHTML = meanings[1].definitions[0].definition
                this.$example2.innerHTML = meanings[1].definitions[0].example
                this.$explain2.style.display = 'block'
            }

            if(meanings[2] != null) {
                this.$noun3.innerHTML = meanings[2].partOfSpeech
                this.$definition3.innerHTML = meanings[2].definitions[0].definition
                this.$example3.innerHTML = meanings[2].definitions[0].example
                this.$explain3.style.display = 'block'
            }
            
            
            this.$form.word.value = ''
           }catch(error) {
             alert(`Try Again!`)
             this.$form.word.value = ''
           }
        }
    }
}
window.customElements.define('dic-container', Dictionary)