export default class CustomPalette {
    constructor(bpmnFactory, create, elementFactory, palette, translate) {
        this.bpmnFactory = bpmnFactory;
        this.create = create;
        this.elementFactory = elementFactory;
        this.translate = translate;
        
        palette.registerProvider(this);
    }

    getPaletteEntries(element) {
        const {
            bpmnFactory,
            create,
            elementFactory,
            translate
        } = this;

        function createTask() {
            return function(event) {
                const businessObject = bpmnFactory.create('bpmn:Task');
                businessObject['custom'] = 1
                const shape = elementFactory.createShape({
                type: 'bpmn:Task',
                    businessObject
                });
                console.log(shape) // 只在拖动或者点击时触发
                create.start(event, shape);
            }
        }

        
        function createAAA() {
            return function(event) {
                const businessObject = bpmnFactory.create('bpmn:EndEvent');
                businessObject['custom'] = 1
                const shape = elementFactory.createShape({
                type: 'bpmn:EndEvent',
                    businessObject
                });
                console.log(shape) // 只在拖动或者点击时触发
                create.start(event, shape);
            }
        }

        return {
            'create.lindaidai-task': {
                group: 'model',
                className: 'icon-custom lindaidai-task',
                // className: 'bpmn-icon-user-task',
                title: translate('创建一个类型为lindaidai-task的任务节点'),
                action: {
                    dragstart: createTask(),
                    click: createTask()
                }
            },
            'create.jmc-task': {
                group: 'model',
                className: 'icon-custom jmc-task',
                // className: 'bpmn-icon-user-task',
                title: translate('jmc-task'),
                action: {
                    dragstart: createTask(),
                    click: createTask()
                }
            },
            'create.chenkuo-task2': {
                group: 'model',
                className: 'icon-custom chenkuo-task2',
                // className: 'bpmn-icon-user-task',
                title: translate('chenkuo-task2'),
                action: {
                    dragstart: createAAA(),
                    click: createAAA()
                }
            }
        }
    }
}

CustomPalette.$inject = [
    'bpmnFactory',
    'create',
    'elementFactory',
    'palette',
    'translate'
]