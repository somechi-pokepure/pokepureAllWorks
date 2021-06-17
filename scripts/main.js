

Vue.component('game-list', {
	props:['gamename'],
	template:'<li> <a v-bind:href=" `/contents_Iwanna/${gamename.URL}` "> {{gamename.text}} </a> </li>'
	//文字列組み込み：`/contents_I wanna${gamename.URL}`
	//参考URL : https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals

	//直接、相対パスを指定した場合の書き方。
  	//template:'<li> <a v-bind:href="gamename.URL"> {{gamename.text}} </a> </li>'
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

		{ id: 0, text: 'Save_Fox（仮題）',

		URL:'SaveFox.html' },

			{id: 0, text: 'I wanna travel Do or Die',
			//直接相対パスを指定した場合の書き方。階層が繰り返されてしまうので、あまり良いとは言えない。
			//URL:'./contents_I wanna/I_wanna_DoOrDie1.html' },

		URL:'Iwanna_DoOrDie1.html' },
			//サーバー上に挙げた時、ちゃんと階層が上手く表示されるようになる（絶対パス扱い）
			//ローカルではできないので、ローカルサーバーを立てて実験する


		{ id: 1, text: 'I wanna celebrate the Second anniversary ~Dear よっしー☆彡~',
		URL:'Iwanna_2ndAnnivYosshi.html'},

		{ id: 2, text: 'I wanna be the Blue coin mania saucer fulfill',
		URL:'Iwanna_BlueCoinMania.html' },

		{ id: 3, text:'I wanna recover the quality.',
		URL:'Iwanna_RecoverTheQuality.html'},

		{ id: 4, text:'I wanna listen to electronic music',
		URL:'Iwanna_ListenToElectroMusic.html'},

		{ id: 5,text:'I wanna defeat the Surumeika',
		URL:'Iwanna_DefeatTheSurumeika.html'},

		{ id: 6, text:'I wanna protect one life',
		URL:'Iwanna_ProtectLife.html'},

		{ id: 7, text:'１時間制作アイワナ',
		URL:'Iwanna_OneHour.html'},

		{ id: 8, text:'I wanna recover the existance',
		URL:'Iwanna_RecoverTheExistance.html'},

		{ id: 9, text:'I wanna travel do or die ~Into the many world~',
		URL:'Iwanna_DoOrDie2.html'},

		{ id: 10, text:'I wanna be the rain',
		URL:'Iwanna_Rain.html'},

		{ id: 11, text:'I wanna cut off Ring of fates.',
		URL:'Iwanna_RingOfFates.html'},

		{ id: 12, text:'I wanna continue Explorer',
		URL:'Iwanna_ContinueExplorer.html'},

		{ id: 13, text:'Lament Bitterly（共同制作）旧"discord makers2 JPside"',
		URL:'LamentBitterly.html'}
		// ,

		// { id: 14, text:'I wanna beat the Fenix（共同制作）',
		// URL:'URL'},

		// { id: 15, text:'I Wanna Kill The Medley（共同制作）',
		// URL:'URL'},

		// { id: 16, text:'I wanna defeat the Twitter Makers（共同制作）',
		// URL:'URL'},

		// { id: 17, text:'I wanna escape from colorless world',
		// URL:'URL'}

		]}

	})

Vue.component('story-list', {
	props:['storyname'],
	template:'<li> <a v-bind:href=" `/contents_Story/${storyname.URL}` "> {{storyname.text}} </a> </li>'
})

var workStoryList = new Vue({
	el: '#workStoryList',
	data: {
		storyList: [

		// { id: n, text:'GameName',
		// 			URL:'URL'},

		{ id: 0, text: '糸に囚われた少女たち_1',

		URL:'Story_mushi1.html' },
		{ id: 1, text: 'シナリオライティング '+'「カワっているせかい」',


		URL:'Story_Shinarai.html' }

	]}

	})


