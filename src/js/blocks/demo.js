import { registerBlockType } from '@wordpress/blocks'

const edit = ({className, attributes}) => (
  <div className={className}>
    <h1>Hello, world!!!!</h1>
  </div>
)

const save = props => (
  <h1>Hello, world!</h1>
)

registerBlockType('kellymears/demo', {
  title: 'Demo block',
  category: 'common',
  edit,
  save,
})