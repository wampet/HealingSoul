/* eslint-disable react/prop-types */
const Container = ({ children, className = "" }) => {
  const classes = `max-w-screen-xl mx-auto px-5 ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Container;
