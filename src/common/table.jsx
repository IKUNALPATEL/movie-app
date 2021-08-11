import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ columns, onSort, sortColumn, movies }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} movies={movies} />
    </table>
  );
};

export default Table;
