"use client";

import Image from 'next/Image'
import AddButton from "./AddButton";
import {Provider} from 'react-redux'
import { store } from "@/redux/store";
import { useSelector } from "react-redux";
import {filterComments} from '@/utils/filterComments'
import { useState, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "@/redux/comments";
import ProfilePicture from '../assets/ProfilePicture.jpg'

const ProductPage = ({item}) => {
  const { name, price, size, image, category } = item;
  const comments = useSelector((store) => store.comments);
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  
  const commentSection = filterComments(comments,name);
  const dispatch = useDispatch();

  const addToComments = useCallback((e) => {
    e.preventDefault()
    if(comment==='' || user==='')
    {
      alert('Please enter your Username AND Comment')
    }
    else{
    dispatch(
      addComment({
        productName: name,
        comment: comment,
        username: user,
      })
    );
    }
    setUser('');
    setComment('');
  }, [user,comment]);

  const handleUsername = useCallback((e) => {
    setUser(e.target.value);
  }, []);
  const handleComment = useCallback((e) => {
    setComment(e.target.value);
  }, []);

    return (
      <div className="ProductPage-container">
        <div className="ProductPage rounded-md">
          <div className="text-container">
            <h1 className="text ProductTitle">{name}</h1>
            <h3 className="text ProductDetail">Price = {price}$</h3>
            <h3 className="text ProductDetail">Category = {category}</h3>
            <h3 className="text ProductDetail">Size = {size}</h3>

            <AddButton product={item} />
          </div>
          <Image
            src={image}
            alt="GFG logo served with static path of public directory"
            height="80"
            width="320"
            className="rounded-md"
          />
        </div>
        <div className="commentSection">
          {commentSection.map((c) => (
            <div className="comment-container">
              <div className="userSection">
                <Image
                  src={ProfilePicture}
                  alt="Profile"
                  height="40"
                  width="40"
                  className="userPhoto"
                />
                <div className="username">{c.username}</div>
              </div>

              <div className="comment">{c.comment}</div>
            </div>
          ))}
          <form onSubmit={addToComments} className="AddComment-container">
            <h1 className="formItem comment-title">Comment for this Product</h1>
            <label className="formItem">Username : </label>
            <input
              value={user}
              onChange={handleUsername}
              className="formItem"
            />
            <br />
            <label className="formItem">Comment : </label> <br />
            <textarea
              rows="4"
              cols="50"
              value={comment}
              onChange={handleComment}
              className="formItem"
            ></textarea>
            <br />
            <button type="submit" className="formItem addCommentBtn">
              Add Comment
            </button>
          </form>
        </div>
      </div>
    );
}

export default ProductPage
