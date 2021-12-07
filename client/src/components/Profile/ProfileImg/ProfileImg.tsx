/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { storage } from "../../../utils/FirebaseConfig";

export default function ProfileImg({userPicture, handleEditing, handleForm, user_details}:any) {

  const [profileImage, setProfileImage] = useState(userPicture 
    ? userPicture
    :"https://www.turnkeytec.com/wp-content/uploads/2020/07/placeholder-image-400x300.jpg");
    
  const [url, setUrl] = useState("");

  //////////  FIREBASE PICTURE UPDATE  ///////////

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    const chosenImage = file;
    if (chosenImage) {
      const uploadTask = storage.ref(`images/${chosenImage.name}`).put(chosenImage);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(chosenImage.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              setProfileImage(url);
              // UPDATE PROFILE OBJECT AND SEND IMAGE TO DB
              target.setAttribute('newimageurl', url);
              handleForm(e)
              handleEditing(true);
            });
        }
      );
    }
  }

  return (
    <div style={{ backgroundImage: `url(${profileImage})` }} className="w-60 h-60 m-5 rounded-full bg-cover bg-center bg-no-repeat hover:scale-100">
      <input
        type="file"
        accept="image/gif, image/png, image/jpeg, image/jpg"
        id="profileImgUpload"
        className="h-full w-full rounded-full opacity-0 cursor-pointer"
        name="image"
        onChange={(e) => handleChange(e)} />
    </div>
  )
}