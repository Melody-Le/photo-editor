import React, { useRef, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Button } from "@mui/material";
import { height, styled } from "@mui/system";

const StyleBox = styled(Box)({
  background: "#ddd",
  fontFamily: "Roboto mono",
  minHeight: "20rem",
  maxHeight: "100vh",
  marginBottom: "1rem",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

function ImageField() {
  const uploadInputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const handleChangeInput = (evnt) => {
    setImageFile(URL.createObjectURL(evnt.target.files[0]));
  };
  const renderImage = () => (
    <figure style={{ width: "100%", height: "100%" }}>
      <StyledImage src={imageFile} />
    </figure>
  );
  return (
    <Grid item xs={12} md={7}>
      <StyleBox
        onClick={() => {
          uploadInputRef.current && uploadInputRef.current.click(); //NOTE: why need to have "uploadInputRef.current"
        }}
      >
        {imageFile ? renderImage() : <p>Upload Image</p>}
      </StyleBox>
      <input
        onChange={handleChangeInput}
        ref={uploadInputRef}
        type="file"
        accept="image/*"
        hidden
      />
      <Button disabled={!imageFile} variant="contained" fullWidth>
        Download Image
      </Button>
    </Grid>
  );
}

export default ImageField;
