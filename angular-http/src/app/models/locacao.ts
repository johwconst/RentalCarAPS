export interface Locacao {
    id: number;
    status: string;
    veiculo: string;
    seguradora: string;
    cliente: string;
    tipo: string;
    data_de_retirada: string;
    local_de_retira: string;
    data_de_devolucao: string;
    valor_aluguel: string;
    cupom: string;
    numero_contrato: string;
    observacao: string;
}
