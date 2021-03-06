const getAvatar = (authReducer, profileReducer) => {
  if (profileReducer.uploadedAvatar || profileReducer.deletedAvatar) {
    return profileReducer.uploadedAvatar;
  }

  if (authReducer.avatar) {
    return authReducer.avatar;
  }
};

export default getAvatar;
