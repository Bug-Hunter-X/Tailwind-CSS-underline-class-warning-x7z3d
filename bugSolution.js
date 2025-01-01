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
To fix this warning, ensure the parent element has a text-related class.  Here is the corrected code:

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