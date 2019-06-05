/**
 * find components 
 * 
 * 由一个组件，向上找到最近的指定组件； findComponentUpward
 * 由一个组件，向上找到所有的指定组件； findComponentsUpward
 * 由一个组件，向下找到最近的指定组件； findComponentDownward
 * 由一个组件，向下找到所有指定的组件； findComponentsDownward
 * 由一个组件，找到指定组件的兄弟组件。 findBrothersComponents
 * 
 * 5 个不同的场景，对应 5 个不同的函数，实现原理也大同小异。
 */
// Find component upward
export function findComponentUpward (context, componentName, componentNames) {
    componentNames = typeof componentName === 'string' ? [componentName] : componentName
    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}
// Find components upward
export function findComponentsUpward (context, componentName) {
    let parents = [];
    const parent = context.$parent;
    if (parent) {
        if (parent.$options.name === componentName) parents.push(parent);
        return parents.concat(findComponentsUpward(parent, componentName));
    }
        return [];
}
// Find component downward
export function findComponentDownward (context, componentName) {
    const childrens = context.$children;
    let children = null;

    if (childrens.length) {
        for (const child of childrens) {
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
}

// Find components downward
export function findComponentsDownward (context, componentName) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}

// Find brothers components
export function findBrothersComponents (context, componentName, exceptMe = true) {
    let res = context.$parent.$children.filter(item => {
        return item.$options.name === componentName;
    });
    let index = res.findIndex(item => item._uid === context._uid);
    if (exceptMe) res.splice(index, 1);
    return res;
}