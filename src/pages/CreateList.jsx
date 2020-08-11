import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextInput from "../components/UIKit/TextInput";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import "../styles/create-list.css";
import WordCard from "../components/WordCard";
import { saveList } from "../reducks/lists/operations";

const CreateList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = selector.users.uid;
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const [wordcards, setWordCard] = useState([
    { word: "", meaning: "" },
    { word: "", meaning: "" },
    { word: "", meaning: "" },
  ]);

  const inputListName = useCallback(
    (e) => {
      setListName(e.target.value);
    },
    [setListName]
  );

  const inputDescription = useCallback(
    (e) => {
      setDescription(e.target.value);
    },
    [setDescription]
  );

  return (
    <div className="create-list">
      <h2>新しい単語帳を作成する</h2>
      <TextInput
        fullWidth={true}
        label={"単語帳の名前: "}
        multiline={false}
        required={true}
        rows={1}
        value={listName}
        onChange={inputListName}
      />
      <TextInput
        fullWidth={true}
        label={"説明: "}
        multiline={false}
        rows={1}
        value={description}
        onChange={inputDescription}
      />
      {wordcards.map((card, i) => (
        <WordCard wordcard={wordcards[i]} key={i} />
      ))}
      <span className="btn-container">
        <span className="btn-left">
          <IconButton
            onClick={() => {
              setWordCard([...wordcards, { word: "", meaning: "" }]);
            }}
          >
            <Icon className="addIcon" color="error" style={{ fontSize: 60 }}>
              add_circle
            </Icon>
          </IconButton>
        </span>
        <span className="btn-right">
          <Button
            style={{
              background: "#f44336",
              color: "#fff",
            }}
            onClick={() => {
              dispatch(saveList(listName, description, wordcards, uid));
            }}
          >
            作成する
          </Button>
        </span>
      </span>
    </div>
  );
};

export default CreateList;
