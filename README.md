# deno_public_dir

[![tag](https://img.shields.io/github/release/justjavac/deno_public_dir)](https://github.com/justjavac/deno_public_dir/releases)
[![Build Status](https://github.com/justjavac/deno_public_dir/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_public_dir/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_public_dir)](https://github.com/justjavac/deno_public_dir/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

Returns the path to the user's public directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

|Platform | Value                 | Example                 |
| ------- | --------------------- | ----------------------- |
| Linux   | `XDG_PUBLICSHARE_DIR` | /home/justjavac/Public  |
| macOS   | `$HOME`/Public        | /Users/justjavac/Public |
| Windows | `{FOLDERID_Public}`   | C:\Users\Public         |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import publicDir from "https://deno.land/x/public_dir/mod.ts";

publicDir();
// Lin: "/home/justjavac/Public"
// Mac: "/Users/justjavac/Public"
// Win: "C:\Users\Public"
```

## License

[deno_public_dir](https://github.com/justjavac/deno_public_dir) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
