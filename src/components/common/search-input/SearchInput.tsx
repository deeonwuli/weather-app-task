import styled from "styled-components";
import Button from "../Button";
import searchIcon from "../../../assets/icons/search.svg";
import { useCallback, useState } from "react";
import { useCityWeather } from "../../../contexts/city-weather-context";

type SearchInputProps = {
  placeholder?: string;
  showButton?: boolean;
};

export const SearchInput = (props: SearchInputProps) => {
  const { placeholder } = props;
  const [searchValue, setSearchValue] = useState("");
  const { changeCity } = useCityWeather();

  const findCityWeather = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!searchValue) return;

      e.preventDefault();
      changeCity(searchValue);
      setSearchValue("");
    },
    [searchValue, changeCity]
  );

  return (
    <SearchForm>
      <img src={searchIcon} alt="search icon" />
      <StyledInput
        type="text"
        value={searchValue}
        placeholder={placeholder || "Search for a location"}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button disabled={!searchValue} onClick={findCityWeather}>
        Search
      </Button>
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

  @media (max-width: 768px) {
    width: 80%;
  }
`;
