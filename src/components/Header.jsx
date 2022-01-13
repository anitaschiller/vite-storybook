import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Header({
  title,
  firstColor = '#eee',
  secondColor = '#333',
}) {
  return (
    <AppHeader>
      <Headline firstColor={firstColor} secondColor={secondColor}>
        {title}
      </Headline>
    </AppHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  firstColor: PropTypes.string,
  secondColor: PropTypes.string,
};

const AppHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8rem;
  background: hotpink;
`;
const gradient = (firstColor, secondColor) =>
  `-webkit-linear-gradient(${firstColor}, ${secondColor})`;

const Headline = styled.h1`
  font-size: 2rem;
  background: ${(props) => gradient(props.firstColor, props.secondColor)};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0;
`;
