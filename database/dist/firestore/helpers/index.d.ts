import firebase from 'firebase/app';
export declare const snapshotToData: <T>(snapshot: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>, snapshotOptions?: firebase.firestore.SnapshotOptions | undefined, idField?: string | undefined, refField?: string | undefined, transform?: ((val: any) => T) | undefined) => {} | undefined;
