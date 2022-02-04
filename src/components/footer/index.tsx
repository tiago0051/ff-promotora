import Image from "next/image";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa";
import { useRouter } from "next/router";

import style from './style.module.css'

export default function Footer() {
    const router = useRouter();
    return (
        <footer className={style.footer}>
            <div>
                <Image src="/images/final/logo.png" alt="logo" width={376} height={72} />
            </div>

            <div>
                <h2>Precisa de ajuda?</h2>
                <button onClick={() => router.push("https://api.whatsapp.com/send/?phone=5521974806903&text&app_absent=0")}><FaWhatsapp />FALE COM A GENTE</button>
                <p>Fale com a gente no whatsapp. Nossa equipe de atendimento está disponível para te atender de segunda a sexta, de 9 ás 18H</p>
                <span>Desenvolvido por <Link href="https://api.whatsapp.com/send/?phone=5521982436773&text&app_absent=0" passHref>Conect-se</Link></span>
            </div>
        </footer>
    )
}