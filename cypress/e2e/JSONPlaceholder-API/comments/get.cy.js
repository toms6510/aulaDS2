
describe('Testes GET - Comments', () => {
  it('Deve listar todos os comentarios', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.length(500)

        const comment = response.body[0]

        expect(comment.postId).to.be.a('number')
        expect(comment.id).to.be.a('number')
        expect(comment.name).to.be.a('string')
        expect(comment.email).to.be.a('string')
        expect(comment.body).to.be.a('string')
      })
  })

  it('Deve buscar um comentario pelo ID', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/comments/1')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(1)
        expect(response.body.postId).to.be.a('number')
        expect(response.body.name).to.be.a('string')
        expect(response.body.email).to.be.a('string')
        expect(response.body.body).to.be.a('string')
      })
  })
})
