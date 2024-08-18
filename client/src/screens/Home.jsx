import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GetPosts } from "../api";
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const getPosts = async () => {
    setLoading(true);
    await GetPosts()
      .then((res) => {
        setLoading(false);
        setPosts(res?.data?.data);
        setFilteredPosts(res?.data?.data);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  //Search
  useEffect(() => {
    if (!search) {
      setFilteredPosts(posts);
    }

    const SearchFilteredPosts = posts.filter((post) => {
      const promptMatch = post?.prompt
        ?.toLowerCase()
        .includes(search.toString().toLowerCase());
      const authorMatch = post?.name
        ?.toLowerCase()
        .includes(search.toString().toLowerCase());

      return promptMatch || authorMatch;
    });

    if (search) {
      setFilteredPosts(SearchFilteredPosts);
    }
  }, [posts, search]);

  return (
    <Container>
      <Headline>
        Explore popular posts from the community. <Span>Generated with AI</Span>
      </Headline>
      <SearchBar search={search} setSearch={setSearch} />
      <Wrapper>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {filteredPosts.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                No Posts Found
              </div>
            ) : (
              <CardWrapper>
                <>
                  {filteredPosts
                    .slice()
                    .reverse()
                    .map((item, index) => (
                      <ImageCards key={index} item={item} />
                    ))}
                </>
              </CardWrapper>
            )}
          </>
        )}
      </Wrapper>
    </Container>
  );
}
