import styled from "styled-components";
import Button from "../Button";
import searchIcon from "../../../assets/icons/search.svg";

type SearchInputProps = {
  placeholder?: string;
  showButton?: boolean;
};
export const SearchInput = (props: SearchInputProps) => {
  const { placeholder, showButton = true } = props;

  return (
    <SearchForm>
      <img src={searchIcon} alt="search icon" />
      <StyledInput
        type="text"
        placeholder={placeholder || "Search for a location"}
      />
      {showButton && <Button>Search</Button>}
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  padding: 8px 8px 8px 16px;
  border-radius: 12px;
  background-color: #f0f2f5;
  font-size: 16px;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
  outline: none;
  background-color: #f0f2f5;
`;
