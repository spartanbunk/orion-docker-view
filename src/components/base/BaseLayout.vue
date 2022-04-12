<template>
    <div>
        <header> 
            <span>Header</span>
            <nav>
                <span>Nav</span>
            </nav>
        </header>
        
        <body>
            <span>Body</span>
            <employees-page>

            </employees-page>
        </body>

        <footer>
            <span>Footer</span>
        </footer>
    </div>
</template>

<script>

export default {
    //props:['pageTitle','pageDefaultBackBtn'],
    components: {
       
    }
}
</script>

<style>

header{
    height: 100px;
    background-color:#cfbda7;
    padding: 5px;
    margin:5px;

}
nav{
    height: 30px;
    background-color: burlywood;
    padding: 5px;
    margin:5px;
}
body{
    height: 600px;
    background-color:#cfbda7;
    padding: 20px;
    padding: 5px;
    margin:5px;
}
footer{
    width:100%;
    height: 100px;
    background-color: lightblue;

}

</style>
