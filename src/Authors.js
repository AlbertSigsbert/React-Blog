import { Posts } from "./Posts";

export const Authors = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=594&q=80",
    name: "Paul Smith",
    postCount: getPostCount(1),
    bio: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    website: "https://am-huddle.netlify.app/",
    location: "Cape Town",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    name: "Mccalister Nicolaus",
    postCount: getPostCount(2),
    bio: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    website: "https://am-huddle.netlify.app/",
    location: "Cairo",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=584&q=80",
    name: "James Mcgee",
    postCount: getPostCount(3),
    bio: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    website: "https://am-huddle.netlify.app/",
    location: "Paris",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
    name: "Sarah Logan",
    postCount: getPostCount(4),
    bio: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    website: "https://am-huddle.netlify.app/",
    location: "Madrid",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1517090186835-e348b621c9ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Leila Sambong",
    postCount: getPostCount(5),
    bio: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    website: "https://am-huddle.netlify.app/",
    location: "Madeira",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=468&q=80",
    name: "Luis Silvester",
    postCount: getPostCount(6),
    bio: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    website: "https://am-huddle.netlify.app/",
    location: "New York",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1504363081893-c8226db66926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Janet Silva",
    postCount: getPostCount(7),
    bio: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    website: "https://am-huddle.netlify.app/",
    location: null,
    facebook: null,
    twitter: "https://twitter.com/",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    name: "Andre Putera",
    postCount: getPostCount(8),
    bio: "Haec doca illi, nos admirabilia dicamus. Universa enim illorum rationcum tota vestra confligendum puto.",
    website: "https://am-huddle.netlify.app/",
    location: "Bangkok",
    facebook: null,
    twitter: "https://twitter.com/",
  },
];

export function getAuthors(ids) {
  return Authors.filter((author) => ids.includes(author.id));
}

export function getPostCount(authorId) {
  const authors = Posts.map((post) => post.authors);
  const authorsMerged = [].concat.apply([], authors);
  return authorsMerged.filter((id) => id === authorId).length;
}


export function getAuthorPosts(id){
  return Posts.filter(post => post.authors.includes(id))
}