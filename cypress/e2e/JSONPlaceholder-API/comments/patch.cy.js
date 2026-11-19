
describe('Testes PATCH - Comments', () => {
  it('Deve atualizar parcialmente um comentario', () => {
    const dados = {
      name: 'Nome alterado pelo Cypress'
    }

    cy.request({
      method: 'PATCH',
      url: 'https://jsonplaceholder.typicode.com/comments/1',
      body: dados
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(1)
      expect(response.body.name).to.eq(dados.name)

      expect(response.body).to.have.property('postId')
      expect(response.body).to.have.property('email')
      expect(response.body).to.have.property('body')
    })
  })
})
