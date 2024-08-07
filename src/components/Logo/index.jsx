import PropTypes from "prop-types";

export default function Logo(props) {
  const { width = 143, height = 25, ...rest } = props;
  return (
    <picture {...rest}>
      <img src="/logo.png" height={`${height}px`} width={`${width}px`} />
    </picture>
  );
}

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
