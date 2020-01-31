/**
 * WordPress dependencies
 */
import {
  render,
  useEffect,
  useState,
} from '@wordpress/element';
import {
  BlockEditorKeyboardShortcuts,
  BlockEditorProvider,
  BlockList,
  BlockInspector,
  WritingFlow,
  ObserveTyping,
} from '@wordpress/block-editor';
import {
  Popover,
  SlotFillProvider,
  DropZoneProvider,
} from '@wordpress/components';
import { registerCoreBlocks } from '@wordpress/block-library';
import domReady from '@wordpress/dom-ready'

/**
 * Formats
 */
import '@wordpress/format-library';

/**
 * Application
 */
const App = props => {
  const [
    blocks,
    updateBlocks
  ] = useState([]);

  useEffect(() => {
    registerCoreBlocks()
  }, []);

  return (
    <div className="playground">
      <SlotFillProvider>
        <DropZoneProvider>
          <BlockEditorProvider
            value={blocks}
            onInput={updateBlocks}
            onChange={updateBlocks}>
            <div className="editor-styles-wrapper">
              <BlockEditorKeyboardShortcuts />
              <WritingFlow>
                <ObserveTyping>
                  <BlockList />
                </ObserveTyping>
              </WritingFlow>
            </div>

            <div className="playground__sidebar">
              <BlockInspector />
            </div>
            <Popover.Slot />
          </BlockEditorProvider>
        </DropZoneProvider>
      </SlotFillProvider>
    </div>
  );
}

domReady(() => {
  const wrap = document.querySelector('#wpwrap > div:first-of-type')
  const footer = document.querySelector('#wpfooter')

  render(<App footer={footer} />, wrap)
});
