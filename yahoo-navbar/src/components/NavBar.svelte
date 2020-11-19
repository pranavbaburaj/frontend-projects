<div id="app">
    <div class="topnav">
        <a href=""><img alt="Yahoo logo"  src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png"></a>
        <Search></Search>
        <Icons></Icons>
      </div>
      <Menu></Menu>
</div>

<script>
    import Menu from "./Menu.svelte"; 
    import Icons from "./Icons.svelte";
    import Search from "./Search.svelte";
</script>
<style>

.topnav {
  margin-top : 10px;    
}
/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  color: black;
}


img {
    width :27%;
}

/* Style the search box inside the navigation bar */

/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
@media screen and (max-width: 600px) {
  .topnav a, .topnav input[type=text] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  
}
</style>