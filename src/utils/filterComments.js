'use client'


export const filterComments = (comments,name) => {
  return comments.filter((comment)=> comment.productName===name);
};