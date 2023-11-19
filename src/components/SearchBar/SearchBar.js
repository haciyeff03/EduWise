import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const { Search } = Input;
const suffix = (
  <SearchOutlined
    style={{
      fontSize: 14,
      color: "#192038",
    }}
  />
);

const SearchBar = () => {
  return (
    <>
      <Search placeholder="Search" size="large" suffix={suffix}  />
    </>
  );
};

export default SearchBar;
