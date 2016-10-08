

var tree_height = 5;


var $tree_container = document.getElementById('tree-container');

var $treebodylist = document.getElementsByClassName("tree-base");


var $a = $treebodylist[0];



var $contain_width = ($('#tree-container').width())/2;
var $tree_bod_width= $('.tree-base').width()/2;


var $tree_top = document.createElement('div'); //creates tree layer triangle
$tree_top.className = 'tree-top';

$tree_container.appendChild($tree_top);

//CLASSES

var Tree = function(){
    
}


//FUNCTIONS

var make_tree = function(tree_height){
    var count = 0;
    while(count < tree_height){
        count++;
        var $tree_top = document.createElement('div'); //creates tree layer triangle
        $tree_top.className = 'tree-top';

        $tree_container.appendChild($tree_top);
    }
}


//DRAW FUNCTIONS

var draw_tree = function(){
    $a.style.left = ($contain_width - $tree_bod_width) + 'px';
    $tree_top.style.left = ($contain_width - $tree_bod_width - $tree_bod_width)+ 'px';
    $tree_top.style.bottom = '100px';
}



// dom load
document.addEventListener("DOMContentLoaded", function(event) { 
   
    //make_tree(tree_height);
    //draw_tree();
    
    $a.style.left = ($contain_width - $tree_bod_width) + 'px';
    $tree_top.style.left = ($contain_width - $tree_bod_width - $tree_bod_width)+ 'px';
    $tree_top.style.bottom = '100px';
  
   
});



