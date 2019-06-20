# "2 EZ" Gutenberg Playground

This pretty much just isolates the `/playground/` directory of the official Gutenberg repository.

Playground runs the Gutenberg editor without requiring a backend server or application to support it. In other words -- it's serverless Gutenberg and, turns out, serverless Gutenberg is a great environment to develop blocks in.

## Benefits

- Play with Gutenberg without having to load WordPress.
- Hot module reloading support without the hassle of doing it in the actual WordPress application.

## Caveats

There are some inconsistencies. I've noticed that the styles aren't 100% in line with the true blue Gutenberg and that media upload support is mixed -- you can use "Insert from URL", but the `Media & Text` block and `Gallery` block don't support uploading at all.

But the point of this is to make new blocks, so NBD, right?

## Install

- `git clone git@github.com:kellymears/gutenberg-playground`
- `yarn`
- `yarn hot`
