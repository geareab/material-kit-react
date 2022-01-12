export default function TableCell(theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: theme.palette.grey[800]
        }
      }
    }
  };
}
