/* eslint-disable react/prop-types */
// import React from 'react'

import { SearchOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  max-width: 550px;
  display: flex;
  width: 90%;
  border: 1px solid ${({ theme }) => theme.text_secondary + 90};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  gap: 6px;
  align-items: center;
`;

export default function SearchBar({ search, setSearch }) {
  return (
    <Container>
      <input
        style={{
          border: "none",
          outline: "none",
          color: "inherit",
          width: "100%",
          background: "transparent",
          fontSize: "16px",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchOutlined />
    </Container>
  );
}
