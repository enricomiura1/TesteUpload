describe('upload teste', function() {
    beforeEach (function(){

    cy.visit('https://the-internet.herokuapp.com/upload') 
    
    })
    it ('teste foto logo', function  () {

       const fileNAme = 'google.png'
       cy.fixture('google.png').then(function(fileContent){
       cy.get('#file-upload').attachFile({fileContent,fileNAme,mineType:'google.png'})
       cy.get('#file-submit').click()
          
        })
    })
})