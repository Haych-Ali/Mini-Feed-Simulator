let feed = [];
let nextId =1;

const createPost = (username, content) =>{
  let post = {
    id: nextId++,
    username: username,
    content: content,
    likes: 0,
    timestamp: Date.now(),
  }
  feed.push(post)


}

const likePost=(postId)=>{
  const getPost = feed.find(post => post.id === postId)
  if (getPost){
    getPost.likes+=1
  }
  
  

}

const getFeed=()=>{
  return feed


}

const sortByNewest =() =>{
  
  return feed.sort((post1,post2)=>post2.timestamp - post1.timestamp || post2.id - post1.id)

}

const sortByLikes =()=>{
  feed.sort((post1, post2) => post2.likes - post1.likes)
  return feed
}
const getPostsByUser = (username)=>{
  const post = feed.filter(posting => posting.username === username)
  return post
  
}


createPost("alex", "Hello world")
createPost("paul", "Learning JavaScript is fun")


likePost(1)
likePost(1)

console.log(sortByLikes())
console.log(getPostsByUser("alex"))
