import HeaderTag from "./component/header-tag.js";
import InputWrapper from "./component/input-wrapper.js";
import RegisterForm from "./component/register-form.js";
import LoginForm from "./component/login-form.js";
import HomeScreen from "./component/course/homeScreen.js";
import Dictionary from "./component/course/dictionary.js";
import FlashCard from "./component/course/flashCard.js";
import SpeakContainer from "./component/course/speak-course.js";
import ListeningContainer from "./component/course/listeningContainer.js";
import './navigo.js'
import { onAuthChanged } from "./modules/user.js";
import addFlashCard from './component/course/addFlashcard.js'
import ReadContainer from "./component/course/readContainer.js"
import WritingSkill from "./component/course/WritingSkill.js"
import WriteContainer from "./component/course/writeContainer.js"
import CommentPage from "./component/data/commentPage.js"
onAuthChanged(user => {
    if(user) {
        router.navigate('/homeScreen')
    }
    else{
        router.navigate('/headerTag')
    }
})
