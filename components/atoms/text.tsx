import { CommonType } from '../../types/common';

export default function Text(props: CommonType) {
  return (
    <p className={`text-base text-gray-500 indent-2 ${props.className || ''}`}>
      {props.children || ''}
    </p>
  );
}
