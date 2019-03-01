import theme from 'mdx-deck/themes'
import syntax from 'react-syntax-highlighter/styles/prism/prism'
const helvetica = 'Comic Sans MS, cursive'

export default {
  ...theme,
  prism: {
    style: syntax
  }
}