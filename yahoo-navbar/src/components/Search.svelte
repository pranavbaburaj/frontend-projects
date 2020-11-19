<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="search-bar">
    <input type="search">
    <button type="submit"><i class="fa fa-search"></i></button>
</div>

<script></script>
<style>

.search-bar {
    float: left;
    margin-left: -280px;
}
input[type="search"] {
    float: left;
    padding: 11px;
    align-self: auto;
    margin-top: 8px;
    width : 350px;
    border : 1px solid #000000;
    transition : all 1s;
}

button {
    background-color: #0F69FF;
    width : 6em;
    margin-top : 10px;
    padding : 11px;
    border : none;
    outline : none;
}

button:focus {
    background-color: #0F69FF;

    opacity : 1;
}

input[type="search"]:focus {
    border : 1px solid #6132D2;
    outline : 0.3px solid #6132D2;
}

.fa {
    color : #ffffff;
    font-size: 20px;
}



@media screen and (max-width : 600px) {
    input[type=text] {
        border: 1px solid #ccc;
    }
}
</style>