const getPosts = async (userId) => {
    console.log(userId);
    const url = "https://jsonplaceholder.typicode.com/comments?postId="+userId 

    const res = await fetch(url);
    const posts = await res.json();
    return posts;
  };
  
  export default getPosts;
  