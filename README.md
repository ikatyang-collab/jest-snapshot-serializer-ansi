# jest-snapshot-serializer-ansi

[![npm](https://img.shields.io/npm/v/jest-snapshot-serializer-ansi.svg)](https://www.npmjs.com/package/jest-snapshot-serializer-ansi)
[![build](https://img.shields.io/github/actions/workflow/status/ikatyang/jest-snapshot-serializer-ansi/test.yml)](https://github.com/ikatyang/jest-snapshot-serializer-ansi/actions?query=branch%3Amain)

jest snapshot serializer for stripping [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code)

[Changelog](https://github.com/ikatyang/jest-snapshot-serializer-ansi/blob/main/CHANGELOG.md)

## Install

```sh
npm install jest-snapshot-serializer-ansi
```

Note: This package is now pure ESM, you may want to install `jest-snapshot-serializer-ansi@1` if you'd like to use it in CJS environment

## Usage

In setup file or test file:

```js
import serializerAnsi from 'jest-snapshot-serializer-ansi'
expect.addSnapshotSerializer(serializerAnsi)
```

## Development

```sh
# lint
pnpm run lint

# build
pnpm run build

# test
pnpm run test
```

## License

MIT © [Ika](https://github.com/ikatyang)
