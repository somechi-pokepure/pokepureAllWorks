

/*var app = new Vue({


el:'#app',
data:{

message:'Hello Vue!'

}

}) */



Vue.component('game-list', {
	props:['gamename'],
  // template: '<li>{{ todo.URL }}</li>'
  //template:'<li> <a v-bind:href="'./contents_I wanna/' + gamename.URL"> {{gamename.text}} </a> </li>'



  template:'<li> <a v-bind:href="gamename.URL"> {{gamename.text}} </a> </li>'
})

/*<-- 入れたい内容 -->

例）下記id 0,の「URL:　'./contents_I wanna/I_wanna_DoOrDie1.html' },」部分における
「./contents_I wanna/」を、上の<!-- ここに入れたい -->部分に入れて、
data内に書くURLを短くさせたい。

理想↓
./contents_I wanna/ + "todo,URL" 

*/

var workGameList = new Vue({
	el: '#workGameList',
	data: {
		gameList: [

		// { id: n, text:'GameName',
		// 			URL:'URL'},

		{ id: 0, text: 'I wanna travel Do or Die',
		//URL:'./contents_I wanna/I_wanna_DoOrDie1.html' },
		URL:'/contents_I wanna/I_wanna_DoOrDie1.html' },
		//サーバー上に挙げた時、ちゃんと階層が上手く表示されるようになる（絶対パス扱い）
		//ローカルではできないので、ローカルサーバーを立てて実験する


		{ id: 1, text: 'I wanna celebrate the Second anniversary ~Dear よっしー☆彡~',
		URL:'./contents_I wanna/I_wanna_2ndAnnivYosshi.html'},

		{ id: 2, text: 'I wanna be the Blue coin mania saucer fulfill',
		URL:'./contents_I wanna/I_wanna_2ndAnnivYosshi.html' },

		{ id: 3, text:'I wanna recover the quality.',
		URL:'./contents_I wanna/I_wanna_RecoverTheQuality.html'},

		{ id: 4, text:'I wanna listen to electronic music',
		URL:'./contents_I wanna/I_wanna_ListenToElectroMusic.html'},

		{ id: 5,text:'I wanna defeat the Surumeika',
		URL:'./contents_I wanna/I_wanna_DefeatTheSurumeika.html'},

		{ id: 6, text:'I wanna perotect one life',
		URL:'./contents_I wanna/I_wanna_ProtectLife.html'},

		{ id: 7, text:'１時間制作アイワナ',
		URL:'./contents_I wanna/I_wanna_OneHour.html'},

		{ id: 8, text:'I wanna recover the existance',
		URL:'./contents_I wanna/I_wanna_RecoverTheExistance.html'},

		{ id: 9, text:'I wanna travel do or die ~Into the many world~',
		URL:'./contents_I wanna/I_wanna_DoOrDie2.html'},

		{ id: 10, text:'I wanna be the rain',
		URL:'./contents_I wanna/I_wanna_Rain.html'},

		{ id: 11, text:'I wanna cut off Ring of fates.',
		URL:'./contents_I wanna/I_wanna_RingOfFates.html'},

		{ id: 12, text:'I wanna continue Explorer',
		URL:'./contents_I wanna/I_wanna_ContinueExplorer.html'},

		{ id: 13, text:'Lament Bitterly（共同制作）旧"discord makers2 JPside"',
		URL:'URL'},

		{ id: 14, text:'I wanna beat the Fenix',
		URL:'URL'},

		{ id: 15, text:'I Wanna Kill The Medley',
		URL:'URL'},

		{ id: 16, text:'I wanna defeat the Twitter Makers',
		URL:'URL'},

		{ id: 17, text:'I wanna escape from colorless world',
		URL:'URL'}

	]}

})











