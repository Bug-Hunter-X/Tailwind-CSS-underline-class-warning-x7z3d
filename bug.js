```javascript
// MyComponent.js

function MyComponent() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default MyComponent;
```
This code produces a warning in the console because of the `underline` class.