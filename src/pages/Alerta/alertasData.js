// src/paginas/Alertas/alertasData.js

export const ALERTAS = [
  {
    id: "golpe-pix-devolucao",
    titulo: "Golpe do Pix com Devolução",
    texto: `
Criminosos se passam por suporte de bancos ou amigos e pedem para você
fazer um Pix com a promessa de devolver em dobro ou corrigir um suposto erro.

⚠ Nunca faça transferências apenas com base em mensagens.
Confirme sempre pelos canais oficiais do banco e com a pessoa em outro contato.
    `.trim()
  },
  {
    id: "assinaturas-teste-gratis",
    titulo: "Assinaturas Automáticas em Testes Grátis",
    texto: `
Sites e aplicativos oferecem “teste grátis” e escondem nas letras miúdas
que a assinatura é renovada automaticamente, cobrando no cartão.

✅ Leia sempre os termos antes de cadastrar o cartão
e verifique com frequência a fatura para identificar cobranças estranhas.
    `.trim()
  },
  {
    id: "links-rastreamento-encomenda",
    titulo: "Links de Rastreamento de Encomenda",
    texto: `
Golpistas enviam SMS, e-mails ou mensagens com links falsos de rastreamento
de encomenda, pedindo pagamento de taxas ou atualização de dados.

✅ Nunca clique em links recebidos por mensagem.
Acesse o site oficial da transportadora ou do correio digitando o endereço
direto no navegador.
    `.trim()
  },
  {
    id: "pix-programado",
    titulo: "Pix Programado",
    texto: `
Criminosos combinam um pagamento via Pix programado, mas pedem que você
antecipe algum valor ou “garantia”, que nunca é devolvido.

✅ Desconfie de qualquer pedido de adiantamento.
Se a pessoa ou empresa for séria, não terá problema em usar
meios de pagamento seguros e rastreáveis.
    `.trim()
  }
];
