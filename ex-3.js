//  Start coding here
class User {
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class PostList {
    constructor () {
        this.posts = [];
    }
    addPost(post) {
        this.posts.push({
            id: this.posts.length+1,
            title: post.title,
            content: post.content,
            comment: post.comments,
        })
    }
    sharePost(postId) {
        console.log(`You've shared post ${this.posts[postId - 1].title} to your friend.`)
    }
}
class Post {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comments = [];
    }
    addComment(comment) {
        this.comments.push({
            id: comment.id,
            title: comment.title,
            content: comment.content,
        })
    }
}
class Comment {
    constructor (id, content, createdBy, like) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }
    addlike() {
        this.like = this.like + 1
    }
}
class Facebook {
    constructor(){
        this.groupList = []
        this.pageList = []
    }
    addGroupList(group){
        this.groupList.push(group)
    }
    addPageList(page){
        this.pageList.push(page)
    }
}
class FacebookGroup {
    constructor(name){
        this.name = name;
    }
}
class FacebookPage {
    constructor(name){
        this.name = name;
    }
}
class Notification {
    constructor(id){
        this.id = id;
    }
    send(comment,post) {
        console.log(`Notification: ${comment.createdBy.name} 
            has just commented on this post-"${post.title}"` )
    }
}
const ant = new User(1,"Ant","Ant@gmail.com")
console.log(ant)
const  postList = new PostList()
const firstPost = new Post(1,"Ant's firstPost","Ant content")
const firstComment = new Comment(1,"content comment","Ant")
firstComment.addlike()
firstComment.addlike()
console.log(firstComment.like)
postList.addPost(firstPost)
console.log(postList)
firstPost.addComment(firstComment)
console.log(firstPost)
postList.sharePost(1)
const facebook = new Facebook();
const firstGroup = new FacebookGroup("Ant Group")
const firstPage = new FacebookPage("Ant Page")
const notification = new Notification(1)
facebook.addGroupList(firstGroup)
facebook.addPageList(firstPage)
console.log(facebook.groupList)
console.log(facebook.pageList)
notification.send(firstComment,firstPost)
