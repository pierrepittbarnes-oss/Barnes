function addPost(){
const input=document.getElementById("postInput");
const text=input.value;
const feed=document.getElementById("feed");
if(!text)return;
cons post=document.createElement("div");
post.classList.add("post");
post.innerHtml=`
<span class="delete" onclick="this.parentElement.remove()">x</span>
${text}

feed.prepend(post);
input.value="";
}

