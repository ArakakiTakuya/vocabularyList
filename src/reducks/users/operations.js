import { auth, db, FirebaseTimestamp } from "../../firebase/index";
import { push } from "connected-react-router";
import { signInAction, signOutAction } from "./actions";

export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;

        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            dispatch(
              signInAction({
                isSignIn: true,
                uid: uid,
                username: data.username,
              })
            );
          });
      } else {
        dispatch(push("/"));
      }
    });
  };
};

export const signUp = (username, email, password, confirmedPassword) => {
  return async (dispatch) => {
    // Validations
    if (
      (username === "", email === "", password === "", confirmedPassword === "")
    ) {
      alert("必須項目が未入力です。");
      return false;
    }
    if (password !== confirmedPassword) {
      alert("パスワードが一致しません。もう1度お試しください。");
      return false;
    }
    if (password.length < 6) {
      alert("パスワードは半角英数字6文字以上で入力してください。");
      return false;
    }

    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();

          const userInitialData = {
            uid: uid,
            username: username,
            email: email,
            created_at: timestamp,
            updated_at: timestamp,
          };

          db.collection("users")
            .doc(uid)
            .set(userInitialData)
            .then(() => {
              dispatch(push("/home"));
            });
        }
      })
      .catch((error) => {
        alert("アカウント登録に失敗しました。もう1度お試しください。");
        throw new Error(error);
      });
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    // Validations
    if ((email === "", password === "")) {
      alert("必須項目が未入力です。");
      return false;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          const uid = user.uid;

          db.collection("users")
            .doc(uid)
            .get()
            .then((snapshot) => {
              const data = snapshot.data();

              dispatch(
                signInAction({
                  isSignIn: true,
                  uid: uid,
                  username: data.username,
                })
              );
              dispatch(push("/home"));
            });
        }
      })
      .catch(() => {
        alert(
          "入力されたメールアドレスまたはパスワードが一致しません。もう一度お試しください。"
        );
      });
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {
    if (email === "") {
      alert("必須項目が未入力です。");
      return false;
    } else {
      return auth
        .sendPasswordResetEmail(email)
        .then(() => {
          alert(
            "入力されたアドレス宛にパスワードリセットのメールをお送りしましたのでご確認ください。"
          );
          dispatch(push("/"));
        })
        .catch(() => {
          alert("パスワードリセットに失敗しました。もう一度ご確認ください。");
        });
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      dispatch(push("/"));
    });
  };
};
