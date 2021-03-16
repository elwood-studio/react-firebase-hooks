import firebase from 'firebase/app';
import { Data, DataOptions, OnceOptions, OnceDataOptions, Options } from './types';
export declare const useCollection: <T = firebase.firestore.DocumentData>(query?: firebase.firestore.Query<T> | null | undefined, options?: Options | undefined) => [firebase.firestore.QuerySnapshot<T> | undefined, boolean, firebase.FirebaseError | undefined];
export declare const useCollectionOnce: <T = firebase.firestore.DocumentData>(query?: firebase.firestore.Query<T> | null | undefined, options?: OnceOptions | undefined) => [firebase.firestore.QuerySnapshot<T> | undefined, boolean, firebase.FirebaseError | undefined];
export declare const useCollectionData: <T = firebase.firestore.DocumentData, IDField extends string = "", RefField extends string = "">(query?: firebase.firestore.Query<T> | null | undefined, options?: DataOptions<T> | undefined) => [Data<T, IDField, RefField>[] | undefined, boolean, firebase.FirebaseError | undefined];
export declare const useCollectionDataOnce: <T = firebase.firestore.DocumentData, IDField extends string = "", RefField extends string = "">(query?: firebase.firestore.Query<T> | null | undefined, options?: OnceDataOptions<T> | undefined) => [Data<T, IDField, RefField>[] | undefined, boolean, firebase.FirebaseError | undefined];
