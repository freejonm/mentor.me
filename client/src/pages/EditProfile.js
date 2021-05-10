import React from 'react';
import EditProfileForm from '../components/EditProfileForm';
import FormUpdateButton from '../components/FormUpdateButton';

function EditProfile() {
return (
    <>
    <EditProfileForm />
    <FormUpdateButton />

      {/* firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  pronouns: { type: String, unique: false, required: false },
  username: { type: String, unique: false, required: false },
  password: { type: String, unique: false, required: false },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  currentPosition: { type: String, unique: false, required: false },
  yearsExperience: {type: String, unique: false, required: false },
  education: { type: String, unique: false, required: false },
  location: */}
    </>
)
}

export default EditProfile;