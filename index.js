//enter items user needs to purchase by entering text and hitting "Return" or clicking the "Add item" button
// .submit(), preventDefault(),toggleClass(), and closest().
//Using this and event delegation (.on)

//declare function
function neededItems(){
    //id HTMLelement form submit box and adds jQuery method (listener)
    $("#js-shopping-list-form").submit(function(event){
            //prevent default form submission
            event.preventDefault();
          
            //assign a var to the user input
            let item = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
            
            //Append shopping-list with 'li', 'li' html elements 
            //amd item in correct place.
            $('.shopping-list').append(
             '<li>' +
              '<span class="shopping-item">' + item +
              '</span>' +
              '<div class="shopping-item-controls">' +
              '<button class="shopping-item-toggle">' +
              '<span class="button-label">check</span>' +
              '</button>' +
              '<button class="shopping-item-delete">' +
              '<span class="button-label">delete</span>' +
              '</button>' + '</div>' +
              '</li>');

            $('#shopping-list-entry').val("");
            });
           };
  
    
    
    //id HTMLelement li, listener method .on   
   $('.shopping-list').on('click','.shopping-item-delete',function(event) {
        //permanently remove the li of the event.currentTarget from the list
       $(this).closest('li').remove();
    });

    //id HTMLelement li, listen method .on
    $('.shopping-list').on('click','.shopping-item-toggle',(function(event){
        //declare var with event.currentTarget ancester
      let checkItem = $(event.currentTarget).closest('li');
       //find the shopping-item and toggle with css strikethrough
      checkItem.find('.shopping-item').toggleClass('shopping-item__checked');
    }));


//call function
neededItems();