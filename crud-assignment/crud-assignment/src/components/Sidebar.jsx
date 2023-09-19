import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let initialCategory = searchParams.getAll("category");
  let initialGender = searchParams.getAll("gender");
  let initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialCategory || []);
  const [gender, setGender] = useState(initialGender || []);
  const [order , setOrder] = useState( initialOrder || "");


  useEffect(() => {
    let params = {
      gender,
      category,
    };
    order && (params.order = order)

    setSearchParams(params);
  }, [category, gender ,order]);

  const handleCategory = (e) => {
    const { value } = e.target;
    let newcategory = [...category];
    if (newcategory.includes(value)) {
      newcategory = newcategory.filter((el) => el !== value);
    } else {
      newcategory.push(value);
    }

    setCategory(newcategory);
  };

  const handleGender = (e) => {
    const { value } = e.target;
    let genders = [...gender];
    if (genders.includes(value)) {
      genders = genders.filter((el) => el !== value);
    } else {
      genders.push(value);
    }
    setGender(genders);
    //  console.log(genders);
  };


const handleOrder = (e)=>{
  const {value} = e.target;
  setOrder(value)
} 
  return (
    <DIV>
      <h3>Filter by category</h3>
      <div>
        <input
          type="checkbox"
          value={"top-wear"}
          onChange={handleCategory}
          checked={category.includes("top-wear")}
        />
        <label>Top Wear</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"bottom-wear"}
          onChange={handleCategory}
          checked={category.includes("bottom-wear")}
        />
        <label>Bottom Wear</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"foot-wear"}
          onChange={handleCategory}
          checked={category.includes("foot-wear")}
        />
        <label>Foot Wear</label>
      </div>

      <br />

      <h3>Fiter by Gender</h3>

      <div>
        <input
          type="checkbox"
          value={"male"}
          onChange={handleGender}
          checked={gender.includes("male")}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"female"}
          onChange={handleGender}
          checked={gender.includes("female")}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"kids"}
          onChange={handleGender}
          checked={gender.includes("kids")}
        />
        <label>Kids</label>
      </div>

      <br />
      <h3>Sort by Price</h3>
      <div onChange={handleOrder}>
        <div>
          <input type="radio" name= "order" value={"asc"} defaultChecked={order=== "asc"}/>
          <label>Ascending</label>
        </div>
        <div>
          <input type="radio" name= "order" value = {"desc"} defaultChecked={order=== "desc"}/>
          <label>Descending</label>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 15px;
  border-right: 2px solid gray;
  min-height: 80vh;
`;

export default Sidebar;
