const axios=require('axios');
const cheerio=require('cheerio');

const LOGIN_URL='http://www.jiaguhome.com/login.html';
const USER_AGENT='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36';

const getKey=axios({
    method:"get",
    url:LOGIN_URL,
    headers:{
        'User-Agent':USER_AGENT
    }
}).then((response)=>{
    const $=cheerio.load(response.data);

})
axios.get('')
    .then(function(response){
        const $=cheerio.load(response.data);
        const title=$('title').text();
        const mobile=$(".item_account").val();
        const passowrd=$("input[name='password']".val());
        
        debugger;
        console.log(title);
    })
    .catch(function(error){
        console.log(error);
    });



