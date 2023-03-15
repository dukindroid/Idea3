import React from "react";
import Avatar from "@mui/material/Avatar";
import { useRecordContext } from "react-admin";

const AvatarField = () => {
  // const {collectionId, id, avatar} = source;
  const record = useRecordContext();
  const src = `https://powerful-daybreak.pockethost.io/api/files/${record.collectionId}/${record.id}/${record.avatar}?thumb=100x100`;
  // console.log(src)
  return (
    <>
      <Avatar src={src} alt={record.avatar} />
    </>
  );
};

export default AvatarField;
