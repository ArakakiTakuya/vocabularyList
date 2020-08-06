import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import TextInput from "../components/UIKit/TextInput";
import { signIn } from "../reducks/users/operations";

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  return (
    <div>
      <h2>サインイン</h2>
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
        <TextInput
          fullWidth={true}
          label={"パスワード（半角英数字で6文字以上）"}
          multiline={false}
          required={true}
          rows={1}
          value={password}
          type={"password"}
          onChange={inputPassword}
        />
      </div>
      <div>
        <Button onClick={() => dispatch(signIn(email, password))}>
          サインイン
        </Button>
        <p
          onClick={() => {
            dispatch(push("/signup"));
          }}
        >
          アカウント登録をお持ちでない方はこちら
        </p>
        <p
          onClick={() => {
            dispatch(push("/signin/reset"));
          }}
        >
          パスワードを忘れた方はこちら
        </p>
      </div>
    </div>
  );
};

export default SignIn;
