const visitor = document.getElementById("visitor")
const subject = document.getElementById("subject")
const comments = document.getElementById("comments")
const blog = document.getElementById("blog-wrapper");
document.getElementById("submit").addEventListener("click", addBlog);
loadBlogs();


function loadBlogs() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText);
    for (var i in data) {
      blog.innerHTML += postBlog(data[i].visitor, data[i].subject, data[i].comments);
    }}};
  xmlhttp.open("POST", "load.php", true);
  xmlhttp.send();
}


function saveBlog(visitor, subject, comments) {
  comments = comments.replace(/\r?\n/g, '<br />');
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "save.php?visitor=" + visitor + "&subject=" + subject + "&comments=" + comments, true);
  xmlhttp.send();
}


function addBlog(ev){
  ev.preventDefault();
  if(visitor.value != "" && subject.value != "" && comments.value != ""){
    blog.innerHTML += postBlog(visitor.value, subject.value, comments.value);
    saveBlog(visitor.value, subject.value, comments.value);
    document.getElementById("blog-form").reset();
    document.getElementById("submit").blur();
  }
}


function postBlog(visitor, subject, comments) {
  comments = comments.replace(/\r?\n/g, '<br />');
  bPost = "<div class = 'blog'><span class = 'blog-visitor'>Name:&nbsp&nbsp<strong>" + visitor + "</strong></span><span class = 'blog-subject'>Subject:&nbsp&nbsp<strong>" + subject + "</strong></span><p class= 'blog-comments'>" + comments + "</p></div>";
  return  bPost;
}



