<template>
  <div id="app">
    <headers></headers>
    <sections>
    	<router-view></router-view>
    </sections>
    <footers>
    </footers>
  </div>
</template>

<script>
	import headers from '@/components/headers'
	import sections from '@/components/sections'
	import footers from '@/components/footers'
export default {
  name: 'app',
    components: {
    	headers,
    	sections,
    	footers
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
  

}
*{
	padding: 0;
	margin: 0;
	font-size: 62.5%;
}
</style>
