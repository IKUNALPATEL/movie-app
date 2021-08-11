import _ from "lodash";
import React, { Component } from "react";

class TableBody extends Component {
  renderCell = (movie, column) => {
    if (column.content) return column.content(movie);

    return _.get(movie, column.path);
  };

  createKey = (movie, column) => {
    return movie._id + (column.path || column.key);
  };

  render() {
    const { movies, columns } = this.props;

    return (
      <tbody>
        {movies.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
