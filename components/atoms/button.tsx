import React from 'react';

type PropsType = {
  children: React.ReactNode;
  className?: string;
};

export default function Button(props: PropsType & { onClick?: () => void }) {
  const { className = '' } = props;

  return (
    <button
      onClick={() => props?.onClick?.()}
      className={`inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400 ${className}`}
    >
      {props.children}
    </button>
  );
}
