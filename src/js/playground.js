/**
 * @wordpress
 */
import '@wordpress/editor' // This shouldn't be necessary

import {
  render,
  useState,
  Fragment,
} from '@wordpress/element'

import {
  BlockEditorProvider,
  BlockList,
  WritingFlow,
  ObserveTyping,
} from '@wordpress/block-editor'

import {
  Popover,
  SlotFillProvider,
  DropZoneProvider,
} from '@wordpress/components'

import { registerCoreBlocks } from '@wordpress/block-library'

import '@wordpress/format-library'

/**
 * mock @wordpress/editor styles
 */
import './../scss/style.scss'
import '@wordpress/components/build-style/style.css'
import '@wordpress/block-editor/build-style/style.css'
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/editor.css'
import '@wordpress/block-library/build-style/theme.css'
import '@wordpress/format-library/build-style/style.css'

/**
 * Custom blocks
 */
import './blocks/demo'

const Render = ({ blocks }) => blocks.map(block => {
  const {name, id, attributes} = block
  console.log(block)
  switch (name) {
    case 'core/paragraph':
      return <p key={id} dangerouslySetInnerHTML={{ __html: attributes.content }} />

    case 'core/heading':
      return <h1 key={id} dangerouslySetInnerHTML={{ __html: attributes.content }} />

    case 'core/image':
      return (
        <figure key={id} style={{
          width: attributes.width,
          height: attributes.height,
          paddingTop: '2rem',
          paddingBottom: '2rem',
        }}>
          <img src={attributes.url} />
          {attributes.caption && (
            <figcaption style={{textAlign: 'center'}}>{attributes.caption}</figcaption>
          )}
        </figure>
      )
  }
})

const App = () => {
  const [blocks, updateBlocks] = useState([])

  return (
    <Fragment>
      <div className="playground__header">
        <h1 className="playground__logo">Gutenberg Playground</h1>
      </div>

      <div className="playground" style={{
        display: 'flex',
        flexDirection: 'row',
        }}>
        <div className="playground__body" style={{width: '50%'}}>
          <SlotFillProvider>
            <DropZoneProvider>
              <BlockEditorProvider
                value={blocks}
                onInput={updateBlocks}
                onChange={updateBlocks}>
                <div className="editor-styles-wrapper">
                  <WritingFlow>
                    <ObserveTyping>
                      <BlockList />
                    </ObserveTyping>
                  </WritingFlow>
                </div>
                <Popover.Slot />
              </BlockEditorProvider>
            </DropZoneProvider>
          </SlotFillProvider>
        </div>
        <div className="playground__output" style={{
          width: '50%',
          paddingTop: '20px',
        }}>
          <Render blocks={blocks} />
        </div>
      </div>
    </Fragment>
  )
}

registerCoreBlocks()

render(
  <App />,
  document.querySelector('#playground')
)
