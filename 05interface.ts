/*名前をプロパティに持つ人間インターフェースを作成*/
interface Human{
    name:string;
}


/*人間インターフェースを継承し、年齢をプロパティに持つスポーツ選手インターフェースを作成*/
interface Athlete extends Human{
	age:number
}


/*スポーツ選手インターフェースを実装した、サッカー選手クラスを作成してください。*/
class SoccerPlayer implements Athlete,Human {
    name : 'lionelMessi';
    age  : 37;
}






