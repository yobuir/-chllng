export function setRefreshToken() {
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');
  if (refreshToken) {
    document.cookie = `refreshToken=${refreshToken}; path=/;`;
    document.cookie = `accessToken=${accessToken}; path=/;`;
  }
}
