export const Accordion = ({ title, active, style, index, children }) => {
  return (
    <div className={`${active && 'active'} ${style}`} id={`hs-bordered-heading-${index}`}>
      {title}
      <div
        id={`hs-basic-bordered-collapse-${index}`}
        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby={`hs-bordered-heading-${index}`}
      >
        <div className="pb-4 px-5">{children}</div>
      </div>
    </div>
  );
};
