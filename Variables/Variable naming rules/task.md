Speaking of variable names, we can distinguish between restrictions and rules.

- Restrictions (JavaScript limitations):
  - The name must contain only letters, digits, or the symbols `$` and `_`.
  - The first character must not be a digit.
  - It must NOT match the JavaScript reserved names: `let`, `var`, etc. (full list [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)).
- Rules (Programmer arrangements):
  - When the name contains multiple words, use [camelCase](https://en.wikipedia.org/wiki/Camel_case) for naming: `complexVariableName`.
  - Try to choose meaningful variable names. It is hard to guess what is in a box labeled `EOq3I_S499$`, right? 🙂

Examples of valid JavaScript variable names:
- `text`
- `totalAmount`
- `$`, `_` – Yes, a variable name can consist of a single character, even if it is a `$` or `_` character.
- `EOq3I_S499$`

### Task
Remove variable declarations with invalid JavaScript names.

<div class="hint">
  In this task, pay attention only to the correctness of the names according to JavaScript language rules, even if they are meaningless.
</div>

