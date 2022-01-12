import PropTypes from 'prop-types';
import { darken } from 'polished';
import styled from 'styled-components';

export default function Card({
  title,
  text,
  author,
  color = 'papayawhip',
  isActive = true,
}) {
  return (
    <CardSection backgroundColor={color} isActive={isActive}>
      <Title textColor={color}>{title}</Title>
      <p>{text}</p>
      <small>{author ? author : 'Anonymous'}</small>
    </CardSection>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.string,
  color: PropTypes.string,
  isActive: PropTypes.bool,
};

const CardSection = styled.section`
  font-family: sans-serif;
  padding: 1rem;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'none'};
  border: ${(props) =>
    props.backgroundColor
      ? darken(0.1, props.backgroundColor) + ' 5px solid'
      : 'none'};
  border-radius: 6px;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`;

const Title = styled.h2`
  color: ${(props) =>
    props.textColor ? darken(0.3, props.textColor) : 'black'};
  font-weight: normal;
  margin: 0;
`;
