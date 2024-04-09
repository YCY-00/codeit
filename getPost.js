/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const lastUser = users[users.length - 1];
    return lastUser.id;
  })
  .then((id) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`))
  .then((response) => response.json())
  .then((posts) => {
    const lastPost = posts[posts.length - 1];
    console.log(lastPost);
  });
*/

async function getTheLastPostOfTheLastUser() {
  const user_response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await user_response.json()
  const lastUser = users[users.length - 1];
  const post_response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${lastUser.id}`)
  const posts = await post_response.json()
  const lastPost = posts[posts.length - 1];
  return lastPost; // async 함수는 항상 Promise 객체를 반환한다. 다른 값을 반환하는 경우, 해당 값을 작업 성공 결과로 지닌 프로미스 객체를 반환한다.
}

getTheLastPostOfTheLastUser().then((lastPost) => {
  console.log(lastPost);
});