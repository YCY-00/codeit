function DDay(name, date) {
	let today = new Date()
  today.setHours(0, 0, 0, 0)
  let Dday = new Date(date)
  Dday.setHours(0, 0, 0, 0)
  
  let lef_time = (Dday.getTime()-today.getTime())/(24*60*60*1000)

  if (lef_time !==0){
  	console.log(`${name}까지 ${lef_time}일 남았습니다.`)
  }
  else{
    console.log(`${name}이 오늘 예정되어 있습니다. 잘 준비하시기 바랍니다.`)
  }
}

DDay('수능', "2024-03-21")