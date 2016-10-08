

var tree_height = 5;


var $tree_container = document.getElementById('tree-container');

var $treebodylist = document.getElementsByClassName("tree-base");


var $singletreetrunk = $treebodylist[0];



var $contain_width = ($('#tree-container').width())/2;
var $tree_bod_width= $('.tree-base').width()/2;






//CLASSES

var Tree = function(height){ //Tree class with height that changes height/adds layers
    this.height = height;

}

var Fruit = function(type, id, color){
    this.type = type;
    this.id = id;
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

//draw single fruit
var draw_fruit = function(tree_base_height, tree){
    
    var $tree_fruit = document.createElement('div'); 
    $tree_fruit.className = 'tree-fruit';
    
    

    //($contain_width - $tree_bod_width - $tree_bod_width)+ 'px'; 
    //($contain_width + $tree_bod_width + $tree_bod_width)+ 'px'; 

    $tree_fruit.style.left = ($contain_width + $tree_bod_width + $tree_bod_width)+ 'px';               

    $tree_fruit.style.bottom = tree.height*100 + 'px';
        //tree_base_height + 'px'; //height + px '100px'
    
    Math.floor((Math.random() * 10) + 1);

    $tree_container.appendChild($tree_fruit);
}


//OBJECTS


//Tree object  | Tree(height)
// enter height for layers of tree
var mytree = new Tree(5); 


// dom load
document.addEventListener("DOMContentLoaded", function(event) { 


    
    
    make_tree(mytree); // make da tree
    grow_container(mytree); //expands view when tree grows
    
    draw_fruit(100, mytree);


    var xx = $('#tree-container').position(); // just for testing.
    console.log(xx);
    var yy = $('#tree-fruit').position();
    console.log(yy);
    
    

    
    
    window.location = "#home-menu";
});



