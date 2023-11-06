import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfigProvider, Input, Space } from 'antd';
import SearchResult from './SearchResult';
import "./Navigationshoe.css";

const { Search } = Input;
export const SearchBar = () => {
  const navigate = useNavigate();

  const onSearch = (value) => {
    if(value.trim() === '') {
      window.location.reload();
    } else {
    console.log(value);
    navigate(`/search/${value}`);
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBg: '#fff',
            hoverBg: '#fff'
          },
        },
      }}
    >
      <Space direction="vertical">
        <Search
          className='input-search'
          placeholder="Search"
          onSearch={onSearch}
          enterButton
          style={{
            scale: '90%',
            width: '100%',
          }}
        />
      </Space>
    </ConfigProvider>


  );
}

export default SearchBar;

