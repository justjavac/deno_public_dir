/** Returns the path to the user's public directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value                 | Example                 |
 * | ------- | --------------------- | ----------------------- |
 * | Linux   | `XDG_PUBLICSHARE_DIR` | /home/justjavac/Public  |
 * | macOS   | `$HOME`/Public        | /Users/justjavac/Public |
 * | Windows | `{FOLDERID_Public}`   | C:\Users\Public         |
 */
export default function publicDir(): string | null {
  switch (Deno.build.os) {
    case "linux": {
      return Deno.env.get("XDG_PUBLICSHARE_DIR") ?? null;
    }

    case "darwin": {
      const home = Deno.env.get("HOME");
      if (home) return `${home}/Public`;
      break;
    }

    case "windows":
      return Deno.env.get("FOLDERID_Public") ?? null;
  }

  return null;
}
