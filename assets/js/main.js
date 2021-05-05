

const app = new Vue({
  el:'#app',
  data: {
    counterPhoto: 0,
    photos:[
      'assets/img/image1.jpg',
      'assets/img/image2.jpg',
      'assets/img/image3.jpg',
      'assets/img/image4.jpg'
    ]
  },
  methods:{

    prevImage(){
      this.counterPhoto--;
      if(this.counterPhoto < 0){
        this.counterPhoto = this.photos.length -1;
      }
    },

    nextImage(){
      this.counterPhoto++;
      if(this.counterPhoto >= this.photos.length){
        this.counterPhoto = 0;
      }
    }

  }



});
console.log('ciao');