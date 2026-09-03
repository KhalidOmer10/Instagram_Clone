const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh", 
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const headerEl  = document.getElementById("header-el")
const articleEl = document.getElementById("article-el")
let myPosts = ""
let lengt = 0

headerEl.innerHTML = `
        <img class="logo" src="images/logo.png">
        <img class="header-image" src="/images/user-avatar.png">
    `
for (let i = 0; i < 3; i++) {
    articleEl.innerHTML += `
        <div class="block">
            <img class="van-prof-image" src="${posts[i].avatar}">
            <div class="info">
                <h1 class="vincent-name">${posts[i].name}</h1>
                <h2>${posts[i].location}</h1>
            </div>
        </div>
        <img class="van-post" src="${posts[i].post}">

        <li class="list">
            <ul class="space">
                <img class="icons heart-icon" src="/images/icon-heart.png">
                <img class="icons" src="/images/icon-comment.png">
                <img class="icons" src="/images/icon-dm.png">
            </ul>
        </li>
        <div class="likes-and-comments">
            <h1 class="likes">${posts[i].likes} likes</h1>
            <h1>${posts[i].username} <span>${posts[i].comment}</span></h1>
        </div>
        <div class="separator"></div>

    `
    
    if(i === posts.length - 1) {
        const separatorEl = document.querySelectorAll(".separator")
        separatorEl[separatorEl.length - 1].classList.replace("separator", "no-separator")
        lengt = separatorEl.length
    }
}

const heartIcons = document.querySelectorAll(".heart-icon")
const likesEl   = document.querySelectorAll(".likes")

heartIcons.forEach(function(heart) {
    heart.addEventListener("click", function(event) {

        const index = Array.from(heartIcons).indexOf(event.target);
        likesEl[index].textContent = `${posts[index].likes += 1} likes`
    });
});
/*heartIcon[1].addEventListener ("click", function() {
   likesEl[1].textContent = `${posts[1].likes += 1} likes` 
})
*/