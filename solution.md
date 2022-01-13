# Solutions

## Solution 1 – Card with Author

```jsx
<Story
  name="Card with Author"
  args={{
    color: '#49B8B0',
    text: 'Lorem ipsum',
    author: 'Douglas Adams',
    title: 'Per Anhalter durch die Galaxis',
    isActive: true,
  }}
>
  {Template.bind({})}
</Story>
```

## Solution 2 – Function as a prop

```jsx
<Story
  name="Card active, book available for borrowing"
  args={{
    color: '#49B8B0',
    text: 'Lorem ipsum',
    title: 'Harry Potter und die Kammer des Schreckens',
    isActive: true,
    onBorrowBook: () =>
      alert('Book added to borrowing list - come by tomorrow'),
  }}
>
  {Template.bind({})}
</Story>
```

In Card.jsx:

```jsx
<button onClick={onBorrowBook}>Borrow</button>
```

## Solution 3 – Story for Header component without Template

```jsx
<Story
  name="Header with gradient headline"
  args={{
    title: 'Make it shine',
    firstColor: '#eee',
    secondColor: '#d41313',
    isStatic: true,
  }}
>
  {(args) => <Header {...args} />}
</Story>
```

In Header.jsx:

```jsx
<AppHeader isStatic={isStatic}>
  <Headline firstColor={firstColor} secondColor={secondColor}>
    {title}
  </Headline>
```

```jsx
const AppHeader = styled.header`
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
```

## Optional: Use state in Story Template

```jsx
import { useState } from 'react';

export const Template = (args) => {
  const [isActive, setIsActive] = useState(args.isActive);
  return <Card {...args} isActive={isActive} onBorrowBook={setIsActive} />;
};
```

In Card.jsx

```jsx
<button onClick={() => onBorrowBook(false)}>Borrow</button>
```
