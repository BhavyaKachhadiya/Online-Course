```markdown
# Executing Commands with `child_process`

In Node.js, you can execute commands using the `child_process` module.

## For Windows OS

### Open a Calculator:
```

```js
cp.execSync('calc');
```

### Open a Browser:

```js
cp.execSync('start brave');
```

### Open a Browser and Go to Google:

```js
cp.execSync('start brave http://www.google.com');
```

## For macOS

### Open a Calculator:

```js
cp.execSync('open -a Calculator');
```

### Open a Browser:

```js
const bravePath = '/Applications/Brave Browser.app';
cp.execSync(`open -a "${bravePath}"`);
```

### Open a Browser and Go to Google:

```js
cp.execSync(`open -a "${bravePath}" http://www.google.com`);
```