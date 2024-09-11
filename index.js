import Article from "./Article.mjs";
import { mult } from "./math.mjs";


console.log('hi');
const num1 = 5;
const num2 = 8;
console.log(num1+num2);
console.log(mult(4,9));
console.log(del(45,9));

const newArticle = new Article('Content for article!')
console.log(newArticle.render());


