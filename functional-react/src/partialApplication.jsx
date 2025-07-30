export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

//Partial Application is when we take a certain number of arguments in a function and fix them to specific values

// function getPropertyWithDefault(key, defaultValue, obj) {
//   if(key in obj) {
//     return obj[key]
//   }

//   return defaultValue
// }

// function getName() {
//   return getPropertyWithDefault("name", "N/A", obj)
// }

// getName({ name: "Shaun"})

export const DangerButton = ({ text, ...props }) => {
  return <Button size="large" color="red" text={text} {...props} />;
};

export const partiallyApply = (Component, PartialProps) => {
  return (props) => {
    return <Component {...PartialProps} {...props} />;
  };
};

export const DangerButton2 = partiallyApply(Button, {
  size: "large",
  color: "red",
});
export const SuccessButton = partiallyApply(Button, {
  color: "green",
  text: "Success!!!",
  size: "large"
});
