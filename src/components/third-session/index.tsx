import Image from 'next/image'
import style from './style.module.css'

export default function ThirdSession (){
    return (
        <section className={style.section}>
            <div>
                <h3>Vantagens da ultilização do empréstimo consignado:</h3>
                <p>Adquirir o crédito consignado é uma alternativa que apresenta vantagens em relação à forma de contratação e às taxas de juros cobradas pelas instituições que oferecem o serviço:</p>

                <ul>
                    <li><p><b>Juros menores</b>: em relação às demais linhas de créditos oferecidas pelas instituições financeiras, as taxas de juros do crédito consignado são menores e podem apresentar vantagem em uma situação emergencial, em que o cliente necessite da contratação desse crédito;</p></li>
                    <li><p><b>Acessibilidade na contratação dos serviços</b>: por apresentar o método de desconto direto da folha de pagamento, o banco possui a segurança de que o valor retornará para instituição, e que a inadimplência não acontecerá com esse serviço. E é nessa perspectiva que as instituições permitem maior facilidade para a contratação do crédito consignado.</p></li>
                </ul>

                <p><b>Com o crédito consignado há a possibilidade de pagamento em maior quantidade de parcelas, em período mais prolongado!</b></p>
            </div>

            <div>
                <Image src="/images/3/homem-pulando.png" alt="Homem pulando" width={717} height={719} layout="responsive"/>
            </div>
        </section>
    )
}