import React, { ChangeEvent } from "react";

interface Props {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleChange}
        className="border p-2 w-full"
      />
    </div>
  );
};

export default SearchBar;
