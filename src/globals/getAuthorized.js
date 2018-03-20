const getAuthorized = authReducer => {
  let authorized;
  if(authReducer.data && authReducer.data.authorized) {
    authorized = authReducer.data.authorized;
  }
  
  return authorized;
};

export default getAuthorized;
