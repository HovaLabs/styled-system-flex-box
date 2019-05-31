# Styled-Flex-Box

<svg width="60px" height="60px">
  <rect width="60px" height="60px" style="fill:rgb(245,245,245);stroke-width:3;stroke:rgb(0,0,0)" />
</svg>

React primitive UI components built with styled-components and styled-system. Inspired by Rebass

Compatible with React and React-Native

```sh
npm i styled-system-flex-box
```

Set up your JSX layouts with `<Flex /> `, `<Box /> `, `<Absolute /> `, and `<AbsoluteFlex /> ` components.  

## Try It Out

[Try it out on CodeSandbox](https://codesandbox.io/s/styledsystemflexbox-example-6cisp)

## Usage

```jsx
import { Flex, Box } from 'styled-flex-box'
// Or for react-native use
// import { Flex, Box } from 'styled-flex-box/native'

function AwesomeComponent() {
  return (
    <Flex flexDirection="row" justifyContent="space-between" width="100%">
      <Box p="m">Thing One</Box>
      <Box p="m">Thing Two</Box>
    </Flex>
  );
}
```

TODO: Document all Box, Flex, Absolute, and AbsoluteFlex props

---

## Related

- [System UI](https://system-ui.com)
- [Rebass](https://rebassjs.org/)
- [styled-components](https://www.styled-components.com/)

[MIT License](LICENSE.md)
