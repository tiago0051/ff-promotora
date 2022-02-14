import Image from "next/image"
import styles from '../styles/confirma_cadastro.module.css'
import { FaWhatsapp } from "react-icons/fa"
import { useRouter } from "next/router"
import Head from "next/head"

export default function ConfimarCadastro(){
    const router = useRouter()
    return(
        <main className={styles.main}>
            <Head>
                <title>Obrigado</title>
            </Head>
            <div>
                <div><Image src="/images/agradecimento/agradecimento.png" alt="Obrigado" width={713} height={283}/></div>
                <h2>Você está quase lá...</h2>
                <p>Em breve uma de nossos consultores ajudará você a solicitar seu Saque do FGTS.<br/> Se preferir pode falar mais rápido, basta APERTAR o botão abaixo.</p>
                <button onClick={() => router.push("https://api.whatsapp.com/send/?phone=5521974806903&text&app_absent=0")}>CONTATO <FaWhatsapp/></button>
            </div>
        </main>
    )
}