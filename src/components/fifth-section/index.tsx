import Image from 'next/image'
import { SyntheticEvent } from 'react'
import style from './style.module.css'

export default function FifthSection(){
    const perguntas = [
        {
            pergunta: '01 - O que é FGTS?',
            resposta: 'O Fundo de Garantia do Tempo de Serviço (FGTS) é constituído pelos saldos das contas vinculadas formadas pelos depósitos realizados pelos empregadores em nome dos trabalhadores.'
        },
        {
            pergunta: '02 - O que é o Saque Aniversário?',
            resposta: 'É uma modalidade que permite a retirada de parte do saldo da conta do FGTS, anualmente, no mês do aniversário do cliente.'
        },
        {
            pergunta: '03 - O que é o empréstimo Saque Aniversário com Garantia do FGTS?',
            resposta: 'Esse empréstimo consiste em uma antecipação do valor do saque disponibilizado no mês do seu aniversário. O saldo do FGTS é utilizado como garantia da operação, e as parcelas são pagas automaticamente da conta vinculada ao FGTS.'
        },
        {
            pergunta: '04  - Quais as vantagens do empréstimo com garantia do FGTS?',
            resposta: 'O crédito tem garantia de 100% do valor cedido, possui taxa de juros atrativa, fôlego financeiro – sem prestações mensais, não impacta na contratação de outras linhas de crédito, e as parcelas são pagas anualmente.'
        },
        {
            pergunta: '05  - A opção de Saque Aniversário pode ser alterada para Saque Rescisão?',
            resposta: 'Sim, contudo, a alteração passa a vigorar 24 meses após a solicitação, que apenas poderá ser realizada ao término das operações contratadas.'
        },
        {
            pergunta: '06  - No empréstimo Saque Aniversário existe a cobrança de algum imposto ou taxa?',
            resposta: 'Por se tratar de uma operação de crédito, será cobrado o IOF e a taxa de juros da operação.'
        },
        {
            pergunta: '07  - Qual o prazo de cancelamento da proposta?',
            resposta: 'O cancelamento da proposta pode ocorrer em até 7 dias.'
        },
        {
            pergunta: '08  - O empréstimo com garantia do Saque Aniversário do FGTS compromete outras linhas de crédito?',
            resposta: 'Essa linha de crédito não compromete a contratação de outras linhas de crédito'
        },
        {
            pergunta: '09  - Como é feito o pagamento do empréstimo?',
            resposta: 'O pagamento do empréstimo será feito anualmente, no dia do vencimento da parcela, mediante débito dos recursos (ativos e inativos) da conta vinculada do FGTS e repasse ao Mercantil do Brasil.'
        },
        {
            pergunta: '10  - Como é feita a liberação do crédito do empréstimo ao cliente?',
            resposta: 'A liberação do crédito ocorrerá através do envio de TED, obrigatoriamente em conta de titularidade do trabalhador.'
        },
        {
            pergunta: '11  - É possível antecipar a liquidação do empréstimo e desbloquear o meu FGTS?',
            resposta: 'A liquidação do empréstimo é possível mediante o pagamento com recursos próprios, não sendo possível a utilização de recursos do FGTS. Após a liquidação, o saldo do FGTS será liberado.'
        },
        {
            pergunta: '12  - Quais documentos são necessários para contratação?',
            resposta: 'Durante a contratação, pediremos foto dos dois lados do RG ou da CNH dentro da validade e emitidos há, no máximo, 10 anos. É importante que as fotos sejam tiradas em um ambiente bem iluminado e os dados estejam legíveis.'
        },
    ]

    function clickSeta(event: SyntheticEvent){
        const element = ((event.target as HTMLElement).parentNode?.parentNode?.parentNode?.lastChild as HTMLElement)

        element.style.height == '0px' ? element.style.height = 'initial' : element.style.height = '0'
    } 

    return (
        <section className={style.section}>
            <h3>Ainda com dúvidas?</h3>
            <h3>Confira as perguntas mais frequentes</h3>

            {
                perguntas.map(pergunta => (
                    <div key={pergunta.pergunta}>
                        <div>
                            <h4>{pergunta.pergunta}</h4>
                            <Image src="/images/final/seta.png" alt="seta" width={35} height={20} onClick={clickSeta}/>
                        </div>
                        <p style={{height: "0", overflow: "hidden"}}>{pergunta.resposta}</p>
                    </div>
                ))
            }


        </section>
    )
}