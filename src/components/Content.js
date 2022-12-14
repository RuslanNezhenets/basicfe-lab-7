import React, {Component} from 'react';

class Content extends Component {
    ChangeColorFirst(element) {
        console.log(element.target)
        element.target.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        element.target.style.color = "#fff";
    }

    render() {
        return (
            <div>
                <b>Хоббі:</b>
                <ul>
                    <li onClick={this.ChangeColorFirst}>Комп'ютерні ігри (клікабельно)</li>
                    <li onClick={this.ChangeColorFirst}>Пазли (клікабельно)</li>
                    <li>Настільні ігри</li>
                </ul>
                <b>Улюблені фільми:</b>
                <ol>
                    <li>"Властелин колец"</li>
                    <li>"Пираты карибского моря"</li>
                    <li>"Гарри Поттер"</li>
                </ol>
                <div>
                    <b>Київ</b> — столиця України, одне з найбільших і найстаріших міст Європи. Розташований у середній
                    течії Дніпра, у північній Наддніпрянщині.

                    Політичний, соціально-економічний, транспортний та освітньо-науковий центр країни. Окрема
                    адміністративно-територіальна одиниця у складі України і адміністративний центр Київської області.
                    Місце
                    розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств
                    та
                    громадських об'єднань, що працюють в Україні.

                    Населення — понад 2,8 млн чол. Київ з населеними пунктами вздовж Дніпра утворює Київську агломерацію
                    з
                    населенням до 4 млн осіб.
                </div>
            </div>
        );
    }
}

export default Content;