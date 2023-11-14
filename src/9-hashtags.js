export const hashtags = (text) => {
  const returnArray = []
  text.split(" ").map(item => item.startsWith("#") && returnArray.push(item))
  return returnArray
}
