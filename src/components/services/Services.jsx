import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Animated UI</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Banners</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Product Concept</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Sitemaps</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Walkthroughs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Design</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog / News Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Booking / Reservations / Availability System</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Business Directory / Listings</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Management System</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Event Booking System</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Membership System</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile-Optimised Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Password-Protected Pages / Client Area</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Shopping Cart / Online Ordering System / Online Payments</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Social Media Integration — Facebook, Twitter, Youtube, Google+,
                etc.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Application / Business Software</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog Posts</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Online Guides</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimized Content</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
