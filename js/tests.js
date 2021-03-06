/*tests*/
var tests = [
"(quote a)",
"(quote (a b c))",
"(car (quote (a b c)))",
"(cdr (quote (a b c)))",
"(cons (quote a) (quote (b c)))",
"(= (car (quote (a b))) (quote a))",
"(= (car (cdr (quote ( a b)))) (quote a))",
"(car (quote (0 1)))",
"(cdr (cons (+ 0 1) (+ 2 3)))",
"(define foo (+ 0 1))",
"foo",
"(define bar 2)",
"bar",
"(+ foo bar)",
"(cond true (+ 0 1))",
"(cond (= foo bar) 7 9)",
"((lambda (x) (+ x 1)) 5)",
"(define add (lambda (x) (lambda (y) (+ x y))))",
"((add 4) 5)",
"(define range (lambda (a b) (cond (= a b) (quote ()) (cons a (range (+ a 1) b)))))",
"(range 0 10)",
"(define fac (lambda (n) (cond (= n 0) 1 (* n (fac (- n 1))))))",
"(fac 0)",
"(fac 10)",
"(define map (lambda (f xs) (cond (= xs nil) nil (cons (f (car xs)) (map f (cdr xs))))))",
"(map (lambda (x) (+ x 1)) (range 0 10))",
"(map (lambda (x) (fac x)) (range 0 10))",
"(define fib (lambda (n) (cond (or (= n 0) (= n 1)) 1 (+ (fib (- n 1)) (fib (- n 2))))))",
"(map (lambda (x) (fib x)) (range 0 10))"
];
