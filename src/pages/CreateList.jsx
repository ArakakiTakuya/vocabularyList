import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextInput from "../components/UIKit/TextInput";
import Icon from "@material-ui/core/Icon";
import "../styles/create-list.css";

const CreateList = () => {
  return (
    <div className="create-list">
      <h2>新しい単語帳を作る</h2>
      <TextInput
        fullWidth={true}
        label={"単語帳の名前: "}
        multiline={false}
        required={true}
        rows={1}
      />
      <TextInput fullWidth={true} label={"説明: "} multiline={false} rows={1} />
      <Card className="card">
        <CardContent>
          <TextInput label={"単語: "} multiline={false} rows={1} />
          <TextInput label={"意味: "} multiline={false} rows={1} />
        </CardContent>
      </Card>
      <Card className="card">
        <CardContent>
          <TextInput label={"単語: "} multiline={false} rows={1} />
          <TextInput label={"意味: "} multiline={false} rows={1} />
        </CardContent>
      </Card>
      <Card className="card">
        <CardContent>
          <TextInput label={"単語: "} multiline={false} rows={1} />
          <TextInput label={"意味: "} multiline={false} rows={1} />
        </CardContent>
      </Card>
      <Icon className="addIcon" color="error" style={{ fontSize: 60 }}>
        add_circle
      </Icon>
    </div>
  );
};

export default CreateList;
