# Vue Nice Progress
This is the light weight and good looking spiral progress bar with percantage value change and animation on intitalizing and on value change. 

# Image
<img src="progress-0.png" alt="J" width="200"/>

## Project setup
```
npm install vue-nice-progress
```

## Usage
### Basic Usage
```
<template>
  <vue-progress
    :value="percent"
  >
</template>
<script>
import VueProgress from 'vue-nice-progress'

export default {
    components:{VueProgress},
    data(){
      return {
        percent:50
      };
    }
}
</script>
```
