import Image from "next/image";
import {FaWhatsapp} from "react-icons/fa";

import style from './style.module.css'

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div>
                <Image src="/images/final/logo.png" alt="logo" width={376} height={72} />
            </div>

            <div>
                <h2>Precisa de ajuda?</h2>
                <button><FaWhatsapp/>FALE COM A GENTE</button>
                <p>Fale com a gente no whatsapp. Nossa equipe de atendimento está disponível para te atender de segunda a sexta, de 10 ás 16H</p>
            </div>
        </footer>
    )
}