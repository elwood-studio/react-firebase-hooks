import firebase from 'firebase/app';
import { LoadingHook } from '../util';
export declare type Val<T, KeyField extends string = '', RefField extends string = ''> = T & Record<KeyField, string> & Record<RefField, string>;
export declare type ObjectHook = LoadingHook<firebase.database.DataSnapshot, firebase.FirebaseError>;
export declare type ObjectValHook<T, KeyField extends string = '', RefField extends string = ''> = LoadingHook<Val<T, KeyField, RefField>, firebase.FirebaseError>;
export declare type ListHook = LoadingHook<firebase.database.DataSnapshot[], firebase.FirebaseError>;
export declare type ListKeysHook = LoadingHook<string[], firebase.FirebaseError>;
export declare type ListValsHook<T, KeyField extends string = '', RefField extends string = ''> = LoadingHook<Val<T, KeyField, RefField>[], firebase.FirebaseError>;
