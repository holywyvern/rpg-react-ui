```jsx
import Button from "../Button";
import Card from "../Card";
import TextInput from "../TextInput";
import Columns from "../Columns";
import Flex from "../Flex";
import Label from "../Label";

<Card>
  <Form>
    <Flex column>
      <Columns
        format={["auto", "1fr"]}
        gap="md"
        alignItems="center"
        align="stretch"
      >
        <Label input="email">Email</Label>
        <TextInput name="email" />
        <Label input="password">Password</Label>
        <TextInput name="password" type="password" />
      </Columns>
      <Button submit align="end">
        Sign In
      </Button>
    </Flex>
  </Form>
</Card>;
```
