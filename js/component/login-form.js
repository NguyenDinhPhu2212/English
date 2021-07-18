import { login } from "../modules/user.js";

const $template = document.createElement('template');
$template.innerHTML = `
   <form class = 'login-form'>
         <div class = 'login-background'>
         <h3>Login</h3>
         <input-wrapper class = 'email' type = 'email' error = '' placeholder = 'Email'></input-wrapper>   
         <input-wrapper class = 'password' type = 'password' error = '' placeholder = 'PassWord'></input-wrapper>   
         <button class = 'login-btn'>Login</button>
        <h5>Register Now</h5>
     </div>

  </form>
`;
export default class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$email = this.querySelector('.email')
        this.$password = this.querySelector('.password')
        this.$form = this.querySelector('.login-form')
        this.$h5 = this.querySelector('h5')
    }

    connectedCallback() {

       this.$h5.addEventListener('click', event => {
           event.preventDefault();
           router.navigate('/register')
       })

     this.$form.onsubmit = async (event) => {
         event.preventDefault();
         let email = this.$email.value
         let password = this.$password.value;


         let checked = this.$email.validate((value) => {
            return value != ''
        }, 'Input Your Email') &

        this.$password.validate((value) => {
            return value != ''
        }, 'Input Your PassWord');


        if(checked) {
          await login(email,password)
          
        } 
     }
    }


}

window.customElements.define('login-form', LoginForm)