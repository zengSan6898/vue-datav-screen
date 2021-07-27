<template>
  <div class="rotating-earch">
    <vue-echarts :options="options"></vue-echarts>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref, onMounted } from 'vue'
import 'echarts-gl'

const ROOT_PATH = './'
export default {
  name: 'RotatingEarch',

  setup() {
    const options = ref({})

    const update = () => {
      options.value = {
        globe: {
          // 地球材质贴图
          baseTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`,
          // 高度纹理
          heightTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`,
          // 地球顶点位置，可以是地球看起来更立体
          displacementScale: 0.04,
          // 背景贴图
          environment: `${ROOT_PATH}assets/star-bg.jpg`,
          // 着色效果
          shading: 'realistic',
          // 真实感材质
          realisticMaterial: {
            roughness: 0.5
          },
          // 处理特效
          postEffect: {
            enable: true
          },
          light: {
            // 光源设置
            main: {
              // 光照强度
              intensity: 5,
              // 光照阴影
              shadow: true
            },
            // 全局环境光
            ambient: {
              intensity: 1
            }
          }
        }
      }
    }

    onMounted(() => {
      update()
    })

    return {
      options
    }
  }
}
</script>

<style lang="scss" scoped>
.rotating-earch {
  height: 100%;
}
</style>
