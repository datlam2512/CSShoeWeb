import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Space } from 'antd';
import SearchResult from './SearchResult';


const { Search } = Input;
export const SearchBar = () => {
  const navigate = useNavigate();

  const onSearch = (value) => {
    console.log(value);
    navigate(`/search/${value}`);
  };

  return (
    <Space direction="vertical">
      <Search
        placeholder="Search"
        onSearch={onSearch}
        style={{
          width: 200,
          marginTop:'25px',
          marginRight:'15px',
        }}
      />
    </Space>
    
  );
}

export default SearchBar;

