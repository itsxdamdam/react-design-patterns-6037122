// Simply combines functionalities of functions or components

export const Card = ({ children }) => {
  return <div style={{ border: "3px solid black" }}>{children}</div>;
};

export const CardHeader = ({ children }) => {
  return <div style={{ fontSize: "20px", fontWeight: "bold" }}>{children}</div>;
};

export const CardBody = ({ children }) => {
  return <div style={{ color: "#333" }}>{children}</div>;
};

export const CardFooter = ({ children }) => {
  return <div style={{ borderTop: "1px solid black" }}>{children}</div>;
};
 