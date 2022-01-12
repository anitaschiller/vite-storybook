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

const AppHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: hotpink;
`;
const gradient = (firstColor, secondColor) =>
  `-webkit-linear-gradient(${firstColor}, ${secondColor})`;

const Headline = styled.h1`
  font-size: 2rem;
  background: ${(props) => gradient(props.firstColor, props.secondColor)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
