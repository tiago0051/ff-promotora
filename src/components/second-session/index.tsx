import Image from 'next/image'
import style from './style.module.css'

export default function SecondSession(){
    return (
        <section className={style.session}>
            <div>
                <Image src="/images/2/homem-tablet.png" alt="Homem" width={898} height={786} layout='responsive'/>
            </div>

            <div>
                <h3>O que é antecipação do saque aniversário FGTS?</h3>
                <p>
                A antecipação do saque aniversário, também conhecido como empréstimo FGTS ou empréstimo consignado com garantia do saque aniversário FGTS é um novo tipo de empréstimo para trabalhadores da rede privada (CLT) que posuem saldo no FGTS e escolheram fazer o saque aniversário.<br/>
                Além disso, é um tipo de empréstimo que possui contratação fácil e rápida e com diversas vantagens exclusivas.
                </p>

                <h3>Quais as Vantagens da antecipação do saque?</h3>
                <p>Por ser uma opção de empréstimo que possui garantia de pagamento, o seu saque aniversário, o empréstimo FGTS possui vantagens que outros tipos de crédito não podem oferecer.</p>
            
                <h3>Principais vantagens:</h3>

                <ul>
                    <li>
                        <Image src="/images/2/botao-juros.png" alt="Juros" width={100} height={100}/>
                        <p>Taxa de juros baixa</p>
                    </li>

                    <li>
                        <Image src="/images/2/botao-contratar.png" alt="Contratar" width={100} height={100}/>
                        <p>Contratação fácil e rápida</p>
                    </li>

                    <li>
                        <Image src="/images/2/botao-não-atrapalha.png" alt="Não atrapalha" width={100} height={100}/>
                        <p>Não atrapalha o seu<br/>orçamento mensal</p>
                    </li>

                    <li>
                        <Image src="/images/2/botao-dinheiro-rapido.png" alt="Dinheiro Rápido" width={100} height={100}/>
                        <p>Dinheiro rápido na sua conta</p>
                    </li>
                </ul>

                <p><b>Sujeito a análise e aprovação de crédito.</b></p>
            </div>
        </section>
    )
}