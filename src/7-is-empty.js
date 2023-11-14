export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === 'object') {
    if (Array.isArray(stringArrayOrObject)) {
      return stringArrayOrObject.length === 0;
    } else {
    
      return Object.keys(stringArrayOrObject).length === 0;
    }
  } else if (type === 'array') {
    return stringArrayOrObject.length === 0
  } else return false
}