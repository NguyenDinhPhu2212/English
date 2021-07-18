const $template = document.createElement('template');
$template.innerHTML =`
<input class = 'input-main' type = 'text' placeholder = 'mainnn'>
   <div class = 'input-error'></div>


`

export default class InputWrapper extends HTMLElement {
    constructor() {
        super()
        this.appendChild($template.content.cloneNode(true))
        this.$main = this.querySelector('.input-main')
        this.$error = this.querySelector('.input-error')
    }


    //get value
    get value() {
        return this.$main.value
    }
    //creat attr
    static get observedAttributes() {
        return ['type' , 'error' , 'placeholder']
    }
    //change attr

    attributeChangedCallback(attrName,oldValue,newValue) {
        if(attrName == 'type') {
            this.$main.type = newValue
        }
        else if(attrName == 'error'){
            this.$error.innerHTML = newValue
        }
        else if(attrName == 'placeholder'){
            this.$main.placeholder = newValue
        }
    }

    //check value of inputUser

    validate = (condition,mess) => {
            if(condition(this.value)) {
         this.setAttribute('error', '')
         return true
            }
            else{
                this.setAttribute('error',mess)
                return false
            }
    }

    
}

window.customElements.define('input-wrapper', InputWrapper)