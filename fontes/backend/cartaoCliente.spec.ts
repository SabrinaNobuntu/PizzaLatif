import { CartaoCliente } from '../backend/src/domain/entities/cartaoCliente.model';

describe('CartaoCliente Model', () => {
  it('deve criar instância com cpfcnpj válido', () => {
    const input = {
      id: 1,
      numeroCartao: 1234567890123456,
      nomeImpresso: 'JOAO DA SILVA',
      dataValidade: '12/2030',
      cvv: 123,
      pedidoCartao: 'pedido123',
      cpfcnpj: '12345678909', // <- cpf válido no mock
      tipoPagamento: { id: 'pix', nome: 'PIX' },
      createdAt: '2025-09-26T12:00:00Z',
    };

    const cartao = CartaoCliente.fromJson(input);

    // verifica se o objeto foi criado e o cpfcnpj está correto
    expect(cartao).toBeInstanceOf(CartaoCliente);
    expect(cartao.cpfcnpj).toBe(input.cpfcnpj);
    expect(cartao.nomeImpresso).toBe('JOAO DA SILVA');
  });

  it('deve permitir instância sem cpfcnpj', () => {
    const input = {
      id: 2,
      numeroCartao: 9876543210987654,
      nomeImpresso: 'MARIA OLIVEIRA',
      dataValidade: '05/2028',
      cvv: 456,
      pedidoCartao: 'pedido456',
      tipoPagamento: { id: 1, nome: 'Cartão de Crédito' },
      createdAt: '2025-09-26T12:30:00Z',
    };

    const cartao = new CartaoCliente(input);

    expect(cartao).toBeInstanceOf(CartaoCliente);
    expect(cartao.cpfcnpj).toBeUndefined(); // não informado
  });
});
