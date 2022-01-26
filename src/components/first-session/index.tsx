import Image from "next/image";
import style from "./index.module.css"

export default function FirstSession(){
    return (
        <section>
            <header className={style.header}>
                <div><Image src="/images/1/logo.png" alt="FF Promotora" width={311} height={59} layout="responsive"/></div>
            </header>

            <div className={style.section}>
                <form>
                    <div>
                    <Image src="/images/1/formulario.png" alt="É a sua vez, saque aniversário FGTTS" width={541} height={314} layout="responsive"/>
                    </div>

                    <label>
                        <p>Nome e Sobrenome</p>
                        <input type="text"/>
                    </label>
                    
                    <label>
                        <p>CPF</p>
                        <input type="text"/>
                    </label>

                    <label>
                        <p>Celular</p>
                        <input type="text"/>
                    </label>

                    <label>
                        <p>CEP</p>
                        <input type="text"/>
                    </label>
                    
                    <label>
                        <p>E-mail</p>
                        <input type="email"/>
                    </label>

                    <button>Solicite aqui</button>
                </form>
            </div>
        </section>
    )
}