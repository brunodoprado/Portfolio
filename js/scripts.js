document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    });
});




/// ; Busca o elemento com a classe `box`
var box = document.querySelector('.main_nav'),
/// ; Busca os elementos quem tem a tag `A` que estão dentro do elemento `box`
    meusLinks = box.querySelectorAll('A');
    
/// ; Para cada `A` adiciona o evento de onclick
meusLinks.forEach(function( a ){ 
   a.addEventListener('click',onCliqueiNoLink);
});



/// ; Evento de onclick
function onCliqueiNoLink(){
  
  /// ; `this` dentro dessa função é a tag `A` que foi clicada.
  console.log( this , this.parentNode );

  /// ; Pega o 'pai' do link clicado, ou seja, o elemento de classe `box`
  this.parentNode
  /// ;  busca por todos os elementos de tag `A` dentro dele
      .querySelectorAll( 'A' ) 
  /// ;  remove a classe `active` desses `A`
      .forEach( function( a ){
         a.classList.remove('active');
      });
  
  /// ; adiciona classe `active` no link clicado
  this.classList.add('active');
}