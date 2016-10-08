

var tree_height = 5;


var $tree_container = document.getElementById('tree-container');

var $treebodylist = document.getElementsByClassName("tree-base");


var $singletreetrunk = $treebodylist[0];



var $contain_width = ($('#tree-container').width())/2;
var $tree_bod_width= $('.tree-base').width()/2;


var fruit_arr = new Array();



//CLASSES

var Tree = function(height){ //Tree class with height that changes height/adds layers
    this.height = height;

}

var Fruit = function(type, id, color, left, bottom, text){
    this.type = type;
    this.id = id;
    this.color = color;
    this.left = left;
    this.bottom = bottom;
    this.text = text;
}


//FUNCTIONS


//CHANGE CONTAINER SIZE //might not need
var grow_container = function(tree){
    $('#tree-container').height(tree.height * 200); //150 is ration
    
 
}

//MAKE TREE
//loops to make each layer of tree
var make_tree = function(tree){
    var count = 0;
    while(count < tree.height){
        count++;
        
        draw_tree(count*100)
    }
}




//page function to jump to menu -- BORROWED CODE, NOT NEED, DELETE
function jump_menu(h){
/*    var url = location.href;               
    location.href = "#"+h;                 
    history.replaceState(null,null,url);*/
    console.log('zzzzzz');
    
    
        var top = document.getElementById(h).offsetTop; 
        window.scrollTo(0, top);                        
    
}

//DRAW FUNCTIONS


//draw tree
//but really just a single tree layer
var draw_tree = function(height){

    $singletreetrunk.style.left = ($contain_width - $tree_bod_width) + 'px';

    var $tree_top = document.createElement('div'); //creates tree layer triangle
    $tree_top.className = 'tree-top';



    $tree_top.style.left = ($contain_width - $tree_bod_width - $tree_bod_width - $tree_bod_width/2)+ 'px';   //maybe make better values someday...            

    $tree_top.style.bottom = height + 'px'; //height + px '100px'

    $tree_container.appendChild($tree_top);


}

//draw fruit loop
var draw_fruit_on_tree = function(fruit_list){
    for(var i = 0; i < fruit_list.length; i++){
        
        draw_fruit(fruit_list[i]);
    }
    
    
    
}

//draw single fruit 
var draw_fruit = function(fruit){
    
    var $tree_fruit = document.createElement('div'); 
    $tree_fruit.className = 'tree-fruit';
    
    var $modal = $('.modal');
    
    //$('.tree-fruit').attr('data-toggle', 'modal');
    //$('.tree-fruit').attr('data-target', '#myModal');
    
    
    $tree_fruit.addEventListener("click", function(){
        //alert('s');
        $modal.modal('show');
        $('#offernum').html(fruit.type + ' ' + fruit.id);
        $('.modal-body').html(fruit.text);
        console.log(fruit.type);
    });
    
   

    $tree_fruit.style.left = fruit.left + 'px';               

    $tree_fruit.style.bottom =  fruit.bottom + 'px';
        
 
    $tree_fruit.style.color = fruit.color;
    

    $tree_container.appendChild($tree_fruit);
}


//create fruit list. w hy did i do this

var create_fruit_list = function(number_fruit, tree, tree_base_height){
    var tree_left_bound = ($contain_width - $tree_bod_width - $tree_bod_width); 
    var tree_right_bound = ($contain_width -$tree_bod_width); // for leeway because dont want to effort
    var tree_top_bound = tree.height*100;
    var tree_bot_bound = tree_base_height; //height + px '100px'
    
    
    
    for(i=0; i<number_fruit; i++){
        
        
        var left = Math.floor((Math.random() * tree_right_bound) + tree_left_bound);
        var bot = Math.floor((Math.random() * tree_top_bound) + tree_bot_bound);
        
        var id = Math.floor((Math.random() * 10) + 1);
        var rchan_rand = Math.floor((Math.random() * 255) + 0);
        var gchan_rand = Math.floor((Math.random() * 255) + 0);
        var bchan_rand = Math.floor((Math.random() * 255) + 0);
        var color = "rgb("+ rchan_rand +','+ gchan_rand +',' + bchan_rand + ')';
        
        
        var f = new Fruit('coupon',id, color, left, bot, "10% off your order at BurgerTown");
        
        fruit_arr.push(f);
        
        
    }
   
    
          
    
}


//OBJECTS


//Tree object  | Tree(height)
// enter height for layers of tree
var mytree = new Tree(5); 




// dom load
document.addEventListener("DOMContentLoaded", function(event) { 


    
    
    make_tree(mytree); // make da tree
    grow_container(mytree); //expands view when tree grows
    
    //draw_fruit(100, mytree);
    create_fruit_list(10, mytree, 100);
    
    var arrf = new Array(new Fruit('coupon', 5, 'rgb(50,50,50)', 200, 500, 'f')); // test array
    
    draw_fruit_on_tree(fruit_arr);
   


    var xx = $('#tree-container').position(); // just for testing.
    //console.log(xx);
    var yy = $('#tree-fruit').position();
    //console.log(yy);
    
    //$('#offernum').html('cat');

    
    
    window.location = "#home-menu";
});



