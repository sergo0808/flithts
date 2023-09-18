import React from "react";
import FiltersStyles from "./Filters.module.css";

const Filters = ({ onSorted, onFilter, sortBy, filterBy, value, setValue, value2, setValue2 }) => {
  return (
    <div className={FiltersStyles.filtes}>
      <h3 className={FiltersStyles.title}>Сортировать</h3>
      <label htmlFor="contact1">
        <input
          type="radio"
          id="contact1"
          name="sortedprice"
          value="priceAsc"
          checked={sortBy === "priceAsc"}
          onChange={onSorted}
        />
        - по возрастанию цены
      </label>
      <label htmlFor="contact2">
        <input
          type="radio"
          id="contact2"
          name="sortedprice"
          value="priceDesc"
          checked={sortBy === "priceDesc"}
          onChange={onSorted}
        />
        - по убыванию цены
      </label>
      <label htmlFor="contact3">
        <input
          type="radio"
          id="contact3"
          name="sortedprice"
          value="duration"
          checked={sortBy === "duration"}
          onChange={onSorted}
        />
        - по времени в пути
      </label>
      <h3 className={FiltersStyles.title}>Фильтровать</h3>
      <label htmlFor="segments1">
        <input
          name="segment"
          type="checkbox"
          id="segments1"
          value={"segments1"}
          checked={filterBy === "segments1"}
          onChange={onFilter}></input>
        - 1 пересадка
      </label>
      <label htmlFor="segments0">
        <input
          name="segment"
          type="checkbox"
          id="segments0"
          value={"segments0"}
          checked={filterBy === "segments0"}
          onChange={onFilter}></input>
        - без пересадок
      </label>
      <h3 className={FiltersStyles.title}>Цена</h3>
      <label htmlFor="price0">
        От &nbsp;
        <input
          id="priceinput1"
          name="price0"
          placeholder="0"
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
      </label>
      <label htmlFor="price1">
        До &nbsp;
        <input
          id="priceinput1"
          name="price1"
          placeholder="10000"
          value={value2}
          onChange={(evt) => setValue2(evt.target.value)}
        />
      </label>{" "}
      <h3 className={FiltersStyles.title}>Авиакомпании</h3>
      <label htmlFor="Airline0">
        <input type="checkbox" id="Airline0"></input>- LOT Polish Airlines
      </label>
      <label htmlFor="Airline1">
        <input type="checkbox" id="segments1"></input>- AFL
      </label>
    </div>
  );
};

export default Filters;
