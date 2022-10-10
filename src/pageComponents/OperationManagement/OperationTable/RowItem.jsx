import TableRow from '@mui/material/TableRow';
import { Checkbox, TableCell } from '@mui/material';

const RowItem = ({ row, columns }) => {
  return row.sub.map((sub, index) => {
    const isFirstLine = index === 0;
    return (
      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
        {isFirstLine && (
          <TableCell rowSpan={row.sub.length}>
            <Checkbox />
          </TableCell>
        )}

        {columns.map((column) => {
          const value = (isFirstLine && row[column.field]) || sub[column.field];
          return (
            <>
              {value && (
                <TableCell
                  key={column.field}
                  rowSpan={isFirstLine && row[column.field] ? row.sub.length : 1}
                >
                  {value}
                </TableCell>
              )}
            </>
          );
        })}
      </TableRow>
    );
  });
};

export default RowItem;
