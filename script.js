

// init counter
var counter = 1

function createWrapper() {
  let wrapper = document.createElement("div")
  wrapper.classList.add('cell-wrapper')
  wrapper.addEventListener("click", e => {
    // alert("clicked")
    console.log("clicked")
  })
  return wrapper

}
function createCell(cellData) {
  const newCell = document.createElement("td")
  let wrapper = createWrapper()

  if (cellData.bo === true) {

    //number
    const num=document.createElement("p")
    num.innerHTML = `${counter++}`
    num.classList.add("num")
    wrapper.appendChild(num)

    //abbr 
    const h3 = document.createElement("h3")
    h3.innerHTML = cellData.type ? cellData.type : "Xx"
    wrapper.appendChild(h3)
    //desc
    const p = document.createElement("p")
    p.innerHTML = "Volume"
    wrapper.appendChild(p)
    const p2 = document.createElement("p")
    p2.innerHTML = "e_volume"
    wrapper.appendChild(p2)
  }

  if (cellData.type) {
    wrapper.classList.add(cellData.type)
  }

  newCell.appendChild(wrapper)
  return newCell
}
function createRow(rowData) {
  const newRow = document.createElement("tr")
  for (let i = 0; i < 18; i++) {
    let newCell = createCell(rowData[i])
    rowData[i].bo === true ? newCell.classList.add('with-bo') : null

    newRow.appendChild(newCell)
  }
  return newRow


}

document.addEventListener("DOMContentLoaded", e => {
  const table = document.querySelector("#periodic")

  //row 1
  table.appendChild(createRow([{ bo: true }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: true }]))

  // row 2
  table.appendChild(createRow([{ bo: true }, { bo: true }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }]))

  // row 3
  table.appendChild(createRow([{ bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }]))

  // row 4
  table.appendChild(createRow([{ bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }]))

  // row 5
  table.appendChild(createRow([{ bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }]))

  // row 6
  table.appendChild(createRow([{ bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }]))

  // row 7
  table.appendChild(createRow([{ bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }]))

  // row 8
  table.appendChild(createRow([{ bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }]))

    // row 9
  table.appendChild(createRow([{ bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: false, type: '' }, { bo: false, type: '' }, { bo: false, type: '' }]))



})