import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import TextInput from "../components/UIKit/TextInput";
import { resetPassword } from "../reducks/users/operations";

const Reset = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  return (
    <div>
      <h2>パスワードのリセット</h2>
      <div>
        <TextInput
          fullWidth={true}
          label={"メールアドレス"}
          multiline={false}
          required={true}
          rows={1}
          value={email}
          type={"email"}
          onChange={inputEmail}
        />
      </div>
      <div>
        <Button onClick={() => dispatch(resetPassword(email))}>
          パスワードをリセット
        </Button>
        <p
          onClick={() => {
            dispatch(push("/signin"));
          }}
        >
          ログイン画面に戻る
        </p>
      </div>
    </div>
  );
};

export default Reset;
