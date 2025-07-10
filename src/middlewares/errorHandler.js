// Middleware global de tratamento de erros

export function errorHandler(err, req, res, next) {
  console.error('[Erro]:', err.message); // Loga o erro no console
  res.status(404).json({ error: err.message || 'Erro interno no servidor' }); // Responde com status 404 e a mensagem de erro
}