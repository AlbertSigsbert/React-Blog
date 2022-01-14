export const Tags = [
    {
        id:1,
        name:"Sports",
    },
    {
        id:2,
        name:"Tech",
    },
    {
        id:3,
        name:"Music",
    },
    {
        id:4,     
        name:"Cinema",
    },
    {
        id:5,     
        name:"Programming",
    },
    {
        id:6,     
        name:"Football",
    },
    {
        id:7,     
        name:"Entertainment",
    },
];

export function getTags(ids){
    return Tags.filter(tag => ids.includes(tag.id))
}