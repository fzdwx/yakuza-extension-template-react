# launcher extension sample

It's https://github.com/fzdwx/launcher extension sample

### Development:

```shell
pnpm install
pnpm run dev
```

1. Use [template](https://github.com/fzdwx/launcher-extension-sample)
2. Start the launcher after pnpm dev, enter dev and turn on `Extension dev mode` option

### Release:

1. Modify the fields related to the `launcher` object in `package.json`
2. Must submit the `dist` directory
3. Submit a pr to https://github.com/fzdwx/launcher-extension, in `extensions .json` Add information about your
   extension
