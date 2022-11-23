function receivesAFunction(name) {
  return name();
}
function returnsANamedFunction() {
  return function name() {
    return true;
  };
}
function returnsAnAnonymousFunction() {
  return () => {
    return true;
  };
}
