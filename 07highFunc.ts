
// 商品の価格（税抜き）
const excludingTax: number[] = [300, 100, 120, 1000, 500];

/*
// 消費税率は8%とする
const taxRate: number = 0.08;

// 税込み価格を計算
const calculateIncludingTax = (price: number): number => {return price * (1 + taxRate);};

// map関数を使用
const pricesWithTax: number[] = excludingTax.map(calculateIncludingTax);
console.log(pricesWithTax);
*/

const pricesIncludingTax = excludingTax.map(price => price *(1 + 0.08));
console.log(pricesIncludingTax);