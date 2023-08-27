import "./Skeleton.css";

const Skeleton = (props: {
  width: string;
  height: string;
  border: string;
}) => {
  return (
    <div
      className="skeleton-loader"
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.border,
      }}
    >
      <div className="skeleton-loader__content"></div>
    </div>
  );
};

export default Skeleton;
