import React from "react";
// import Avatar from "@mui/material/Avatar";
import {
  // ImageField,
  useRecordContext,
} from "react-admin";
import { Box } from "@mui/material";

const MyImageField = () => {
  // const {collectionId, id, avatar} = source;
  const record = useRecordContext();
  const src = `https://powerful-daybreak.pockethost.io/api/files/${record.collectionId}/${record.id}/${record.imagen}?thumb=100x100`;
  console.log(src);
  return (
    <Box
      sx={{
        width: 100,
        height: 100,
      }}
    >
      <img width={100} height={100} src={src} alt={record.imagen} />
    </Box>
  );
};

export default MyImageField;
