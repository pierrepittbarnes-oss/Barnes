function addNotification(text){
const list=document.getElementById("notifications");
const li=document.createElement("li");
li.textContent=text;
list.appendChild(li);
}
addNotification("jean paul t'a envoye un message");
addNotification("Marie a aime ton post");
addNotification("Nouvel utilisateur inscrit");