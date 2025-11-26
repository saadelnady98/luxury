function SectionHeader({
  littelText,
  title,
}: {
  littelText: String;
  title: String;
}) {
  return (
    <div className="uppercase text-center">
      <p className="text-mainGray text-xs lg:text-base">{littelText}</p>
      <p className="text-xl lg:text-5xl  text-mainColor my-8">{title}</p>
    </div>
  );
}

export default SectionHeader;
