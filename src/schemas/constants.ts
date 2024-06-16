import { DocumentData, DocumentReference } from 'firebase/firestore';
import { z } from 'zod';

export const firestoreReferenceSchema = z.custom<
  DocumentReference<DocumentData>
>((data) => {
  if (data instanceof DocumentReference) return data;
  throw new Error('Invalid firestore reference!');
});
