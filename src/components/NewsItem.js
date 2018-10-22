import React from 'react';

const NewsItem = ({ article }) => (
  <article >
    <div className="article-wrapper">
      <h3 className="text-center">{article.first_name}</h3>
      <img src={article.avatar} alt="" />
      <p className="text-center">{article.description}</p>
      
    </div>
  </article>
);

export default NewsItem ;


