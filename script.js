document.addEventListener("DOMContentLoaded", function() {



    //POP-UP 
    document.querySelectorAll(".box").forEach( box => {
      
        box.addEventListener("click", function(){
            document.querySelector(".popup_cart").style.display = "flex";
        }) 
    });

    document.querySelector(".pop-cross").addEventListener("click", function(){
            document.querySelector(".popup_cart").style.display = "none";
        });


    //CART_ICON_ADD
    // var cartNumber = Number(document.querySelector(".cart-product").innerText);

    //     document.querySelector(".cart-click").addEventListener("click", function(){
    //     cartNumber++;
    //     document.querySelector(".cart-product").innerText = cartNumber;
        
    //     }) ;

        var cartNumber = Number(localStorage.getItem("cartN")) || 0;
        document.querySelector(".cart-product").innerText = cartNumber ;
        
         document.querySelector(".cart-click").addEventListener("click", function(){
        cartNumber++;

        document.querySelector(".cart-product").innerText = cartNumber;
        localStorage.setItem("cartN",cartNumber);
        
        })





        document.querySelector('.search-input').addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            const boxes = document.querySelectorAll('.box'); // Get all the box divs
        
            boxes.forEach(box => {
                const title = box.querySelector('.box-title').textContent.toLowerCase();
                
                // Check if the title includes the query text
                if (title.includes(query)) {
                    box.style.display = 'block';  // Show the box
                } else {
                    box.style.display = 'none';   // Hide the box
                }
            });
        });
        

    




            // document.addEventListener("DOMContentLoaded", function() {
            //     const popupButton = document.getElementById("popup_button");
            //     const popupCart = document.querySelector(".popup_cart");
        
            //     popupButton.addEventListener("click", function() {
            //         popupCart.style.display = "flex"; // Remove the "hidden" class to display the popup
            //     });
        
            // });
            
        











});