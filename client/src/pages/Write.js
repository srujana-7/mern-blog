

import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useState} from 'react'

const Write = () => {

  const [value,setValue]=useState('');

  return (
    <div className="writePost">
    <div className="left">
    <input type="text" placeholder="Title"/>
    <div className="editorContainer">
    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue}/>  
    </div>
  
    </div>
    <div className="right">
     
      <div className="item">
     <h2>Publish</h2>
     <span>
      <b>Status:</b>Draft
      </span>
    
     <span>
      <b>Visibility:</b>Public
    </span>
    <input style={{display:"none"}} 
    type="file"   id="file"   name="" />
     <label className="file"
      htmlFor="file">Upload Image</label> 
  <div className="buttons">
    <button>Save as a draft</button>
    <button >Publish</button>
  </div>
    </div>
    <div className="item">
      <h1>Category</h1>

      <div className="cat">
      <input type="radio" name="cat" value="art" id="art"/>
      <label htmlFor="art">Art</label>
      </div>
    
      <div className="cat">
      <input type="radio" name="cat" value="science" id="art"/>
      <label htmlFor="science">Science</label>
      </div>

      <div className="cat">
      <input type="radio" name="cat" value="technology" id="art"/>
      <label htmlFor="technology">Technology</label>
      </div>
      <div className="cat">
      <input type="radio" name="cat" value="design" id="art"/>
      <label htmlFor="design">Design</label>
      </div>
      <div className="cat">
      <input type="radio" name="cat" value="food" id="art"/>
      <label htmlFor="food">Food</label>
      </div>
    </div>
 
   
    
    </div>  

    </div>
  )
}

export default Write