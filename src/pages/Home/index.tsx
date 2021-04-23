import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useHistory } from "react-router";

import { Container } from "./styles";

export function Home() {
  const [userName, setUserName] = useState('');
  const { push } = useHistory();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    push(`/profile/${userName}`);
    setUserName('');
  }

  return(
    <Container>
      <h1>Search Devs</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
          type="text" 
          placeholder="Type the username here..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">
          <GoSearch />
          Buscar
        </button>
      </form>
    </Container>
  );
}