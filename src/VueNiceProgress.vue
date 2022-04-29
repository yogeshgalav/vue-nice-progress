<template>
  <div class="circular">
    <div
      role="progressbar"
      :aria-valuenow="counter"
      aria-valuemin="0"
      aria-valuemax="100"
      :style="'--value:'+counter"
    />
  </div>
</template>
<style scoped>
.circular {
  padding-left: 30px;
}
@keyframes growProgressBar {
  0%, 33% { --pgPercentage: 0; }
  100% { --pgPercentage: var(--value); }
}

@property --pgPercentage {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

div[role="progressbar"] {
  --size: 10rem;
  --fg: #369;
  --bg: #def;
  --pgPercentage: var(--value);
  animation: growProgressBar 3s 1 forwards;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: 
    radial-gradient(closest-side, white 80%, transparent 0 99.9%, white 0),
    conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0)
    ;
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(var(--size) / 5);
  color: var(--fg);
}

div[role="progressbar"]::before {
  counter-reset: percentage var(--value);
  content: counter(percentage) '%';
}

/* demo */
body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

</style>
<script>
export default {
	props:{
		value:{
			type: Number,
			default:100,
		}
	},
	data(){
		return {
			counter:0,
		};
	},
	mounted(){
		setInterval(() => {
			if(this.counter === this.value ){
				clearInterval();
			}else{
				this.counter+=1;
			}
		}, 80);
	}
};
</script>