```jsx
import Option from "./Option";
<Select placeholder="Select option" header={<h3>Select Option</h3>}>
  {Array(10)
    .fill(null)
    .map((_, i) => (
      <Option value={i} key={i}>
        {`Option #${i + 1}`}
      </Option>
    ))}
</Select>;
```
