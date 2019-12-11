const UserRequests = (requestInstance, baseUrl) => ({
  register: ({ firstName, lastName, email, password, accountId }) =>
    requestInstance.post(`${baseUrl}/auth/register`, {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      account_id: accountId || null
    }),

  newPassword: (username, password, newPassword, givenName, familyName) =>
    requestInstance
      .post(`${baseUrl}/auth/login`, {
        username,
        password,
        newPassword,
        familyName,
        givenName
      })
      .catch(error => {
        if (error === "not authenticated") {
          return {};
        }
        throw error;
      }),

  login: (email, password) =>
    requestInstance.post(`${baseUrl}/auth/login`, {
      email,
      password
    }),

  fetchUserAccount: accountId =>
    requestInstance.get(`${baseUrl}/auth/account/${accountId}`),

  updateAccountInfo: (accountId, data) =>
    requestInstance.patch(`${baseUrl}/auth/account/${accountId}`, data),

  getUserId: cognitoId =>
    requestInstance.get(`${baseUrl}/auth/coginto?cognito_id=${cognitoId}`)
});

export default UserRequests;
