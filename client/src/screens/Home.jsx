import styled from "styled-components";
import ImageCards from "../components/cards/ImageCards";
import SearchBar from "../components/searchBar/SearchBar";

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
  width: 100%;
  max-width: 1400px;
  padding: 32px 0;
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function Home() {
  return (
    <Container>
      <Headline>
        Explore popular posts from the community. <Span>Generated with AI</Span>
      </Headline>
      <SearchBar />
      <Wrapper>
        <CardWrapper>
          <ImageCards
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7HJd8Z49RoOjQKdwz0fUP9HT2apELvETfDZqoErZaHmVdttJ0Cretq9T0APfN5aagqU&usqp=CAU"
            author="Shaed Noor"
            prompt="picasso art pastel man potrait"
          />
          <ImageCards
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7HJd8Z49RoOjQKdwz0fUP9HT2apELvETfDZqoErZaHmVdttJ0Cretq9T0APfN5aagqU&usqp=CAU"
            author="Shaed Noor"
            prompt="picasso art pastel man potrait"
          />
          <ImageCards
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7HJd8Z49RoOjQKdwz0fUP9HT2apELvETfDZqoErZaHmVdttJ0Cretq9T0APfN5aagqU&usqp=CAU"
            author="Shaed Noor"
            prompt="picasso art pastel man potrait"
          />
          <ImageCards
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7HJd8Z49RoOjQKdwz0fUP9HT2apELvETfDZqoErZaHmVdttJ0Cretq9T0APfN5aagqU&usqp=CAU"
            author="Shaed Noor"
            prompt="picasso art pastel man potrait"
          />
          <ImageCards
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7HJd8Z49RoOjQKdwz0fUP9HT2apELvETfDZqoErZaHmVdttJ0Cretq9T0APfN5aagqU&usqp=CAU"
            author="Shaed Noor"
            prompt="picasso art pastel man potrait"
          />
          <ImageCards
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7HJd8Z49RoOjQKdwz0fUP9HT2apELvETfDZqoErZaHmVdttJ0Cretq9T0APfN5aagqU&usqp=CAU"
            author="Shaed Noor"
            prompt="picasso art pastel man potrait"
          />
          <ImageCards
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7HJd8Z49RoOjQKdwz0fUP9HT2apELvETfDZqoErZaHmVdttJ0Cretq9T0APfN5aagqU&usqp=CAU"
            author="Shaed Noor"
            prompt="picasso art pastel man potrait"
          />
          <ImageCards
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7HJd8Z49RoOjQKdwz0fUP9HT2apELvETfDZqoErZaHmVdttJ0Cretq9T0APfN5aagqU&usqp=CAU"
            author="Shaed Noor"
            prompt="picasso art pastel man potrait"
          />
          <ImageCards
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7HJd8Z49RoOjQKdwz0fUP9HT2apELvETfDZqoErZaHmVdttJ0Cretq9T0APfN5aagqU&usqp=CAU"
            author="Shaed Noor"
            prompt="picasso art pastel man potrait"
          />
          <ImageCards
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7HJd8Z49RoOjQKdwz0fUP9HT2apELvETfDZqoErZaHmVdttJ0Cretq9T0APfN5aagqU&usqp=CAU"
            author="Shaed Noor"
            prompt="picasso art pastel man potrait"
          />
        </CardWrapper>
      </Wrapper>
    </Container>
  );
}
