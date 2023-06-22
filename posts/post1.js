const snippets = document.querySelectorAll("pre code");

const code = `
  // array of random integers
  let myArr = [];
  for(let i = 0; i < 10; i++) {
    // range [-50, 49]
    myArr.push(Math.floor((Math.random() - 0.5) * 100));
  }
  // array of positive integers only
  let positiveArr = myArr.filter((item) => item > 0);
`;
snippets.forEach(snippet => snippet.textContent = code);

const snippetRegex = document.querySelector(".snippet--regex pre code");

const regularExpressions = [
  { 
    expression: /\/\/.+\n/gi,
    class: "comments"
  },
  { 
    expression: /[0-9]+/gi,
    class: "numbers"
  },
  { 
    expression: /[\+\-\*]/gi,
    class: "operators"
  },
  { 
    expression: /\.\w+/gi,
    class: "functions"
  },
  { 
    expression: /for|let/gi,
    class: "keywords"
  }
];

regularExpressions.forEach((regularExpression) => snippetRegex.innerHTML = snippetRegex.innerHTML.replace(regularExpression.expression, `<span class=${regularExpression.class}>$&</span>`));
