import theme from 'mdx-deck/themes'
import syntax from 'react-syntax-highlighter/styles/prism/prism'

export default {
  ...theme,
  prism: {
    style: syntax
  }
}