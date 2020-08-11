import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { updateList } from "../reducks/lists/operations";
import TextInput from "../components/UIKit/TextInput";
import Icon from "@material-ui/core/Icon";
import "../styles/vocabulary-list.css";

const VocabularyList = ({ words, listId }) => {
  const dispatch = useDispatch();
  const [openAddWordDialog, setOpenAddWardDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [targetWord, setTargetWord] = useState({});
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleClickOpen = (type) => {
    if (type === "add") {
      setOpenAddWardDialog(true);
    } else {
      setOpenDialog(true);
    }
  };

  const handleClose = (type) => {
    if (type === "add") {
      setOpenAddWardDialog(false);
    } else {
      setOpenDialog(false);
    }
  };

  const inputWord = useCallback(
    (e) => {
      setWord(e.target.value);
    },
    [setWord]
  );

  const inputMeaning = useCallback(
    (e) => {
      setMeaning(e.target.value);
    },
    [setMeaning]
  );

  return (
    <div>
      <h2 className="title">収録単語一覧({words.length})</h2>
      <div className="vocabulary_list">
        {words.map((word, i) => (
          <Paper variant="outlined" square className="paper" key={i}>
            <h4>{word.word}</h4>
            <h5> {word.meaning}</h5>
            <div className="delete_btn" id={i}>
              <IconButton
                aria-label="delete"
                onClick={(e) => {
                  const targetIdx = e.currentTarget.parentNode.getAttribute(
                    "id"
                  );
                  setTargetWord(words[targetIdx]);
                  handleClickOpen("delete");
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Paper>
        ))}
      </div>
      <div className="btn">
        <IconButton onClick={() => handleClickOpen("add")}>
          <Icon className="addIcon" color="error" style={{ fontSize: 60 }}>
            add_circle
          </Icon>
        </IconButton>
      </div>
      <>
        <Dialog
          open={openDialog}
          onClose={() => {
            handleClose("delete");
          }}
        >
          <DialogContent>
            <DialogContentText>この単語を消去しますか？</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              いいえ
            </Button>
            <Button
              onClick={() => {
                const newWordsArr = words.filter((word) => word !== targetWord);
                dispatch(updateList(listId, newWordsArr, "delete"));
                handleClose("delete");
              }}
              color="primary"
            >
              はい
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openAddWordDialog}
          onClose={() => {
            handleClose("add");
          }}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle>新しい単語の追加</DialogTitle>
          <DialogContent>
            <DialogContentText>
              追加したい単語とその日本語訳を記入してください。
            </DialogContentText>
            <TextInput
              label="単語"
              fullWidth
              onChange={inputWord}
              multiline={false}
              required={true}
              rows={1}
            />
            <TextInput
              label="日本語訳"
              fullWidth
              onChange={inputMeaning}
              multiline={false}
              required={true}
              rows={1}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleClose("add");
              }}
              color="primary"
            >
              キャンセルする
            </Button>
            <Button
              onClick={() => {
                if (word === "" || meaning === "") {
                  alert("必須項目が未入力です。");
                  return;
                }
                words.push({ word: word, meaning: meaning });
                dispatch(updateList(listId, words, "add"));
                handleClose("add");
              }}
              color="primary"
            >
              追加する
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </div>
  );
};

export default VocabularyList;
