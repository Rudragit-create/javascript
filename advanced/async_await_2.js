function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post data fetched...")
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Comment data fetched...")
        }, 3000);
    })
}

async function getBlogData(){
    try {
        console.log("Fetching blog data.")
        // const blogData = await fetchPostData()
        // const CommentData = await fetchCommentData()

        const [postData,commentData] = await Promise.all([fetchPostData(),fetchCommentData()]) // takes arrays as parameter -> takes exact same time as earlier code 

        console.log(blogData)
        console.log(CommentData)
        console.log('fetch complete..')
    } catch (error) {
        console.log("Error fetching blog data")
    }
}
// Handle the error first

getBlogData()