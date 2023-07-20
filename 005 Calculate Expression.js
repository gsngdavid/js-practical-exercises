function calculateExpression(exp) {
  return new Function("return " + exp)();
}
