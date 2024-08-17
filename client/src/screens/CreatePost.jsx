// import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/generateImageForm/GenerateImageForm";
import GeneratedImageCard from "../components/generatedImageCard/GeneratedImageCard";

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Headline = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  height: fit-content;
  max-width: 1200px;
  padding: 60px 0;
  gap: 8%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function CreatePost() {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  return (
    <Container>
      <Headline>
        Create your magic. <Span>Sky is your limit</Span>
      </Headline>
      <Wrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          createPostLoading={createPostLoading}
          setGenerateImageLoading={setGenerateImageLoading}
          generateImageLoading={generateImageLoading}
          setCreatePostLoading={setCreatePostLoading}
        />
        <GeneratedImageCard src={post?.photo} loading={generateImageLoading} />
      </Wrapper>
    </Container>
  );
}
