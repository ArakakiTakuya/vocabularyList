import { db, FirebaseTimestamp } from "../../firebase";
import { push } from "connected-react-router";

const listsRef = db.collection("lists");

export const saveList = (listName, description, wordCards, creatorId) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now();

    const data = {
      listName: listName,
      description: description,
      list: wordCards,
      creatorId: creatorId,
      updated_at: timestamp,
    };

    const ref = listsRef.doc();
    const id = ref.id;
    data.id = id;
    data.created_at = timestamp;

    return listsRef
      .doc(id)
      .set(data)
      .then(() => {
        dispatch(push("/home"));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};

export const updateList = (listId, wordCards, type) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now();

    const data = {
      list: wordCards,
      updated_at: timestamp,
    };

    return listsRef
      .doc(listId)
      .set(data, { merge: true })
      .then(() => {
        dispatch(push(`/list/${listId}`));
        if (type === "delete") {
          alert(
            "選択した単語を消去しました。ページを更新して確認してください。"
          );
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};
