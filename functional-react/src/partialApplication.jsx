export const Button = ({ size, color, text, ...props }) => {
	return (
		<button style={{
			padding: size === 'large' ? '32px' : '8px',
			fontSize: size === 'large' ? '32px' : '16px',
			backgroundColor: color,
		}} {...props}>{text}</button>
	);
}

function getPropertyWithDefault(key, defaultValue, obj) {
  if (key in obj) {
    return obj[key];
  }

  return defaultValue;
}

function getName(obj) {
  return getPropertyWithDefault('firstName', 'N/A', obj);
}

getName({ name: 'Shaun' })