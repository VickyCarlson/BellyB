// sample to print hello to console.
// d3.json("samples.json").then(function(data){
//     console.log("hello");
// });

//parse samples.json file
d3.json("samples.json").then(function(data){
    console.log(data);
});
