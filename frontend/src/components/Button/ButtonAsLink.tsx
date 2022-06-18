import classnames from 'classnames';
import React, { FC } from 'react';

export interface ButtonAsLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ButtonAsLink: FC<ButtonAsLinkProps> = (props) => {
  const { children, className, ...buttonProps } = props;
  return (
    <button {...buttonProps} className={classnames('button-link', className)}>
      {children}
    </button>
  );
};

export default ButtonAsLink;
