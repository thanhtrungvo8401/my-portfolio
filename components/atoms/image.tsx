export default function MyImage(props: any = {}) {
  const { className = '', src = '', alt = '' } = props;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={src}
      alt={alt}
      className={`w-full h-auto ${className}`}
    />
  );
}
