import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import TextInput from "../components/UIKit/TextInput";
import { signUp } from "../reducks/users/operations";

const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const inputUsername = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [setUsername]
  );

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

  const inputConfirmedPassword = useCallback(
    (e) => {
      setConfirmedPassword(e.target.value);
    },
    [setConfirmedPassword]
  );

  return (
    <div>
      <h2>アカウント登録</h2>
      <div>
        <TextInput
          fullWidth={true}
          label={"ユーザー名"}
          multiline={false}
          required={true}
          rows={1}
          value={username}
          type={"text"}
          onChange={inputUsername}
        />
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
        <TextInput
          fullWidth={true}
          label={"パスワードの再確認"}
          multiline={false}
          required={true}
          rows={1}
          value={confirmedPassword}
          type={"password"}
          onChange={inputConfirmedPassword}
        />
      </div>
      <div>
        <Button
          onClick={() =>
            dispatch(signUp(username, email, password, confirmedPassword))
          }
        >
          アカウントを登録する
        </Button>
        <p onClick={() => dispatch(push("/signin"))}>
          アカウントをお持ちの方はこちら
        </p>
      </div>
    </div>
  );
};

export default SignUp;
