//メモの入力、追加、削除
let memo_new = new Vue({
  el: '#memoBox',
  data: {
    seen: false,
    memo_seen: true,
    memos: [],
    addtitle: '',
    addtext: '',
    addtag: ''
  },
  methods: {
    //入力フィールド用メソッド
    input: function(){
      return this.seen = true;
    },
    closeBtn: function(){
      return this.seen = false;
    },
    //追加メモ用メソッド
    addMemo: function(){
      if( this.addtitle !== "" && this.addtext !== ""){
        let memo ={
          title: this.addtitle,
          text: this.addtext,
          tag: this.addtag
        }
        this.memos.unshift(memo);
        this.seen = false;
        this.addtitle = '';
        this.addtext = '';
        this.addtag = '';
      }else{
        alert('入力フィールドが空です');
      }
    },
    closeMemoBtn: function(index){
      this.memos.splice(index,1);
    }
  }
})
