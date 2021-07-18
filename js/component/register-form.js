import { register } from "../modules/user.js";


const $template = document.createElement('template');
$template.innerHTML =`
   <form class ='register-form'>
   <div class = 'register-background'>
      <h3>Register</h3>
      <input-wrapper class = 'name' type = 'text' error = '' placeholder = 'Name'></input-wrapper>   
      <input-wrapper class = 'phone' type = 'tel' error = '' placeholder = 'Phone Number'></input-wrapper>   
      <input-wrapper class = 'email' type = 'email' error = '' placeholder = 'Email'></input-wrapper>   
      <input-wrapper class = 'password' type = 'password' error = '' placeholder = 'PassWord'></input-wrapper>   
      <input-wrapper class = 'password-confirmation' type = 'password' error = '' placeholder = 'Password Confirmation'></input-wrapper>   
     <button class = 'register-btn'>Register</button>
    </div>
   </form>


`

export default class RegisterForm extends HTMLElement {
    constructor() {
        super()
        this.appendChild($template.content.cloneNode(true))
        this.$name = this.querySelector('.name')
        this.$email = this.querySelector('.email')
        this.$phone = this.querySelector('.phone')
        this.$password = this.querySelector('.password')
        this.$passwordConfirmation = this.querySelector('.password-confirmation')
        this.$form = this.querySelector('.register-form')
       
    }
      
    //when user click button
    connectedCallback(){
        this.$form.onsubmit = async (event) => {
            event.preventDefault();
        let name = this.$name.value;
        let phone = this.$phone.value;
        let email = this.$email.value;
        let password = this.$password.value;
        let passwordConfirmation = this.$passwordConfirmation.value;
        
       let checked = this.$name.validate((value) =>  {
            return value != ''
        }, 'Input Your Name') &

        this.$phone.validate((value) => {
            return value != ''
        }, 'Input Your PhoneNumber') &

        this.$email.validate((value) => {
            return value != ''
        }, 'Input Your Email') &

        this.$password.validate((value) => {
            return value != ''
        }, 'Input Your PassWord') &

        this.$passwordConfirmation.validate((value) => {
            return value != '' && value == password
        }, 'Confirm Password') 


      if(checked) {
          await register(name, email, password,phone);
        
         
      }
            
        }
    }

  
}

window.customElements.define('register-form', RegisterForm)