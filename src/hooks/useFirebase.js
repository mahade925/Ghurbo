import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { useState, useEffect } from 'react';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
        
            .finally(() => setIsLoading(false));
    }

    // Sign up a new user
    const createNewUser = (name, email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
              const user = result.user;
              console.log(user);
              setError("")
              updateProfile(auth.currentUser, {displayName: name})
              .then(result => {})
              .finally(() => setIsLoading(true));
          }).catch(error => {
              setError(error.message)
          })
          
    }

    // Login a existing user
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
              const user = result.user;
              console.log(user);
              setError("")
          }).catch(error => {
              setError(error.message);
          })
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(false);
        signOut(auth)
            .then(() => {})
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        error,
        isLoading,
        createNewUser,
        processLogin,
        signInUsingGoogle,
        logOut,
        setUser
    }
}

export default useFirebase;