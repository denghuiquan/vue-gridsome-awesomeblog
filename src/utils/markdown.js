import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default md
export function mdToHtml (mdContent) {
  return md.render(mdContent)
}
