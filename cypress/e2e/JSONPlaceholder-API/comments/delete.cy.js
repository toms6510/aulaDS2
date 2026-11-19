
describe('Testes DELETE - Comments', () => {
  it('Deve excluir um comentario', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/comments/1'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.deep.eq({})
    })
  })
})
