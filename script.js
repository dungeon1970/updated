loadJson();
document.getElementById("submit").addEventListener("click", addBlog);

function loadJson(){
  fetch("comments.json")
  .then(response => {
     return response.json();
  })
  .then(function(data){
      loadComments(data);
  });
}

function loadComments(data) {
    let blog = document.getElementById("blog-wrapper");
    for (var i = 0; i < data.length; i++) 
    {
      blog.innerHTML += blogPost(data[i].name, data[i].subject, data[i].comments);
    }
}

function blogPost(name, subject, comments) {
        bPost = "<div class = 'blog'><span class = 'comment-name'>Name:&nbsp&nbsp<strong>" + name + "</strong></span><span class = 'comment-subject'>Subject:&nbsp&nbsp<strong>" + subject + "</strong></span><p class= 'comments'>" + comments + "</p></div>";
        return  bPost;
}

function addBlog(ev){
  // ev.preventDefault();
  let name = document.getElementById("name")
  let subject = document.getElementById("subject")
  let comments = document.getElementById("comments")
  let blog = document.getElementById("blog-wrapper");
  if(name.value != "" && subject.value != "" && comments.value != ""){
    blog.innerHTML += blogPost(name.value, subject.value, comments.value);
    document.getElementById("blog-form").reset();
    document.getElementById("submit").blur();
  }
}