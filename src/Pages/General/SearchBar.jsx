import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Space } from 'antd';
import SearchResult from './SearchResult';
import "./Navigationshoe.css";

const { Search } = Input;
export const SearchBar = () => {
  const navigate = useNavigate();

  const onSearch = (value) => {
    console.log(value);
    navigate(`/search/${value}`);
  };

  return (
    <Space direction="vertical">
      <Search className='input-search'
      placeholder='Search'
        onSearch={onSearch}
        style={{
          scale:'80%',
          width:'100%',
        }}
      />
    </Space>
    
  );
}

export default SearchBar;

