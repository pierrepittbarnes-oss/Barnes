function addStory(){
const text=document.getElementById("story");
const container=document.getElementById

if(!text)retourn;
cont story=document.createElement("
story.classList.add("story");
story.innerHtml=`
<span class="delete" onclick="this.pa
${text}
`;
container.appenChild(story);
document.getElementById("storyText").value

setTime(()=>{
story.remove();
},10000);
}