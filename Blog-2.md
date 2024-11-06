# Handling Asynchronous Operations in TypeScript: `async/await` vs Callbacks vs Promises

Asynchronous operations are a fundamental part of modern web development. When it's fetching data from an api. It's many tasks require waiting for some external process to complete before continuing. In TypeScript, there are several ways to handle asynchronous operations: **callbacks**, **promises**, and the newer **async/await** syntax.

In this blog post, we'll explore how to handle asynchronous operations using `async/await` and compare it to using callbacks and promises in TypeScript. We will descuss the benefits and challenges of each.

## What is Callbacks?

Callbacks are functions passed as arguments to other functions. These functions are called after a task completes, typically in asynchronous operations. This was the traditional way of handling asynchronous code in TypeScript.

### Example of a Callback

```typescript
function fetchData(callback) {
  setTimeout(() => {
    callback("data");
  }, 1000);
}
```

## What is async/await ?

The `async/await` syntax is a modern way of handling asynchronous operations in TypeScript. It allows you to write asynchronous code in a more readable and concise way. The syntax is as follows:

```typescript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}
```

I prefer using `async/await` over using `promises` in TypeScript. It's more concise and easier to read.
