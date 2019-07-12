# Gutenberg Playground

This pretty much just isolates the `playground` component of the [Gutenberg repository](https://github.com/wordpress/auttomatic).

Playground runs the Gutenberg editor without requiring a backend server or application to support it. In other words -- it's serverless Gutenberg and, turns out, serverless Gutenberg is a great environment to develop blocks in.

## Install

- `git clone git@github.com:kellymears/gutenberg-playground`
- `yarn`
- `yarn hot`

I have added a single demo block (`playground/demo`) to the editor. You can modify it or add your own from the `src/js/blocks` directory. If you are adding new blocks remember to import them in `src/js/blocks.js`.
