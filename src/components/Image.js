import React, {useState} from 'react';
import {Button} from "react-bootstrap";

const Image = () => {
    const [size, setSize] = useState(500)
    const [img, setImg] = useState(true)

    return (
        <div>
            {img &&
                <div id="img-place">
                    <a id="img" target="_blank" rel="noreferrer" href="https://guide.kyivcity.gov.ua/">
                        <img style={{width: size + 'px'}} className="img"
                             src="https://anga.ua/ifiles/images/kyiv/tsikavi_fakty_pro_kyiv/Screenshot_2(1).png"
                             alt="Київ"/>
                    </a>
                </div>
            }

            <div className="buttons">
                <Button variant="primary" onClick={() => setImg(true)}>Додати</Button>{' '}
                <Button variant="primary" onClick={() => setSize(size + 50)}>Збільшити</Button>{' '}
                <Button variant="primary" onClick={() => setSize(size - 50)}>Зменшити</Button>{' '}
                <Button variant="primary" onClick={() => setImg(false)}>Видалити</Button>
            </div>
        </div>
    );
};

export default Image;