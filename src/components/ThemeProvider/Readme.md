```jsx
import { lightTheme, seaTheme } from "../../themes";
import Card from "../Card";

<ThemeProvider theme={lightTheme}>
  <Card>A card with the light theme</Card>
</ThemeProvider>;
```

```jsx
import { lightTheme, seaTheme } from "../../themes";
import Card from "../Card";
<ThemeProvider theme={seaTheme}>
  <Card>A card with the sea theme</Card>
</ThemeProvider>;
```
