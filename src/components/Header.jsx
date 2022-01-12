import styled from 'styled-components';

export default function Header({
  title,
  firstColor = '#eee',
  secondColor = '#333',
  isStatic = false,
}) {
  return (
    <AppHeader isStatic={isStatic}>
      <Headline firstColor={firstColor} secondColor={secondColor}>
        {title}
      </Headline>
    </AppHeader>
  );
}

const AppHeader = styled.header`
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0;
`;
