getcomments() ;
function getcomments ( ) {

$.get("/comments", function(data){

  if (data){
    console.log("nodata recieved");
  }
console.log("recieved data: ");
for (var i =0;i<data.length; i++) {
  console.log(data[i].name );
}

  showcomments(data);
} );

}

function showcomments (comments){

  var commentsSection=document.getElementById("section");
  for (var i=0; i<comments.length; i++){
section.className ="suggestion";
var heading =document.createElement("h3")
var heading.InnerHTML=comments[i].name;
var comment =document.createElement ("p");
comment.InnerHTML=comments[i].comment;
section.appendChild(heading);
section.appendChild(comment);
commentsSection.appendChild(section);

  }

}
