<template>
  <div style="width:100%;height:100%">
    <vue-echarts :options="options"></vue-echarts>
  </div>
</template>

<script type="text/ecmascript-6">
import echarts from 'echarts'
import cloneDeep from 'lodash/cloneDeep'
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'JiangsuMapWarning',

  setup() {
    const options = ref({})
    let timer = null

    const update = () => {
      fetch('http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json')
        .then(res => res.json())
        .then(data => {
          const center = []
          data.features.forEach(item => {
            if (item.properties) {
              center.push({
                key: item.properties.name,
                value: item.properties.center
              })
            }
          })

          echarts.registerMap('jiangsu', data)
          options.value = {
            visualMap: {
              show: true, // 左下角标识展示
              max: 100,
              seriesIndex: [0],
              // 色值范围
              inRange: {
                color: ['#a5dcf4', '#006edd']
              }
            },
            geo: [{
              map: 'jiangsu',
              zoom: 1,
              roam: false, // 启用鼠标滚动缩放
              scaleLimit: {
                min: 0,
                max: 3
              },
              itemStyle: {
                areaColor: '#013c62',
                shadowColor: '#013c62',
                shadowBlur: 20,
                shadowOffsetX: -5,
                shadowOffsetY: 15
              }
            }],
            series: [
              {
                type: 'map',
                mapType: 'jiangsu', // 将数据和地图关联
                zoom: 1,
                roam: true,
                label: {
                  show: true,
                  color: '#fff',
                  emphasis: {
                    color: '#fff',
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: '#2989b9',
                    borderWidth: 1,
                    areaColor: '#12235c'
                  },
                  emphasis: {
                    areaColor: '#fa8c16',
                    borderWidth: 0
                  }
                },
                data: center.map(centerItem => {
                  return {
                    name: centerItem.key,
                    value: Math.random() * 100
                  }
                })
              },
              {
                type: 'effectScatter',
                data: [],
                coordinateSystem: 'geo',
                itemStyle: {
                  color: '#feae21'
                },
                label: {
                  normal: {
                    show: true,
                    position: 'top',
                    formatter: function(params) {
                      return `{title|${params.data.city}}\n{content|发生xx事件}`
                    },
                    backgroundColor: 'rgba(254,174,33,.8)',
                    padding: [0, 0],
                    borderRadius: 3,
                    lineHeight: 32,
                    color: '#f7fafb',
                    rich: {
                      title: {
                        padding: [0, 10, 10, 10],
                        color: '#fff'
                      },
                      content: {
                        padding: [10, 10, 0, 10],
                        color: '#fff'
                      }
                    }
                  },
                  emphasis: {
                    show: true
                  }
                }
              },
              {
                type: 'effectScatter',
                data: [],
                coordinateSystem: 'geo',
                itemStyle: {
                  color: '#e93f42'
                },
                label: {
                  normal: {
                    show: true,
                    position: 'top',
                    formatter: function(params) {
                      return `{title|${params.data.city}}\n{content|发生xx事件}`
                    },
                    backgroundColor: 'rgba(233,63,66,.9)',
                    padding: [0, 0],
                    borderRadius: 3,
                    lineHeight: 32,
                    color: '#fff',
                    rich: {
                      title: {
                        padding: [0, 10, 10, 10],
                        color: '#fff'
                      },
                      content: {
                        padding: [10, 10, 0, 10],
                        color: '#fff'
                      }
                    }
                  },
                  emphasis: {
                    show: true
                  }
                }
              },
              {
                type: 'effectScatter',
                data: [],
                coordinateSystem: 'geo',
                itemStyle: {
                  color: '#08baec'
                },
                label: {
                  normal: {
                    show: true,
                    position: 'top',
                    formatter: function(params) {
                      return `{title|${params.data.city}}\n{content|发生xx事件}`
                    },
                    backgroundColor: 'rgba(8,186,236,.9)',
                    padding: [0, 0],
                    borderRadius: 3,
                    lineHeight: 32,
                    color: '#fff',
                    rich: {
                      title: {
                        padding: [0, 10, 10, 10],
                        color: '#fff'
                      },
                      content: {
                        padding: [10, 10, 0, 10],
                        color: '#fff'
                      }
                    }
                  },
                  emphasis: {
                    show: true
                  }
                }
              }
            ]
          }

          // 随机展示时间
          timer = setInterval(() => {
            const _options = cloneDeep(options.value)
            console.log('timer -> _options', _options)
            // 初始化数据
            for (let i = 1; i < 4; i++) {
              _options.series[i].data = []
            }
            // 生成城市随机数
            const cityLength = center.length
            const cityIndex = Math.floor(Math.random() * cityLength)
            const eventIndex = Math.floor(Math.random() * 3) + 1
            _options.series[eventIndex].data = [{
              city: center[cityIndex].key,
              value: center[cityIndex].value
            }]
            options.value = _options
          }, 2000)
        })
    }

    onMounted(() => {
      update()
    })

    onUnmounted(() => {
      timer && clearInterval(timer)
    })

    return {
      options
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
