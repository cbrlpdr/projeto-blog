import './styles.css';
import P from 'prop-types';

export const SearchInput = ({ handleChange, searchValue }) => {
    return <input type="search" placeholder="Search 🔎" onChange={handleChange} value={searchValue}></input>;
};

SearchInput.propTypes = {
    handleChange: P.func.isRequired,
    searchValue: P.string,
};
