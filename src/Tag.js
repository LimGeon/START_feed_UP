import React, { useEffect, useState } from 'react';
import './App.css';
import './root.css';
import './Tag.css';
import './Post.css';
import checkImg from './Img/check.svg';

let num = 0;
function Tag({ name, onChange }) {
  return (
    <button
      className="Btn"
      onClick={(event) => {
        onChange(event.target.innerHTML);
      }}
    >
      <img
        src={checkImg}
        style={{
          visibility: 'hidden',
        }}
      />
      {name}
    </button>
  );
}
function Tags({ tagList, selectedTag, getTag }) {
  let tl = [];
  tl.push(
    <Tag
      key={num++}
      name={'all'}
      onChange={() => {
        getTag('');
      }}
    />
  );
  for (let i = 0; i < tagList.length; i++) {
    {
      tl.push(
        <Tag
          name={tagList[i]}
          onChange={(_tag) => {
            selectedTag.includes(_tag)
              ? getTag(selectedTag.filter((tag) => tag !== _tag))
              : getTag([...selectedTag, _tag]);
          }}
        />
      );
    }
  }
  return <div className="Tags">{tl}</div>;
}

export default Tags;
