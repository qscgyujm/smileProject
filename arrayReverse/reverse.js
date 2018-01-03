
const test=[]

function mirror(pixels, width, height){
  let index = 0
  for (let i = 0; i < height; i++) {
    const tmpArray = pixels.splice(index, width)
    tmpArray.reverse()
    pixels.splice(index, 0, ...tmpArray)
    index = index + width
  }
  return pixels
}

function mirror2(pixels, width, height){
  let index = 0
  for (let i = 0; i < height; i++) {
    const tmpArray = pixels.splice(index, width)
    console.log(tmpArray);
    for (let j = 0; j <= width/2; j+=2) {
      const R = tmpArray[j+0]
      const B = tmpArray[j+1]

      tmpArray[j+0] = tmpArray[width-j-2]
      tmpArray[j+1] = tmpArray[width-j-1]

      tmpArray[width-j-2]= R
      tmpArray[width-j-1] = B
    }
    pixels.splice(index, 0, ...tmpArray)
    index = index + width
  }
  return pixels
}

function mirror3(pixels, width, height){
  let index = 0
  for (let i = 0; i < height; i++) {
    // const tmpArray = pixels.data.splice(index, width)
    // console.log(pixels.data);
    for (let j = 0; j < width/2; j+=4) {
      const start = index 
      const end = index + width

      const R = pixels[start+j+0]
      const G = pixels[start+j+1]
      const B = pixels[start+j+2]
      const A = pixels[start+j+3]

      pixels[start+j+0] = pixels[end-j-4]
      pixels[start+j+1] = pixels[end-j-3]
      pixels[start+j+2] = pixels[end-j-2]
      pixels[start+j+3] = pixels[end-j-1]

      pixels[end-j-4]= R
      pixels[end-j-3]= G
      pixels[end-j-2]= B
      pixels[end-j-1]= A
    }
    index = index + width
  }
  // console.log(pixels);
  return pixels
}


function hun(num){
  for (let i = 0; i < num; i++) {
    test[i] = (i).toString()
  }
}

hun(40)
mirror3(test, 8 , 5)
console.log(test)
