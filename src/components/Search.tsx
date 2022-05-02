const Search = ({ onChange, searchText }: any) => {
  return (
    <div>
      <input type="text" placeholder="Search Here" onChange={onChange} />
      <p>{searchText}</p>
    </div>
  );
};
export default Search;
