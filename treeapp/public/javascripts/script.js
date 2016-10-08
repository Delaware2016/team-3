

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


//page function to jump to menu
function jump_menu(h){
/*    var url = location.href;               
    location.href = "#"+h;                 
    history.replaceState(null,null,url);*/
    console.log('zzzzzz');
    
    
        var top = document.getElementById(h).offsetTop; //Getting Y of target element
        window.scrollTo(0, top);                        //Go there directly or some transition
    
}

//DRAW FUNCTIONS


//DRAW TREE
//creates a single tree layer
var draw_tree = function(height){

    $singletreetrunk.style.left = ($contain_width - $tree_bod_width) + 'px';

    var $tree_top = document.createElement('div'); //creates tree layer triangle
    $tree_top.className = 'tree-top';



    $tree_top.style.left = ($contain_width - $tree_bod_width - $tree_bod_width)+ 'px';               

    $tree_top.style.bottom = height + 'px'; //height + px '100px'



    $tree_container.appendChild($tree_top);

    //console.log($tree_bod_width);

}


//OBJECTS


//Tree object  | Tree(height)
// enter height for layers of tree
var mytree = new Tree(5); 


// dom load
document.addEventListener("DOMContentLoaded", function(event) { 


    grow_container(mytree);
    
    make_tree(mytree);



    var xx = $('.tree-top').position(); // just for testing.
    console.log(xx);

    //jump_menu('#initial-jump'); //notworking
    
    window.location = "#home-menu";
});



