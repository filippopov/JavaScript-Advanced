function solve() {
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let rating = this.likes - this.dislikes;
            let result = super.toString() + `Rating: ${rating}`;

            if (this.comments.length > 0) {
                result += '\nComments:\n';
                for (let comment of this.comments) {
                    result += ` * ${comment}\n`;
                }
            }

            return result.trim();
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return super.toString() + `Views: ${this.views}`;
        }
    }

    return {
        Post, SocialMediaPost, BlogPost
    }
}