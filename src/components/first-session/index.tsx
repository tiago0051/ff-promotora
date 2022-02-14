import Image from "next/image";
import style from "./index.module.css"

export default function FirstSession(){
    return (
        <section>
            <header className={style.header}>
                <div><Image src="/images/1/logo.png" alt="FF Promotora" width={311} height={59} layout="responsive"/></div>
            </header>

            <div className={style.section}>
                <form action="https://paginas.rocks/capture" method="post">
                    <input id="id" name="id" type="hidden" value="618743" />
                    <input id="mid" name="mid" type="hidden" value="618743" />
                    <input id="pid" name="pid" type="hidden" value="20547143" />
                    <input id="list_id" name="list_id" type="hidden" value="618743" />
                    <input id="provider" name="provider" type="hidden" value="leadlovers" />

                    <div>
                    <Image src="/images/1/formulario.png" alt="É a sua vez, saque aniversário FGTTS" width={541} height={314} layout="responsive"/>
                    </div>

                    <label>
                        <p>Nome e Sobrenome</p>
                        <input id="name" name="name" type="text"/>
                    </label>

                    <label>
                        <p>Celular</p>
                        <input id="phone" name="phone" type="text"/>
                    </label>
                    
                    <label>
                        <p>E-mail</p>
                        <input id="email" name="email" type="email"/>
                    </label>

                    <button type="submit">Solicite aqui</button>

                    <input type="hidden" id="source" name="source" value="" />
                    <img src="https://llimages.com/redirect/redirect.aspx?A=V&p=20547143&m=618743" style={{display: "none"}} />
                </form>
            </div>
        </section>
    )
}