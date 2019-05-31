import React from 'react';
import TestRenderer from 'react-test-renderer';
import {
  Absolute,
  AbsoluteFlex,
  Box,
  Flex,
} from '../index';

const renderJSON = el => {
  return TestRenderer.create(el).toJSON();
}

describe('Box', () => {
  test('renders', () => {
    const json = renderJSON(
      <Box />
    );
    expect(json.type).toBe('div');
  });

  test('renders with as prop', () => {
    const json = renderJSON(
      <Box as='header' />
    )
    expect(json.type).toBe('header')
  });

  test('renders with style props', () => {
    const json = renderJSON(
      <Box width={1} />
    )
    expect(json).toHaveStyleRule('width', '100%')
  });
});

describe('Flex', () => {
  test('renders', () => {
    const json = renderJSON(
      <Flex />
    )
    expect(json.type).toBe('div')
  })

  test('renders with flex props', () => {
    const json = renderJSON(
      <Flex alignItems='center' />
    )
    expect(json).toHaveStyleRule('display', 'flex')
    expect(json).toHaveStyleRule('align-items', 'center')
  })

  test('renders with Box props', () => {
    const json = renderJSON(
      <Flex color='tomato' />
    )
    expect(json).toHaveStyleRule('color', 'tomato')
  })

  test('renders with as and Box props', () => {
    const json = renderJSON(
      <Flex as='footer' color='tomato' />
    )
    expect(json.type).toBe('footer')
    expect(json).toHaveStyleRule('color', 'tomato')
  })
})

describe('Absolute', () => {
  test('renders', () => {
    const json = renderJSON(
      <Absolute />
    )
    expect(json.type).toBe('div')
    expect(json).toHaveStyleRule('position', 'absolute')
    expect(json).toHaveStyleRule('top', '0')
    expect(json).toHaveStyleRule('bottom', '0')
    expect(json).toHaveStyleRule('left', '0')
    expect(json).toHaveStyleRule('right', '0')
  })

  test('renders with absolute props', () => {
    const json = renderJSON(
      <Absolute top='auto' />
    )
    expect(json).toHaveStyleRule('top', 'auto')
  })

  test('renders with Box props', () => {
    const json = renderJSON(
      <Absolute color='tomato' />
    )
    expect(json).toHaveStyleRule('color', 'tomato')
  })

  test('renders with as and Box props', () => {
    const json = renderJSON(
      <Absolute as='footer' color='tomato' />
    )
    expect(json.type).toBe('footer')
    expect(json).toHaveStyleRule('color', 'tomato')
  })
})

describe('AbsoluteFlex', () => {
  test('renders', () => {
    const json = renderJSON(
      <AbsoluteFlex />
    )
    expect(json.type).toBe('div')
    expect(json).toHaveStyleRule('position', 'absolute')
    expect(json).toHaveStyleRule('top', '0')
    expect(json).toHaveStyleRule('bottom', '0')
    expect(json).toHaveStyleRule('left', '0')
    expect(json).toHaveStyleRule('right', '0')
  })

  test('renders with absolute props', () => {
    const json = renderJSON(
      <AbsoluteFlex top='auto' />
    )
    expect(json).toHaveStyleRule('top', 'auto')
  })

  test('renders with Flex props', () => {
    const json = renderJSON(
      <AbsoluteFlex alignItems='center' />
    )
    expect(json).toHaveStyleRule('align-items', 'center')
  })

  test('renders with as, Absolute and Flex props', () => {
    const json = renderJSON(
      <AbsoluteFlex as='footer' top="16px" alignItems='center' />
    )
    expect(json.type).toBe('footer')
    expect(json).toHaveStyleRule('top', '16px')
    expect(json).toHaveStyleRule('align-items', 'center')
  });
});
