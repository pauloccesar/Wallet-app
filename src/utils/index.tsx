export function formatDolar(valor) {
  const valorFormatado = valor.toFixed(3);
  return `$${valorFormatado}`;
}

export function formatarData(data) {
  // Extrai o dia, mês e ano da data
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Os meses começam do zero, então é necessário adicionar 1
  const ano = data.getFullYear();

  // Retorna a data formatada no formato 'dd/mm/yyyy'
  return `${dia}/${mes}/${ano}`;
}