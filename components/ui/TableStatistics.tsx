// @ts-nocheck
import TableStatisticsScroll from "./TableStatisticsScroll";
type Props = {
  tableTitle: any
  tableHeader: any
  tableStatistics: any
};
const TableStatistics = ({ tableHeader, tableTitle,tableStatistics }: Props) => {
  return (
    <TableStatisticsScroll tableTitle={tableTitle} tableHeader={tableHeader} tableStatistics={tableStatistics} />
  );
};

export default TableStatistics;
