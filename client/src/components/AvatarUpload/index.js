import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const AvatarUpload = props => {
  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };
  return (
    <ImageUploader
      {...props}
      withIcon={true}
      onChange={onDrop}
      imgExtension={[".jpg",".png"]}
      maxFileSize={5242880}
      name={props}
      withPreview={true}
      buttonText={'Select Your Profile Picture'}
    />
  );
};

export default AvatarUpload
