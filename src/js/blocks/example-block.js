import { registerBlockType } from '@wordpress/blocks'

const blockStyle = {
  background: `#000`,
  color: `pink`,
  border: `3px solid pink`,
  padding: `10px`,
  fontFamily: `-apple-system, BlinkMacSystemFont, sans-serif`,
}

const edit = ({ className }) => (
  <div className={className} style={blockStyle}>
    <div className={`hello-world`}>
      Hello, world!
    </div>
  </div>
)

registerBlockType(`playground/demo`, {
  title: `Playground Demo Block`,
  category: `common`,
  edit,
  save: () => null,
})