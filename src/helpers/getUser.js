const getUsers = async () => {
  const randomId = Math.floor(Math.random() * 10) + 1;
  const url = "https://jsonplaceholder.typicode.com/users/" + randomId;

  const res = await fetch(url);
  const user = await res.json();
  return user;
};

export default getUsers;
