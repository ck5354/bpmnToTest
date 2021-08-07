import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
    is
} from 'bpmn-js/lib/util/ModelUtil';

var getBusinessObject = require('bpmn-js/lib/util/ModelUtil').getBusinessObject;
var cmdHelper = require('bpmn-js-properties-panel/lib/helper/CmdHelper');

export default function(group, element) {

    // Only return an entry, if the currently selected
    // element is a start event.
    

    

    //-----------------结束标签逻辑--------------------------begin  

    if (is(element, 'bpmn:EndEvent')) {
        
        group.entries.push(entryFactory.textField({
            id: 'name',
            // description: 'Apply a black magic spell',
            label: '名称',
            modelProperty: 'name',
            cssClasses: "test222",
            get: function(element) {
                return {'name':getBusinessObject(element).name};
            },
            set: function(element, properties) {
                getBusinessObject(element).name = properties['name'];
                return cmdHelper.updateProperties(element, properties);
            }
        }));
    }


    //-----------------开始标签逻辑--------------------------begin  
    if (is(element, 'bpmn:StartEvent')) {
        
        group.entries.push(entryFactory.textField({
            id: 'name',
            // description: 'Apply a black magic spell',
            label: '名称',
            modelProperty: 'name',
            cssClasses: "test222",
            get: function(element) {
                return {'name':getBusinessObject(element).name};
            },
            set: function(element, properties) {
                getBusinessObject(element).name = properties['name'];
                return cmdHelper.updateProperties(element, properties);
            }
        }));

        group.entries.push(entryFactory.textField({
            id: 'processMapName',
            // description: 'Apply a black magic spell',
            label: '流程图名称',
            modelProperty: 'processMapName',
            cssClasses: "test222",
            get: function(element) {
                return {'processMapName':getBusinessObject(element).processMapName};
            },
            set: function(element, properties) {
                getBusinessObject(element).processMapName = properties['processMapName'];
                return cmdHelper.updateProperties(element, properties);
            }
        }));
        group.entries.push(entryFactory.textField({
            id: 'featureTag',
            // description: 'Apply a black magic spell',
            label: 'feature标签',
            modelProperty: 'featureTag',
            cssClasses: "test222",
            get: function(element) {
                return {'featureTag':getBusinessObject(element).featureTag};
            },
            set: function(element, properties) {
                getBusinessObject(element).featureTag = properties['featureTag'];
                return cmdHelper.updateProperties(element, properties);
            }
        }));
    }
    //-----------------开始标签逻辑--------------------------end
    
    //-----------------内容标签逻辑--------------------------begin
    
    if (is(element, 'bpmn:Task')) {

        group.entries.push(entryFactory.textField({
            id: 'name',
            // description: 'Apply a black magic spell',
            label: '名称',
            modelProperty: 'name',
            cssClasses: "test222",
            get: function(element) {
                return {'name':getBusinessObject(element).name};
            },
            set: function(element, properties) {
                getBusinessObject(element).name = properties['name'];
                return cmdHelper.updateProperties(element, properties);
            }
        }));

        group.entries.push(entryFactory.textField({
            id: 'apiSearch',
            // description: 'Apply a black magic spell',
            label: 'apiSearch',
            modelProperty: 'apiSearch',
            cssClasses: "test222",
            get: function(element) {
                return {'apiSearch':getBusinessObject(element).apiSearch};
            },
            set: function(element, properties) {
                getBusinessObject(element).apiSearch = properties['apiSearch'];
                return cmdHelper.updateProperties(element, properties);
            }
        }));
        group.entries.push(entryFactory.textField({
            id: 'caseName',
            // description: 'Apply a black magic spell',
            label: 'caseName',
            modelProperty: 'caseName',
            cssClasses: "test222",
            get: function(element) {
                return {'caseName':getBusinessObject(element).caseName};
            },
            set: function(element, properties) {
                getBusinessObject(element).caseName = properties['caseName'];
                return cmdHelper.updateProperties(element, properties);
            }
        }));

        group.entries.push(entryFactory.textBox({
            id: 'urlChange',
            label: 'URL替换',
            modelProperty: 'urlChange',
            cssClasses: "test222",
            get: function(element) {
                return {'urlChange':getBusinessObject(element).urlChange};
            },
            set: function(element, properties) {
                getBusinessObject(element).urlChange = properties['urlChange'];
                return cmdHelper.updateProperties(element, properties);
            }
        }));

        group.entries.push(entryFactory.textBox({
            id: 'parmesChange',
            label: '参数替换',
            modelProperty: 'parmesChange',
            cssClasses: "test222",
            get: function(element) {
                return {'parmesChange':getBusinessObject(element).parmesChange};
            },
            set: function(element, properties) {
                getBusinessObject(element).parmesChange = properties['parmesChange'];
                return cmdHelper.updateProperties(element, properties);
            }
        }));

        group.entries.push(entryFactory.textBox({
            id: 'path',
            label: 'path',
            modelProperty: 'path',
            cssClasses: "test222",
            get: function(element) {
                return {'path':getBusinessObject(element).path};
            },
            set: function(element, properties) {
                getBusinessObject(element).path = properties['path'];
                return cmdHelper.updateProperties(element, properties);
            }
        }));

        group.entries.push(entryFactory.table({
            id: 'header',
            labels: ['header','test'],
            modelProperties: ['header','test'],
            cssClasses: "test222",
            getElements: function(elements, properties) {
                return [{'header':'Content-Type','test':'application/json'},{'header':'csrfToken','test':'${token}'}];
            },
            updateElement: function(element, properties) {

                getBusinessObject(element).header = properties['header'];
                getBusinessObject(element).test = properties['test'];
                return cmdHelper.updateProperties(getBusinessObject(element), properties);
            }
        }));
        group.entries.push(entryFactory.textBox({
            id: 'body',
            label: 'body',
            modelProperty: 'body',
            cssClasses: "test3",
            get: function(element) {
                return {'body':getBusinessObject(element).body};
            },
            set: function(element, properties) {
                getBusinessObject(element).body = properties['body'];
                return cmdHelper.updateProperties(element, properties);
            }
        }));


    }
    //-----------------内容标签逻辑--------------------------end
}
