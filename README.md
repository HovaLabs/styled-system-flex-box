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

With the `<Box />` component you now have access to many common props as well as any props injected by your styled-components `<ThemeProvider/>`

# Box

[Space](#space)

## Space
Box consumes `styled-system`'s [space](https://styled-system.com/#margin--padding) helper  

<style>
  .centered-text {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 70px;
  }
  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    background: #f5f5f5;
    position: relative;
  }
  .box {
    position: relative;
    z-index: 3;
    background: rgb(168, 198,229);
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid black;
  }
  .padding-example {
    position: absolute;
    z-index: 2;
    background: rgb(201 221 187);
    box-sizing: border-box;
    border: 1px dashed black;
  }
  .margin-example {
    position: absolute;
    z-index: 1;
    background: rgb(252, 238, 194);
    box-sizing: border-box;
    border: 1px solid black;
  }
</style>


<div style="display: grid; grid-template-columns: 1fr 2fr 1fr; grid-gap: 5px;">
  <h2 class="centered-text">Description</h2><h2 class="centered-text">Code</h2><h2 class="centered-text">Example</h2>


  <div class="centered-text">A Plain Box</div>
  <div class="content-wrapper">

  ```<Box />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
  </div>

  <div class="centered-text">padding</div>
  <div class="content-wrapper">

  ```<Box p="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 40px; height: 40px;"></div>
  </div>

  <div class="centered-text">padding-top</div>
  <div class="content-wrapper">

  ```<Box pt="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 20px; height: 30px; margin-top: -5px"></div>
  </div>

  <div class="centered-text">padding-bottom</div>
  <div class="content-wrapper">

  ```<Box pb="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 20px; height: 30px; margin-top: 5px"></div>
  </div>

  <div class="centered-text">padding-y-axis</div>
  <div class="content-wrapper">

  ```<Box py="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 20px; height: 40px;"></div>
  </div>

  <div class="centered-text">padding-left</div>
  <div class="content-wrapper">

  ```<Box pl="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 30px; height: 20px; margin-left: -5px;"></div>
  </div>

  <div class="centered-text">padding-right</div>
  <div class="content-wrapper">

  ```<Box pr="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 30px; height: 20px; margin-left: 5px;"></div>
  </div>

  <div class="centered-text">padding-x-axis</div>
  <div class="content-wrapper">

  ```<Box px="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 40px; height: 20px;"></div>
  </div>

  <div class="centered-text">margin</div>
  <div class="content-wrapper">

  ```<Box p="10px" m="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 40px; height: 40px;"></div>
    <div class="margin-example" style="width: 60px; height: 60px;"></div>
  </div>

  <div class="centered-text">margin-top</div>
  <div class="content-wrapper">

  ```<Box p="10px" mt="10px/>```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 40px; height: 40px;"></div>
    <div class="margin-example" style="width: 40px; height: 50px; margin-top: -5px"></div>
  </div>

  <div class="centered-text">margin-bottom</div>
  <div class="content-wrapper">

  ```<Box p="10px" mb="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 40px; height: 40px;"></div>
    <div class="margin-example" style="width: 40px; height: 50px; margin-top: 5px"></div>
  </div>

  <div class="centered-text">margin-y-axis</div>
  <div class="content-wrapper">

  ```<Box py="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 40px; height: 40px;"></div>
    <div class="margin-example" style="width: 40px; height: 60px;"></div>
  </div>

  <div class="centered-text">margin-left</div>
  <div class="content-wrapper">

  ```<Box pl="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 40px; height: 40px;"></div>
    <div class="margin-example" style="width: 50px; height: 40px; margin-left: -5px;"></div>
  </div>

  <div class="centered-text">margin-right</div>
  <div class="content-wrapper">

  ```<Box pr="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 40px; height: 40px;"></div>
    <div class="margin-example" style="width: 50px; height: 40px; margin-left: 5px;"></div>
  </div>

  <div class="centered-text">margin-x-axis</div>
  <div class="content-wrapper">

  ```<Box px="10px" />```
  
  </div>
  <div class="content-wrapper">
    <div class="box"></div>
    <div class="padding-example" style="width: 40px; height: 40px;"></div>
    <div class="margin-example" style="width: 60px; height: 40px;"></div>
  </div>
</div>

If the app is consuming a `ThemeContext` then the `<Box />` component can also consume spacing via object-key shortcuts:
```
const theme = {
  space: {
    s: 4,
    m: 8,
    l: 16
  }
};

<ThemeProvider theme={theme}>
  <Box p="m">This has the same padding</Box>
  <Box p="8px">as this</Box>
</ThemeProvider>

```
TODO: Document all Box, Flex, Absolute, and AbsoluteFlex props

---

## Related

- [System UI](https://system-ui.com)
- [Rebass](https://rebassjs.org/)
- [styled-components](https://www.styled-components.com/)

[MIT License](LICENSE.md)
