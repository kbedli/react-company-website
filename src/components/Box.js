const Box = ({ service }) => {
  return (
    <div className={service.isNew ? "box box1" : "box"}>
      {service.name}
      {service.isNew ? (
        <>
          <span className="bottomtext"> (nowość)</span>
          <div className="dot"></div>
        </>
      ) : null}
    </div>
  );
};

export default Box;
