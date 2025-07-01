function add(a: number, b: number) {
  return a + b;
}

// could use the typeof keywork
type AddFn = typeof add; // gives function type
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;
// we dont know the return type so we infer it because that is the reason for our function

type AddFnReturn = ReturnValueType<AddFn>;