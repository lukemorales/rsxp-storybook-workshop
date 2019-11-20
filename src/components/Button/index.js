import React from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/fa';
import { Container } from './styles';

export default function Button({
  type,
  color,
  icon,
  iconSize,
  children,
  large,
  secondary,
  inline,
  onClick,
  ...rest
}) {
  const Icon = FontAwesome[icon];

  return (
    <Container
      type={type}
      color={color}
      secondary={secondary}
      onClick={onClick}
      large={large}
      inline={inline}
      {...rest}
    >
      {children && <span>{children}</span>}
      {icon && <Icon size={iconSize} />}
    </Container>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  children: PropTypes.string,
  large: PropTypes.bool,
  secondary: PropTypes.bool,
  ghost: PropTypes.bool,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  color: '#7159c1',
  icon: '',
  iconSize: 18,
  children: '',
  large: false,
  secondary: false,
  inline: false,
  onClick: () => {},
};
