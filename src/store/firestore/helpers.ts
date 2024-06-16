import { DocumentData, DocumentReference, getDoc } from 'firebase/firestore';

/**
 *
 * @param ref reference to the document
 * @returns document data
 */

export const getReferenceDoc = async (
  ref: DocumentReference<DocumentData>,
): Promise<DocumentData> => {
  try {
    const snapshot = await getDoc(ref);
    if (!snapshot.exists()) throw new Error('Document reference is invalid!');
    return snapshot.data();
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @param document document data
 * @param attributeNames array of attribute names
 * @returns document data with extended attributes
 */

export const getReferenceDocAttribute = async (
  document: DocumentData,
  attributeNames: (keyof DocumentData)[],
): Promise<DocumentData> => {
  try {
    const extendedDoc: DocumentData = await attributeNames.reduce(
      async (_data: Promise<DocumentData>, attributeName) => {
        try {
          const data = await _data;
          const itemAttributeDoc = await getReferenceDoc(
            document[attributeName],
          );
          return { ...data, [attributeName]: itemAttributeDoc };
        } catch (e) {
          throw e;
        }
      },
      Promise.resolve(document),
    );
    return extendedDoc;
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @param ref reference to the document
 * @param attributeNames array of attribute names
 * @returns document data
 */

const getDocument = async (
  ref: DocumentReference<DocumentData>,
  attributeNames?: (keyof DocumentData)[],
): Promise<DocumentData> => {
  try {
    const document = await getReferenceDoc(ref);
    if (!attributeNames) return document;
    const extendedDoc = await getReferenceDocAttribute(
      document,
      attributeNames,
    );
    return extendedDoc;
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @param refs array of references to the documents
 * @param attributeNames array of attribute names
 * @returns array of document data
 */

export const getReferenceDocArray = async (
  refs: DocumentReference<DocumentData>[],
  attributeNames?: (keyof DocumentData)[],
): Promise<DocumentData[]> => {
  try {
    const docs = await refs.reduce(
      async (_data: Promise<DocumentData[]>, ref) => {
        try {
          const data = await _data;
          const document = await getDocument(ref, attributeNames);
          data.push(document);
          return data;
        } catch (e) {
          throw e;
        }
      },
      Promise.resolve([]),
    );
    return docs;
  } catch (e) {
    throw e;
  }
};
