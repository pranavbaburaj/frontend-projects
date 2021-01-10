
class Component {
    constructor(selector) {
        this.selector = selector;
        this.components = []
    }

    registerComponent(componentTemplate, componentName) {
        this.components.push(componentTemplate)
        this.update()
    }

    update() {
        if (this.components.length != 0) {
            var joinedComponents = ''
            this.components.forEach(function(component){
                joinedComponents += component.toString()
            })

            const element = document.querySelector(this.selector)
            
            if (element != null){
                element.innerHTML = joinedComponents
            }
        }
    }
}


export { Component }