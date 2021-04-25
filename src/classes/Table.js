class Table {
  constructor(arr) {
    this.header = arr[0];
    arr.shift();
    this.rows = arr.map((row) => row);
  }

  get RowCount() {
    return this.rows.length;
  }

  get ColumnCount() {
    return this.header.length;
  }
}

module.exports = Table;
