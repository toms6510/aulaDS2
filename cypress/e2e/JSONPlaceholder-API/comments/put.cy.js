
describe('JSONPlaceholder API - Teste PUT de comments', () => {
  it('Atualizar um comment completo', () => {
    const dados = {
      postId: 1,
      id: 1,
      name: 'Comentario atualizado',
      email: 'teste@email.com',
      body: 'Texto atualizado pelo Cypress'
    }

    cy.request('PUT', 'https://jsonplaceholder.typicode.com/comments/1', dados)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.include(dados)
      })
  })
})

