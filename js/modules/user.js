import {
    getDataFromDoc
} from "./unit.js";

export async function register(name, email, password, phoneNumber) {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.auth().currentUser.updateProfile({
        displayName: name
    })

    let UID = firebase.auth().currentUser.uid;
    await firebase.firestore().collection('users').doc(UID).set({
        name: name,
        phoneNumber: phoneNumber,
        speaking: false,
        writting: false,
        reading: false,
        listening: false

    })


}

export async function login(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password)
}

export async function onAuthChanged(cb) {
    await firebase.auth().onAuthStateChanged(user => {
        cb(user)
    })
}

export function signOut() {
    firebase.auth().signOut()
}
export async function getUser() {
    let currentUser = firebase.auth().currentUser;
    let res = await firebase.firestore().collection('users').doc(currentUser.uid).get();
    return getDataFromDoc(res);
}
export async function updateUser(data, id) {
    await firebase.firestore().collection('users').doc(id).update(data)


}

export function realTime(cb) {
    let currentUser = firebase.auth().currentUser;
    firebase.firestore().collection('users').doc(currentUser.uid).onSnapshot(res => {
        cb(getDataFromDoc(res));
    })
}
export async function getDictionary(word) {
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
    data = await data.json();
    return data
}
export function getFlashCard(cb) {
    let currentUser = firebase.auth().currentUser

    firebase.firestore().collection('users').doc(currentUser.uid).onSnapshot(res => {
        cb(getDataFromDoc(res));
    })
}

export async function addFlashCard(question, answer) {
    let currentUser = firebase.auth().currentUser;
    let flashcards = {
        answer: answer,
        question: question

    }

    await firebase.firestore().collection('users').doc(currentUser.uid).update({
        flashcard: firebase.firestore.FieldValue.arrayUnion(flashcards)
    })
}

export async function removeFlashcard() {
    let currentUser = firebase.auth().currentUser;
    await firestore.firestore().collection('user').doc(currentUser.uid).update({
        flashcard :firestore.FieldValue.remove()
    })
}