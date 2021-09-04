import {firebase, googleProvider}  from "../firebase/firebase";

export const startLogin = () => {
    return () => {
        //questo ci dice che vogliamo loggare con un popup system con i servizi di google
        return firebase.auth().signInWithPopup(googleProvider);
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}