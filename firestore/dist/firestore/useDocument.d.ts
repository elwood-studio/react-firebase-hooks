import firebase from 'firebase/app';
import { Data, DataOptions, OnceOptions, OnceDataOptions, Options } from './types';
export declare const useDocument: <T = firebase.firestore.DocumentData>(docRef?: firebase.firestore.DocumentReference<T> | null | undefined, options?: Options | undefined) => [firebase.firestore.DocumentSnapshot<T> | undefined, boolean, firebase.FirebaseError | undefined];
export declare const useDocumentOnce: <T = firebase.firestore.DocumentData>(docRef?: firebase.firestore.DocumentReference<T> | null | undefined, options?: OnceOptions | undefined) => [firebase.firestore.DocumentSnapshot<T> | undefined, boolean, firebase.FirebaseError | undefined];
export declare const useDocumentData: <T = firebase.firestore.DocumentData, IDField extends string = "", RefField extends string = "">(docRef?: firebase.firestore.DocumentReference<T> | null | undefined, options?: DataOptions<T> | undefined) => [Data<T, IDField, RefField> | undefined, boolean, firebase.FirebaseError | undefined];
export declare const useDocumentDataOnce: <T = firebase.firestore.DocumentData, IDField extends string = "", RefField extends string = "">(docRef?: firebase.firestore.DocumentReference<T> | null | undefined, options?: OnceDataOptions<T> | undefined) => [Data<T, IDField, RefField> | undefined, boolean, firebase.FirebaseError | undefined];
