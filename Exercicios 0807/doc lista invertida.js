function clickOnHandle() {


    const number = document.getElementById('nameList').value
    let dataList = number.split(',')
    let backList = []

    for (let i = dataList.length; i >= 0; i--) {
        backList.push(dataList[i])

    }

    alert(`Names in Back list: ${backList}`)

}

