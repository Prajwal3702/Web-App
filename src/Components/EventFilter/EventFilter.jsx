import React from "react";
import "./EventFilter.css";

function EventFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="event-filter">
      <h3>Filter by Category</h3>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EventFilter;
