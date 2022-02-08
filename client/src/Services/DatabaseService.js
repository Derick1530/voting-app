import { db } from '../firebase'
import { getDocs, getDoc, addDoc, setDoc, doc, deleteDoc, updateDoc, collection } from "@firebase/firestore";

class DatabaseService {
    collection
    constructor(collectionName) {
        this.collection = collection(db, collectionName);

    }
    getAll = async () => {
        const snapshot = await getDocs(this.collection);
        return snapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        })
    }
    getOne = async ({ queryKey }) => {
        const { id } = queryKey[1]

        if (!id) {
            console.log("#ERRor", id)
        }
        const docRef = doc(this.collection, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        }
    }

    getReference = async (documentReference) => {
        const res = await documentReference.get();
        const data = res.data();
        if (data && documentReference.id) {
            data.ui = documentReference.id
        }
        return data
    }
    create = async (data, id) => {
        // return await addDoc(this.collection, data);
        return await setDoc(doc(this.collection, id), data);
    }
    update = async (data) => {
        return await updateDoc(doc(this.collection), data);
    }
    remove = async (id) => {
        return await deleteDoc(doc(this.collection, id));
    }
}

export const users = new DatabaseService('users');
export const candidate = new DatabaseService('candidat');
