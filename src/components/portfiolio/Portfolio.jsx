import React from "react";
import "./portfolio.css";
import todo from "../../assets/images/basic-todo.webp";
import todoDrag from "../../assets/images/todo-draggable.webp";
import weather from "../../assets/images/weather.webp";
import posts from "../../assets/images/posts.webp";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={todoDrag} alt="todo" />
          </div>
          <h3>
            A Todo list with CRUD plus Draggable for enhanced user experience
          </h3>
          <div className="portfolio__item-buttons">
            <a
              href="https://github.com/cvelascoiv/todo-draggable"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://todo-draggable.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={weather} alt="todo" />
          </div>
          <h3>An app that can display local 5-day Local Weather Forecast</h3>
          <div className="portfolio__item-buttons">
            <a
              href="https://github.com/cvelascoiv/weather-app"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://mylocalweatherapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={todo} alt="todo" />
          </div>
          <h3>
            A simple Todo list that can do basic CRUD operations and filter todo
            by status
          </h3>
          <div className="portfolio__item-buttons">
            <a
              href="https://github.com/cvelascoiv/todolist-typescript"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={posts} alt="todo" />
          </div>
          <h3>An app that can create a post, view own posts and hide posts</h3>
          <div className="portfolio__item-buttons">
            <a
              href="https://github.com/cvelascoiv/posts-typescript"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
