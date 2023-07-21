let blog = [

    { postName: "BLOG 1", pId: 1 },
    { postName: "BLOG 2", pId: 2 },
    { postName: "BLOG 3", pId: 3 },
    { postName: "BLOG 4", pId: 4 },
    { postName: "BLOG 5", pId: 5, }

]

const listPost = () => blog.map((blog) => {
    console.log(blog.postName)
})

const addPost=(newPost)=>{
    return new Promise((resolve,reject)=>{
        blog.push(newPost)
        resolve("Post Eklendi")
        reject("Post Eklenemedi")
    })
  
    
}
async function blogControl(post){
    try{
        await addPost(post);
        listPost();
    }
    catch(err){

        console.log(err)
    }
}
blogControl({postName:"BLOG 6",pId:6});