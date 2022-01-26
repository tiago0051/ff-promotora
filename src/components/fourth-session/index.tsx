import Image from 'next/image'
import style from './style.module.css'

export default function FourthSession(){
    return (
        <section className={style.section}>
            <div>
                <h3>Condições</h3>
                <p>Confira as condições para contratar a Antecipação Saque-Aniversário com FGTS</p>

                <ul>
                    <li><Image src="/images/4/check.png" alt="Check" width={34} height={29} layout='fixed'/><p>Ser maior de 18 anos ou emancipado</p></li>
                    <li><Image src="/images/4/check.png" alt="Check" width={34} height={29} layout='fixed'/><p>Ter situação regular com a Receita Federal</p></li>
                    <li><Image src="/images/4/check.png" alt="Check" width={34} height={29} layout='fixed'/><p>Possuir conta corrente ou poupança</p></li>
                    <li><Image src="/images/4/check.png" alt="Check" width={34} height={29} layout='fixed'/><p>Ter saldo do FGTS em conta ativa ou inativa</p></li>
                    <li><Image src="/images/4/check.png" alt="Check" width={34} height={29} layout='fixed'/><p>Ser optante da modalidade Saque-Aniversário do FGTS</p></li>
                </ul>
                
                <button>Solicite aqui</button>
            </div>
        </section>
    )
}