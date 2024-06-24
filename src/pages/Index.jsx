import { useState } from "react";
import { Container, Input, Button, VStack, Text, Box, List, ListItem } from "@chakra-ui/react";

const Index = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleSearch = () => {
    console.log("Search button clicked");
    console.log("Search text:", searchText);

    // Mock search results based on the searchText
    const results = [
      { id: 1, title: "Result 1", description: "Description for result 1" },
      { id: 2, title: "Result 2", description: "Description for result 2" },
      { id: 3, title: "Result 3", description: "Description for result 3" },
    ].filter(result => result.title.toLowerCase().includes(searchText.toLowerCase()));

    console.log("Search results:", results);

    setSearchResults(results);
    setSelectedResult(null);
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Input
          placeholder="Enter search text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
        {selectedResult ? (
          <Box p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <Text fontSize="2xl">{selectedResult.title}</Text>
            <Text mt={2}>{selectedResult.description}</Text>
            <Button mt={4} onClick={() => setSelectedResult(null)}>Back to results</Button>
          </Box>
        ) : (
          <List spacing={3} width="100%">
            {searchResults.map((result) => (
              <ListItem key={result.id} p={2} borderWidth="1px" borderRadius="lg" onClick={() => handleResultClick(result)} cursor="pointer">
                <Text fontSize="xl">{result.title}</Text>
              </ListItem>
            ))}
          </List>
        )}
      </VStack>
    </Container>
  );
};

export default Index;