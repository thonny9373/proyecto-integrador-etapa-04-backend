
const handleObjMongoToObjJs = (elemento) => {
    console.dir(elemento)
    const objJS = JSON.parse(JSON.stringify(elemento))
    console.log(objJS)
    return objJS
}

export default handleObjMongoToObjJs