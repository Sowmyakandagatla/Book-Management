const books=[
    {
ISBN:"12345books",
title:"MERN",
pubdate:"20-10-2021",
language:"en",
numpage:"205",
author:[1,2],
category:["tech","programming","education","thriller"],
publications:[1],
},
];

const authors=[
    {
    id:1,
    name:"jagan",
    books:["12345books","secretbook"],
},
{
    id:2,
    name:"elson",
    books:["12345books"],
},
];

const publications=[
    {
    id:1,
    name:"writex",
    books:["12345books","secretbook"],
},
];

// we are telling js that data in this file can be shared.
module.exports={books,authors,publications};