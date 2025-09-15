/* eslint-disable @typescript-eslint/no-empty-object-type */

import { CustomThemeType } from "./types"; // Import type from above file
declare module "styled-components" {
  export interface DefaultTheme extends CustomThemeType {} // extends the global DefaultTheme with our ThemeType.
}
