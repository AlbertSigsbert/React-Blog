import { Posts } from "./Posts";
export const Tags = [
    {
        id:1,
        name:"Sports",
        image:"http://www.nyfa.edu/film-school-blog/wp-content/uploads/2013/10/sports.jpg",
        postCount: getPostCount(1),
        description: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    },
    {
        id:2,
        name:"Tech",
        image:"http://rocketai.org/wp-content/uploads/2021/06/Hi-Tech-Platforms-Information-Services.jpg",
        postCount: getPostCount(2),
        description: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    },
    {
        id:3,
        name:"Music",
        image:"https://images.unsplash.com/photo-1527283646354-d874f249ea2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        postCount: getPostCount(3),
        description: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    },
    {
        id:4,     
        name:"Cinema",
        image:"https://images.unsplash.com/photo-1542204625-ca960ca44635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        postCount: getPostCount(4),
        description: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    },
    {
        id:5,     
        name:"Programming",
        image:"https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        postCount: getPostCount(5),
        description: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    },
    {
        id:6,     
        name:"Football",
        image:"https://resources.premierleague.com/photos/2020/11/25/6561dc00-880c-401d-80f3-d521b415d250/ePL-IntroPost-Editorial-Lead.jpg?width=930&height=620",
        postCount: getPostCount(6),
        description: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    },
    {
        id:7,     
        name:"Entertainment",
        image:"https://thumbs.dreamstime.com/b/flat-symbols-culture-arts-entertainment-colorful-background-defocused-lights-symbols-culture-arts-123059189.jpg",
        postCount: getPostCount(7),
        description: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    },
];

export function getTags(ids){
    return Tags.filter(tag => ids.includes(tag.id))
}

export function getPostCount(tagId) {
    const tags = Posts.map((post) => post.tags);
    const tagsMerged = [].concat.apply([], tags);
    return tagsMerged.filter((id) => id === tagId).length;
  }
  
  
  export function getTagPosts(id){
    return Posts.filter(post => post.tags.includes(id))
  }