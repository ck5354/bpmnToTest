<template>
  <div class="containers">
    <div class="canvas" ref="canvas"></div>
    <div id="js-properties-panel" class="panel" style="margin-top: 100px;"></div>
    <ul class="buttons" style="position: absolute;bottom: 0;">
      <li>
        <a ref="saveDiagram" href="javascript:" title="保存为bpmn">保存为bpmn</a>
      </li>
      <li>
        <a ref="saveDiagram" href="javascript:" title="导入bpmn">导入bpmn</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
// 引入相关的依赖
import BpmnModeler from 'bpmn-js/lib/Modeler'
import propertiesPanelModule from 'bpmn-js-properties-panel'
// import { xmlStr } from './custom/xmlStr'
import propertiesProviderModule from './custom/ImportJS/onlyPropertiesProvider'
import customModule from './custom/ImportJS/onlyRenderer'

export default {
  name: 'Bpmn5',
  components: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  async mounted() {
    let that = this;
    await axios.get('static/diagram.bpmn').then(response => {
      that.xmlStr = "" +response.data;
    }, response => {
        console.log("error");
    });
    this.init()
  },
  data() {
    return {
      // bpmn建模器
      bpmnModeler: null,
      container: null,
      canvas: null,
      xmlStr: null
    }
  },
  // 方法集合
  methods: {
    init() {
      // 获取到属性ref为“canvas”的dom节点
      const canvas = this.$refs.canvas
      
      // 建模
      this.bpmnModeler = new BpmnModeler({
        container: canvas,
        //添加控制板
        propertiesPanel: {
          parent: '#js-properties-panel'
        },
        additionalModules: [propertiesPanelModule, propertiesProviderModule, customModule],
        // moddleExtensions: {
        //   magic: magicModdleDescriptor
        // }
      })
      this.createNewDiagram()
    },
    createNewDiagram() {
      // 将字符串转换成图显示出来
      this.bpmnModeler.importXML(this.xmlStr, err => {
        if (err) {
          // console.error(err)
        } else {
          // 这里是成功之后的回调, 可以在这里做一系列事情
          this.success()
        }
      })
    },
    success() {
      // console.log('创建成功!')
      // this.addModelerListener()
      // this.addEventBusListener()
      // console.log('创建成功!')
      this.addBpmnListener()
    },
    addBpmnListener() {
      const that = this
      // 获取a标签dom节点
      const downloadLink = this.$refs.saveDiagram
      // 给图绑定事件，当图有发生改变就会触发这个事件
      this.bpmnModeler.on('commandStack.changed', function() {
        that.saveDiagram(function(err, xml) {
          that.setEncoded(downloadLink, 'diagram.bpmn', err ? null : xml)
        })
      })
    },
    // 下载为bpmn格式,done是个函数，调用的时候传入的
    saveDiagram(done) {
      // 把传入的done再传给bpmn原型的saveXML函数调用
      this.bpmnModeler.saveXML({ format: true }, function(err, xml) {
        done(err, xml)
      })
    },
    // 当图发生改变的时候会调用这个函数，这个data就是图的xml
    setEncoded(link, name, data) {
      // 把xml转换为URI，下载要用到的
      const encodedData = encodeURIComponent(data)
      // 下载图的具体操作,改变a的属性，className令a标签可点击，href令能下载，download是下载的文件的名字
      console.log(link, name, data)
      let xmlFile = new File([data], 'test.bpmn')
      //   console.log(xmlFile)
      if (data) {
        link.className = 'active'
        link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
        link.download = name
      }
    }
  
    // addModelerListener() {
    //   // 监听 modeler
    //   // const bpmnjs = this.bpmnModeler
    //   // const that = this
    //   // // 'shape.removed', 'connect.end', 'connect.move'
    //   // const events = ['shape.added', 'element.updateLabel']
    //   // events.forEach(function(event) {
    //   //   that.bpmnModeler.on(event, e => {
    //   //     var elementRegistry = bpmnjs.get('elementRegistry')
    //   //     var shape = e.element ? elementRegistry.get(e.element.id) : e.shape
    //   //     // console.log(shape)
    //   //     if (event === 'shape.added') {
    //   //       console.log('新增了shape')
    //   //     } else if (event === 'shape.move.end') {
    //   //       console.log('移动了shape')
    //   //     } else if (event === 'shape.removed') {
    //   //       console.log('删除了shape')
    //   //     } else if (event === 'element.updateLabel') {
    //   //       console.log('element.updateLabel', e.element)
    //   //     }
    //   //   })
    //   // })
    // },
    // addEventBusListener() {
    //   // // 监听 element
    //   // let that = this
    //   // const eventBus = this.bpmnModeler.get('eventBus')
    //   // const modeling = this.bpmnModeler.get('modeling')
    //   // const elementRegistry = this.bpmnModeler.get('elementRegistry')
    //   // // console.log(Object.keys(eventBus._listeners))
    //   // // const eventTypes = ['element.click', 'element.changed']
    //   // // const eventTypes = Object.keys(eventBus._listeners)
    //   // const eventTypes = ['directEditing.activate', 'directEditing.complete']
    //   // // const eventTypes = ['interactionEvents.updateHit', 'directEditing.complete']
    //   // console.log(elementRegistry.getAll('bpmn:StartEvent'))
    //   // eventTypes.forEach(function(eventType) {
    //   //   eventBus.on(eventType, function(e) {
          
    //   //     console.log(eventType)
    //   //     if (!e || !e.element) {
    //   //       console.log('无效的e', e)
    //   //       return
    //   //     }
    //   //     if (!e || e.element.type == 'bpmn:Process') return
    //   //     if (eventType === 'element.changed') {
    //   //       // that.elementChanged(e)
    //   //     } else if (eventType === 'element.click') {
    //   //       console.log('点击了element', e)
    //   //       var shape = e.element ? elementRegistry.get(e.element.id) : e.shape
    //   //       if (shape.type === 'bpmn:StartEvent') {
    //   //         modeling.updateProperties(shape, {
    //   //           name: '我是修改后的虚线节点',
    //   //           isInterrupting: false,
    //   //           customText: '我是自定义的text属性'
    //   //         })
    //   //       }
    //   //     } else if (eventType === 'interactionEvents.updateHit') {
    //   //       console.log('interactionEvents.updateHit', e.element)
    //   //     } else if (eventType === 'directEditing.complete') {
    //   //       console.log('directEditing.complete', e.element)
    //   //     }
    //   //   })
    //   // })
    // }
  },
  // 计算属性
  computed: {}
}
</script>

<style>
.containers {
  background-color: #ffffff;
  width: 100%;
  height: calc(100vh - 52px);
}
.canvas {
  width: 100%;
  height: 100%;
}
.panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 500px;
}

.test3 {
  width: 100px;
  height: 10px;
  color: #000;
  background-color:yellow;
}

</style>


