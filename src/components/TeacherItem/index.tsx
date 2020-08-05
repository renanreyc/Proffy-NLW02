import React from 'react';

import whatssapIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/64597226?s=460&u=1a81814b9cdb2772f2bb944f6050bcfe398379e4&v=4" alt="Renan Rodrigues"/>
            <div>
                <strong>Renan Rodrigues</strong>
                <span>Quimica</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 50,00</strong>
            </p>
            <button type="button">
                <img src={whatssapIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem