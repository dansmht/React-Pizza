import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
  const classes = classNames(
    'button',
    props.className,
    {
      'button--outline': props.outline,
    },
  );
  return (
    <button
      className={classes}
    >
      {props.children}
    </button>
  );
};

export default Button;
