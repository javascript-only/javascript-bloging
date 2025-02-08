function listAllProperties(o) {
    let objectToInspect = o;

    let result = [];


    while(objectToInspect !== null) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        objectToInspect = Object.getPrototypeOf(objectToInspect)
    }

    return result;
}
