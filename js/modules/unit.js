export function getDataFromDoc(data) {
    let obj = data.data()
    obj.id = data.id
    return obj
}