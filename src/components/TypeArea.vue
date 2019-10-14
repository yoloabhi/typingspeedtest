<template>
  <div class="hello">
    <v-layout justify-center>
      <h1>Speed Test</h1>
      {{this.myResolvedValue}}
    </v-layout>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs2>
          <h1 style="font-size:60px;">{{this.currentspeed}}</h1>
          <span style="font-size:14px;">WORDS&nbsp;/&nbsp;MIN</span>
        </v-flex>
        <v-flex xs2 offset-xs3>
          <h1 style="font-size:60px;">{{this.charspermin}}</h1>
          <span style="font-size:14px;">CHARS&nbsp;/&nbsp;MIN</span>
        </v-flex>
        <v-flex xs2 offset-xs3>
          <h1 style="font-size:60px;">{{this.accuracy}}</h1>
          <span style="font-size:14px;">%&nbsp;ACCURACY</span>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs2>
        </v-flex>
        <v-flex xs2 offset-xs3>
          <h1 style="font-size:60px;" id="demo" >{{this.timer}}</h1>
          <v-text-field
            v-model="timer"
            disabled
          ></v-text-field>
          <h1 style="font-size:60px;">{{this.timer}}</h1>
          <span style="font-size:14px;">SEC</span>
        </v-flex>
        <v-flex xs2 offset-xs3>
        </v-flex>
      </v-layout>
    </v-container>
    <div style="width:800px;">
      <v-layout row wrap >
        <v-flex xs5>
          <v-text-field
            v-model="cw"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs2>
          <v-text-field
            v-model="currentword"
            @keyup="keymonitor"
          ></v-text-field>
        </v-flex>
        <v-flex xs5>
          <v-text-field
            v-model="words"
            disabled
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap >
        <v-flex xs6 offset-xs3>
          <v-text-field
            v-model="ww"
            disabled
            style="text-decoration: line-through;color: aliceblue;text-decoration-skip: spaces;"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TypeArea',
  data () {
    return {
      currentspeed: 0,
      currentword: '',
      charspermin: 0,
      accuracy: 100,
      wordlist: ['The', 'one', 'that', 'is', 'the', 'most', 'comfortable.', 'The', 'more', 'you', 'type', 'the', 'faster', 'you', 'will', 'get.', 'And', 'to', 'type', 'a', 'lot, ', 'you', 'can’t', 'feel', 'uncomfortable.', 'The', 'small', 'bumps', 'on', 'the', 'F', 'and', 'J', 'keys', 'will', 'help', 'your', 'fingers', 'locate', 'the', 'correct', 'position', 'without', 'looking.', 'This', 'setup', 'should', 'give', 'you', 'full', 'range', 'of', 'motion.', 'There', 'are', 'a', 'few', 'alternative', 'layouts', 'that', 'propose', 'a', 'more', 'ergonomic', 'approach', 'to', 'typing.', 'You', 'could', 'also', 'take', 'the', 'big', 'leap', 'and', 'try', 'out', 'the', 'Dvorak', 'keyboard', 'but', 'that’s', 'a', 'whole', 'other', 'story.'],
      correctwordlist: [],
      wrongwordlist: [],
      index: 0,
      numberofwrongwords: 0,
      timer: 60,
      timerstarted: false
    }
  },
  asyncComputed: {
    myResolvedValue () {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve('thir'), 1000)
      })
    }
  },
  computed: {
    time: function () {
      return 0
    },
    words: function () {
      var w = ''
      for (let x in this.wordlist) {
        w = w + ' ' + this.wordlist[x]
      }
      return w
    },
    ww: function () {
      var w = ''
      for (let x in this.wrongwordlist) {
        w = w + ' ' + this.wrongwordlist[x]
      }
      return w
    },
    cw: function () {
      var w = ''
      for (let x in this.correctwordlist) {
        w = w + ' ' + this.correctwordlist[x]
      }
      return w + ' '
    },
    returntime: function () {
      return (this.setTimer().x)
    }
  },
  methods: {
    keymonitor: function (event) {
      if (this.timerstarted === false && this.currentword.length !== 0) {
        this.timerstarted = true
        this.setTimer()
      }
      if (event.key === ' ') {
        var d = this.wordlist.shift()
        this.wordcheck(d)
      }
    },
    wordcheck: function (d) {
      console.log(d)
      if (this.currentword.trim() === d) {
        this.checklength()
        this.correctwordlist.push(d)
        console.log(this.correctwordlist)
      } else {
        this.wrongwordlist.push(d)
      }
      this.clearcw()
    },
    clearcw: function () {
      this.currentword = ''
    },
    checklength: function () {
      if (this.correctwordlist.length > 6) {
        this.correctwordlist.shift()
      }
    },
    setTimer: function () {
      console.log(this.timer)
      var d = this.timer
      var e = function () {
        // console.log(this.timer)
        console.log('BVBV')
        console.log(d)
      }
      setInterval(function () {
        // var x = setInterval(function (event) {
        // var d = this.timer
        console.log(e())
      }, 1000)
    },
    setTimer2: function () {
      var x
      var seconds = 60
      x = setInterval(function () {
        seconds--
        document.getElementById('demo').innerText = '' + seconds
        // If the count down is finished, write some text
        if (seconds === 0) {
          clearInterval(x)
          document.getElementById('demo').innerText = 0
        }
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
