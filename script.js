

var tree_height = 5;


var $tree_container = document.getElementById('tree-container');

var $treebodylist = document.getElementsByClassName("tree-base");


var $singletreetrunk = $treebodylist[0];



var $contain_width = ($('#tree-container').width())/2;
var $tree_bod_width= $('.tree-base').width()/2;






//CLASSES

var Tree = function(height){
    this.height = height;
   
}


//FUNCTIONS

var make_tree = function(tree){
    var count = 0;
    while(count < tree.height){
        count++;
        console.log('meow');
        draw_tree(count*100)
    }
}


//DRAW FUNCTIONS

var draw_tree = function(height){
    
    $singletreetrunk.style.left = ($contain_width - $tree_bod_width) + 'px';
    
    var $tree_top = document.createElement('div'); //creates tree layer triangle
    $tree_top.className = 'tree-top';
  
  
    
    $tree_top.style.left = ($contain_width - $tree_bod_width - $tree_bod_width)+ 'px';               
    
    $tree_top.style.bottom = height + 'px'; //height + px '100px'
    
    
    //test tree
    
    
/*    var $tree_top2 = document.createElement('div'); //creates tree layer triangle
    $tree_top2.className = 'tree-top';



    $tree_top2.style.left = ($contain_width - $tree_bod_width - $tree_bod_width)+ 'px';               

    $tree_top2.style.bottom = '200px';
    
    $tree_container.appendChild($tree_top2);*/
    
    
    
    
  

    $tree_container.appendChild($tree_top);
    
    //console.log($tree_bod_width);
    //console.log()
}


//object

var mytree = new Tree(5);


// dom load
document.addEventListener("DOMContentLoaded", function(event) { 
   
    //make_tree(tree_height);
//    draw_tree(100);
//    draw_tree(200);
    
    make_tree(mytree);
    
/*    $singletreetrunk.style.left = ($contain_width - $tree_bod_width) + 'px';
    $tree_top.style.left = ($contain_width - $tree_bod_width - $tree_bod_width)+ 'px';
    $tree_top.style.bottom = '100px';*/
    
    var xx = $('.tree-top').position();
    console.log(xx);
  
   
});



