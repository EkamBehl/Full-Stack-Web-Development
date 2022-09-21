// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc, initializeFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ,
  authDomain: "task7-1p-d5ab1.firebaseapp.com",
  projectId: "task7-1p-d5ab1",
  storageBucket: "task7-1p-d5ab1.appspot.com",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});
export const auth=getAuth();
export const signInWithGooglePopup=()=> signInWithPopup(auth,provider);
export const db=getFirestore();
export const createUserDocFromAuth=async(userAuth,additonalInformation={})=>{
    if(!userAuth.email) return;
    const userDocRef=doc(db,'users',userAuth.uid);
    const userSnapshot=await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const{name,email}=userAuth;
        const createdAt=new Date();
    
        try{
            await setDoc(userDocRef,{
                name,email,createdAt,...additonalInformation
            })}catch(error){
        console.log(error);
    }
}       
    

}
export const createAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
}
export const signInAuthUserWithEmailAndPassword= async(email,password)=>{
    if(!email || !password){return alert("stupid")};
    return await signInWithEmailAndPassword(auth,email,password);
}
