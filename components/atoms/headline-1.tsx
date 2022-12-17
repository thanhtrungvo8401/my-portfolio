import { CommonType } from '../../types/common';

export default function Headline1(props: CommonType) {
  const { className } = props;
  return (
    <h1
      className={`font-medium leading-tight text-5xl mt-0 mb-2 text-gray-500 ${className}`}
    >
      {props.children || ''}
    </h1>
  );
}
