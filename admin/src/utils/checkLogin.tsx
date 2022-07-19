export default function checkLogin() {
  return !!localStorage.getItem('token'); //确保值为布尔值
}
