import TableStatistics from "../ui/TableStatistics";

type Props = {
  tableTitle: any
  tableHeader: any
  tableStatistics: any
};
const SubpropertySection = ({ tableHeader, tableStatistics, tableTitle }: Props) => {
  return (
    <>
      <TableStatistics tableHeader={tableHeader} tableStatistics={tableStatistics} tableTitle={tableTitle} />
    </>
  );
};

export default SubpropertySection;
