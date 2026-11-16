export const lessons = [
  { id: 'pix', title: 'Golpes com Pix', icon: 'swap-horizontal', color: '#16836F', background: '#E7F7F1', summary: 'Confira antes de transferir.', intro: 'Alguém pode se passar por um familiar ou funcionário do banco para pedir dinheiro. A pressa é um sinal de alerta.', tips: ['Confirme pedidos de dinheiro ligando para um número que você já conhece.', 'Confira o nome do recebedor e o valor antes de confirmar.', 'Nunca transfira para uma “conta segura” indicada por telefone.'] },
  { id: 'boleto', title: 'Boletos falsos', icon: 'document-text', color: '#AD7423', background: '#FFF4E3', summary: 'Nem toda cobrança é verdadeira.', intro: 'Um boleto falso pode parecer igual ao original. Confira os dados exibidos pelo banco antes de pagar.', tips: ['Busque a cobrança no aplicativo ou site oficial da empresa.', 'Confira beneficiário, documento e valor na tela de pagamento.', 'Se houver diferença, fale com a empresa por um contato oficial.'] },
  { id: 'whatsapp', title: 'Golpes no WhatsApp', icon: 'chatbubbles', color: '#269268', background: '#E9F7EF', summary: 'Proteja sua conta e suas conversas.', intro: 'Criminosos podem usar a foto de alguém conhecido ou tentar tomar sua conta pedindo um código.', tips: ['Nunca compartilhe códigos recebidos por SMS.', 'Ative a confirmação em duas etapas.', 'Confirme pedidos de dinheiro por outro canal conhecido.'] },
  { id: 'lojas', title: 'Lojas falsas', icon: 'cart', color: '#7860BA', background: '#F1EDFB', summary: 'Compre com mais tranquilidade.', intro: 'Uma oferta muito barata pode levar a uma loja falsa. Aparência bonita não basta para confiar.', tips: ['Desconfie de preços muito abaixo do mercado.', 'Confira o endereço do site e pesquise a empresa.', 'Na dúvida sobre o recebedor, não conclua a compra.'] },
];

export const quizQuestion = {
  sender: 'Número desconhecido',
  message: 'Oi, mãe! Troquei de número. Preciso pagar uma conta agora. Faz um Pix de R$ 850 para mim?',
  correctAnswer: 'scam',
  explanation: 'O número novo, a urgência e o pedido de dinheiro são sinais de golpe. Ligue para o número antigo antes de transferir.',
};
